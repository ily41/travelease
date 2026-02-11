import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, ChevronLeft } from 'lucide-react';
import products from '../products.json';

const Details = ({ onAddToCart }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2>Package not found</h2>
                <button onClick={() => navigate('/')} style={{ marginTop: '20px', color: '#708090' }}>Return to Home</button>
            </div>
        );
    }

    return (
        <main className="container details-page">
            <button
                onClick={() => navigate(-1)}
                style={{ background: 'none', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px', color: '#708090', fontWeight: '500' }}
            >
                <ChevronLeft size={20} /> Back to explore
            </button>

            <div className="details-grid">
                <img src={product.imageURL} alt={product.name} className="details-image" />

                <div className="details-content">
                    <div className="details-destination">
                        <MapPin size={18} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                        {product.destination}
                    </div>
                    <h1>{product.name}</h1>
                    <div className="details-price">${product.price}</div>
                    <p className="details-description">{product.description}</p>

                    <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
                        <h4 style={{ marginBottom: '10px' }}>What's Included:</h4>
                        <ul style={{ paddingLeft: '20px', color: '#555' }}>
                            <li>Premium Accommodation</li>
                            <li>Guided Tours</li>
                            <li>Local Transportation</li>
                            <li>Daily Breakfast</li>
                        </ul>
                    </div>

                    <button
                        className="add-to-cart-btn"
                        onClick={() => onAddToCart(product)}
                    >
                        Add to Booking
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Details;
