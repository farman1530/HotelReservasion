import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import "./ViewHotel.css";
import { UserContext } from "./UserContext";
import { toast } from 'react-toastify'
import { useForm } from "react-hook-form"

const HotelView = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState();
  const [numberOfRooms, setNumberOfRooms] = useState();
  const [availability, setAvailability] = useState(null);
  const [rating, setRating] = useState(5); // Default rating to 5
  const [bookHotelModel,setBookHotelModel] =  useState(false);
  const { register, reset, handleSubmit } = useForm();
  const [isAvailable,setIsAvailable] =useState(false);
  const [booking,setBooking] =useState(null);
  const [paymentModel,setPaymentModel]=useState(false);
  const [transactionId,setTransactionId]=useState("");


  const { endpoint, user } = useContext(UserContext);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const hotelRes = await axios.get(`${endpoint}/api/hotels/${id}`);
        setHotel(hotelRes.data);

        const imageRes = await axios.get(`${endpoint}/api/hotels/images/${id}`, { responseType: "arraybuffer" });
        const base64String = btoa(new Uint8Array(imageRes.data).reduce((data, byte) => data + String.fromCharCode(byte), ""));
        setImageUrl(`data:image/jpeg;base64,${base64String}`);
      } catch (error) {
        console.error("Error fetching hotel:", error);
      }
    };

    const fetchRooms = async () => {
      try {
        const roomsRes = await axios.get(`${endpoint}/api/rooms/hotel/${id}`);
        setRooms(roomsRes.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const reviewsRes = await axios.get(`${endpoint}/api/reviews/hotel/${id}`);
        setReviews(reviewsRes.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchHotelData();
    fetchRooms();
    fetchReviews();
  }, [id, endpoint]);

  const checkAvailability = async () => {
    console.log(numberOfRooms+" "+selectedRoomType);
    try {
      const response = await axios.post(`${endpoint}/api/rooms/checkAvailability`, {
        id: selectedRoomType,
        available_rooms: numberOfRooms,
      });
      if(response.status=200)setAvailability({message:"Available"})
        else{
          setAvailability({message:"Not Available"});
          setIsAvailable(true);
        }
    } catch (error) {
      setAvailability({message:"Not Available"});
    }
  };

  const handleReviewSubmit = async () => {
    if (newReview.trim()) {
      try {
        const reviewData = {
          user: { id: user.id }, // Use optional chaining
          hotel: { id: id },
          rating: rating,
          text: newReview,
        };

        await axios.post(`${endpoint}/api/reviews`, reviewData);
        setNewReview(""); // Clear input
        setRating(5); // Reset rating to default after submission

        // Fetch updated reviews
        const updatedReviews = await axios.get(`${endpoint}/api/reviews/hotel/${id}`);
        setReviews(updatedReviews.data);
      } catch (error) {
        console.error("Error submitting review:", error);
      }
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await axios.delete(`${endpoint}/api/reviews/${reviewId}`);
      setReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewId));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  const handleChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const selectedKey = selectedOption.getAttribute('data-key');
    setSelectedRoomType(selectedKey);
    console.log('Selected Key:', selectedKey);
  };

  const HandleBooking=(data)=>{
    try {
       axios.post(`${endpoint}/api/bookings`, {
          "user": {
            "id": user.id
          },
          "hotel": {
            "id": id
          },
          "room": {
            "id": selectedRoomType
          },
          checkInDate: data.check_in_date,
          checkOutDate: data.check_out_date,
          numberOfPersons: data.number_of_persons,
          childrenCount: data.children_count,
          roomType: "Single"
      })
      .then(res=>{
        console.log(res.data);
        if(res.status===201){
          setBookHotelModel(false);
          setBooking(res.data);
          setPaymentModel(true);
          reset({});
        }
      })
      .catch(error=>{
        console.log(error)
      })
      // alert("Room booked successfully!");
    } catch (error) {
      console.error("Error booking room:", error);
    }
  }

  const handlePaymentConfirmation=()=>{
    if(transactionId===""){
      toast.warning("Plese Provide Transaction Id");
    }else{
      axios.post(`${endpoint}/api/bookings/confirm/${booking.bookingId}?transactionId=${transactionId}`)
      .then(res => {
        console.log(res.data);
        toast.success("Booking Requested successfully!");
        setTransactionId("");
        setPaymentModel(false);
      })
      .catch(error => {
        console.error(error);
        // Display an error message based on the error type
        if (error.response) {
          // The request was made and the server responded with a status code
          toast.error(`Error: ${error.response.data.error || "An error occurred"}`);
        } else if (error.request) {
          // The request was made but no response was received
          toast.error("No response from the server.");
        } else {
          // Something else happened
          toast.error(`Error: ${error.message}`);
        }
      });    
  }
  }

  return (
    <>
      <NavBar />
      <div className="view-hotel-container">
        {hotel && (
          <div className="hotel-layout">
            {imageUrl && (
              <div className="hotel-image-container">
                <img src={imageUrl} alt={hotel.name} className="hotel-image" />
              </div>
            )}
            <div className="hotel-details" style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
              <h1 className="hotel-title" style={{ fontSize: "2.5rem", fontWeight: "bold", margin: "0", color: "#333" }}>
                {hotel.name}
              </h1>
              <div className="hotel-rating" style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                <span className="star-rating" style={{ color: "gold", marginRight: "10px" }}>
                  {hotel.totalrating > 0 && Array(Math.round(hotel.rating / hotel.totalrating)).fill().map((_, index) => (
                    <i key={index} className="fa fa-star" style={{ fontSize: "1.5rem" }}></i>
                  ))}
                </span>
                <p className="rating-number" style={{ fontSize: "1.2rem", color: "#666" }}>
                  {hotel.totalrating > 0 ? `(${Math.round(hotel.rating / hotel.totalrating)}/5)` : "(No ratings yet)"}
                </p>
              </div>

              <div className="booking-section">
                <h2>Select Your Room</h2>
                <div className="booking-controls">
                  <select
                    value={selectedRoomType}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="" disabled>
                      Select a room type
                    </option>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id} data-key={room.id}>
                        {room.room_type}
                      </option>
                    ))}
                  </select>
                  <input type="number" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} min="1" className="form-control" placeholder="Number of people" />
                  <input type="number" value={numberOfRooms} onChange={(e) => setNumberOfRooms(e.target.value)} min="1" className="form-control" placeholder="Number of rooms" />
                  <div className="button-container">
                    <button onClick={checkAvailability} className="btn btn-check-availability">
                      Check Availability
                    </button>
                    <button onClick={()=>setBookHotelModel(true)} className="btn btn-book-room" data-toggle="modal" data-target="#exampleModal">
                      Book Room
                    </button>
                  </div>
                </div>
                {availability && <p>{availability.message}</p>}
              </div>

              <h2 className="section-title">Reviews</h2>
              {reviews.length > 0 ? (
                <ul className="list-group">
                  {reviews.map((review) => (
                    <li key={review.id} className="list-group-item review-item" style={{ marginBottom: "15px", padding: "15px", border: "1px solid #ddd", borderRadius: "5px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <strong>{review.user.username}</strong>
                        <span style={{ color: "#FFA500", fontWeight: "bold" }}>
                          {Array(review.rating).fill().map((_, index) => (
                            <i key={index} className="fa fa-star"></i>
                          ))}
                        </span>
                      </div>
                      <p style={{ margin: "5px 0" }}>{review.text}</p>
                      <span className="review-date" style={{ fontSize: "0.9em", color: "#666" }}>
                        {new Date(review.created_at).toLocaleDateString()}
                      </span>
                      {/* Check if user is defined before accessing id */}
                      {user && review.user.id === user.id && (
                        <button onClick={() => handleDeleteReview(review.id)} className="btn btn-danger mt-2" title="Delete Review">
                          <i className="fa fa-trash"></i> {/* Trash icon for delete action */}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-reviews">No reviews yet.</p>
              )}

              <div className="review-form">
                <textarea value={newReview} onChange={(e) => setNewReview(e.target.value)} placeholder="Write your review..." className="form-control" />
                <div className="rating-selection">
                  <span>Rate: </span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <label key={star} className="rating-star" style={{ cursor: "pointer" }}>
                      <input type="radio" value={star} checked={rating === star} onChange={() => setRating(star)} style={{ display: "none" }} />
                      <i className="fa fa-star" style={{ color: star <= rating ? "gold" : "lightgray", fontSize: "1.5rem" }}></i>
                    </label>
                  ))}
                </div>
                <button onClick={handleReviewSubmit} className="btn btn-primary">Submit Review</button>
              </div>
            </div>
          </div>
        )}
      </div>
      {bookHotelModel  &&(
  <div className="modal-overlay">
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Booking</h5>
            <button
              type="button"
              className="close"
              onClick={() => setBookHotelModel(false)}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(HandleBooking)} method="post">
              {/* Check-in Date */}
              <div className="form-group mb-1">
                <label htmlFor="check_in_date" className="form-label">Check-in Date</label>
                <input
                  type="date"
                  id="check_in_date"
                  className="form-control"
                  min="2024-11-24"
                  {...register("check_in_date", { required: true })}
                />
              </div>
              {/* Check-out Date */}
              <div className="form-group mb-1">
                <label htmlFor="check_out_date" className="form-label">Check-out Date</label>
                <input
                  type="date"
                  id="check_out_date"
                  className="form-control"
                  min="2024-11-24"
                  {...register("check_out_date", { required: true })}
                />
              </div>
              {/* Number of Persons */}
              <div className="form-group mb-1">
                <label htmlFor="number_of_persons" className="form-label">Number of Persons</label>
                <input
                  type="number"
                  id="number_of_persons"
                  className="form-control"
                  placeholder="Enter Number of Persons"
                  {...register("number_of_persons", { required: true })}
                />
              </div>
              {/* Children Count */}
              <div className="form-group mb-1">
                <label htmlFor="children_count" className="form-label">Children Count</label>
                <input
                  type="number"
                  id="children_count"
                  className="form-control"
                  placeholder="Enter Children Count"
                  {...register("children_count", { required: true })}
                />
              </div>
              {/* Submit Button */}
              <div className="d-grid mt-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

  {paymentModel&&(
      <div className="modal-overlay">
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h5 className="modal-title">Payment Details</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setPaymentModel(false)}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {/* Modal Body */}
              <div className="modal-body">
                {/* QR Code Image */}
                <div className="qr-code-container" style={{ textAlign: "center", marginBottom: "20px" }}>
                  <img
                    src="/qr-code.jpeg"
                    alt="QR Code"
                    className="qr-code"
                    style={{ maxWidth: "200px", borderRadius: "8px" }}
                  />
                </div>
                {/* Payment Info */}
                <div className="payment-info" style={{ marginBottom: "20px" }}>
                  <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>UPI ID: <span style={{ color: "#007BFF" }}>MhPrime2002@axl</span></p>
                  <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Amount: <span style={{ color: "#28A745" }}>{booking.totalAmount}</span></p>
                </div>
                {/* Transaction ID Input */}
                <div className="form-group">
                  <label htmlFor="transaction_id" style={{ fontWeight: "bold" }}>Enter Transaction ID</label>
                  <input
                    type="text"
                    id="transaction_id"
                    className="form-control"
                    placeholder="Enter transaction ID"
                    value={transactionId}
                    required
                    onChange={(e) => setTransactionId(e.target.value)}
                  />
                </div>
              </div>
              {/* Modal Footer */}
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handlePaymentConfirmation}
                >
                  I Have Paid
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setPaymentModel(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>    
  )}
    </>
  );
};

export default HotelView;
