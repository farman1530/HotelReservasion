import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar'; // Assuming you have a NavBar component
import { toast } from 'react-toastify';
import { UserContext } from './UserContext';
import './Bookings.css'; // Add a custom CSS file for better design

const Bookings = () => {
  const [bookings, setBookings] = useState([]); // Ensure it's an empty array by default
  const { user, endpoint } = useContext(UserContext);

  // Fetch booking data on component mount
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${endpoint}/api/bookings/user/${user.id}`); // Replace with actual endpoint

        // Make sure response.data is an array before setting state
        if (Array.isArray(response.data)) {
          setBookings(response.data);
        } else {
          setBookings([]); // If it's not an array, set an empty array
          toast.error('Invalid response data.');
        }
      } catch (error) {
        console.log(error);
        toast.error('Failed to fetch bookings.');
      }
    };

    fetchBookings();
  }, [user.id, endpoint]);

  return (
    <>
      <NavBar />
      <section className="bookings-section">
        <div className="container">
          <div className="bookings-list">
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <div key={booking.bookingId} className="booking-card">
                  <div className="booking-info">
  <h3>Booking Details</h3>
  <div className="info-row">
    <p>
      <strong>Booking ID:</strong> {booking.bookingId}
    </p>
    <p>
      <strong>Hotel:</strong> {booking.hotel.name}
    </p>
  </div>
  <div className="info-row">
    <p>
      <strong>Location:</strong> {booking.hotel.location}
    </p>
    <p>
      <strong>Room Type:</strong> {booking.roomType}
    </p>
  </div>
  <div className="info-row">
    <p>
      <strong>Check-in:</strong> {booking.checkInDate}
    </p>
    <p>
      <strong>Check-out:</strong> {booking.checkOutDate}
    </p>
  </div>
  <div className="info-row">
    <p>
      <strong>Number of Persons:</strong> {booking.numPersons}
    </p>
    <p>
      <strong>Number of Children:</strong> {booking.numChildren}
    </p>
  </div>
  <div className="info-row">
    <p>
      <strong>Price:</strong> ${booking.price}
    </p>
    <p>
      <strong>Payment Mode:</strong> {booking.paymentMode}
    </p>
  </div>
</div>

                  <div className="booking-status">
                    {booking.status === 'PENDING' ? (
                      <span className="status-badge pending">Pending</span>
                    ) : booking.status === 'SUCCESS' ? (
                      <span className="status-badge success">Confirmed</span>
                    ) : (
                      <span className="status-badge rejected">Rejected</span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>No bookings found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Bookings;
