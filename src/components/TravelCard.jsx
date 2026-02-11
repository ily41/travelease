import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const TravelCard = ({ product }) => {
    return (
        <div className="travel-card">
            <img src={product.imageURL} alt={product.name} className="card-image" />
            <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <div className="card-destination">
                    <MapPin size={16} />
                    {product.destination}
                </div>
                <div className="card-footer">
                    <span className="card-price">${product.price}</span>
                    <Link to={`/product/${product.id}`} className="view-btn">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TravelCard;
