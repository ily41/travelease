import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

const CheckoutModal = ({ isOpen, onClose, onClearCart }) => {
    const [ isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        card: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
            setIsSubmitted(false);
        }, 3000);
    };

    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                {!isSubmitted ? (
                    <>
                        <h2 style={{ marginBottom: '20px' }}>Checkout</h2>
                        <form className="checkout-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Payment details (Placeholder)</label>
                                <input
                                    type="text"
                                    name="card"
                                    value={formData.card}
                                    onChange={handleChange}
                                    placeholder="0000 0000 0000 0000"
                                    required
                                />
                            </div>
                            <button type="submit" className="submit-btn">Complete Booking</button>
                        </form>
                    </>
                ) : (
                    <div className="success-message">
                        <CheckCircle size={64} className="success-icon" />
                        <h2>Booking Successful!</h2>
                        <p style={{ marginTop: '10px' }}>Your adventure starts soon. Check your email for details.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutModal;
