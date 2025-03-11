import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar'; // Assuming NavBar is your header component
import HotelCard from './HotelCard'; // Assuming HotelCard is your card component
import './hotel.css'; // Custom styles
import { UserContext } from './UserContext';

const HotelView = () => {
  const [hotelsByCity, setHotelsByCity] = useState({});
  const [imageUrls, setImageUrls] = useState({});
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const { endpoint, user } = useContext(UserContext);
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get(`${endpoint}/api/hotels`);
        const hotels = res.data;
        const groupedHotels = hotels.reduce((acc, hotel) => {
          if (!acc[hotel.city]) {
            acc[hotel.city] = [];
          }
          acc[hotel.city].push(hotel);
          return acc;
        }, {});
        setHotelsByCity(groupedHotels);
        setDataIsLoaded(true);

        // Fetch hotel images
        hotels.forEach(async hotel => {
          const imageRes = await axios.get(`${endpoint}/api/hotels/images/${hotel.id}`, {
            responseType: 'arraybuffer',
          });
          const base64String = btoa(
            new Uint8Array(imageRes.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
          setImageUrls(prevState => ({
            ...prevState,
            [hotel.id]: `data:image/jpeg;base64,${base64String}`,
          }));
        });
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        {dataIsLoaded ? (
          Object.keys(hotelsByCity).map(city => (
            <div key={city}>
              <h2>{city}</h2>
              <div className="horizontal-scroll">
                {hotelsByCity[city].map(hotel => (
                  <HotelCard
                    key={hotel.id}
                    id={hotel.id}
                    hotel={hotel}
                    imageUrl={imageUrls[hotel.id] || '/img/default.jpg'} // Fallback image if URL is not available
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
};

export default HotelView;
