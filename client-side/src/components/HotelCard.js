import React from 'react';
import { Link } from 'react-router-dom';

const HotelCard = ({ hotel, imageUrl ,id}) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card hotel-card shadow-sm">
        <div className="hotel-card-img" style={{ backgroundImage: `url(${imageUrl})`, height: '150px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        <div className="card-body p-3">
          <h5 className="card-title text-truncate" title={hotel.name}>{hotel.name}</h5>
          <p className="card-text small mb-2">
            <span className="text-muted">Added: </span>{new Date(hotel.createdAt).toLocaleDateString()}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-warning text-dark">Rating: {Math.round(hotel.rating/hotel.totalrating,0)}/5</span>
            <Link to={`/ViewHotel/${id}`} className="btn btn-sm btn-primary">
              View Hotel
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
