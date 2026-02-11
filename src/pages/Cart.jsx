import React, { useState } from 'react';
import { Trash2, ShoppingBag } from 'lucide-react';
import CheckoutModal from '../components/CheckoutModal';

const Cart = ({ cart, onRemoveFromCart, onClearCart }) => {
    console.log(cart)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;

    if (cart.length === 0) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <ShoppingBag size={64} style={{ color: '#BDC3C7', marginBottom: '20px' }} />
                <h2>Your cart is empty</h2>
                <p style={{ color: '#708090', marginTop: '10px' }}>Looks like you haven't added any adventures yet.</p>
            </div>
        );
    }

    return (
        <main className="container cart-page">
            <h1 className="cart-title">Your Travel Cart</h1>

            <div className="cart-container">
                <div className="cart-items">
                    {cart.map((item, index) => (
                        <div key={`${item.id}-${index}`} className="cart-item">
                            <img src={item.imageURL} alt={item.name} className="cart-item-img" />
                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <p style={{ color: '#708090' }}>{item.destination}</p>
                                <div style={{ fontWeight: '700', marginTop: '5px' }}>${item.price}</div>
                            </div>
                            <button
                                className="remove-btn"
                                onClick={() => onRemoveFromCart(index)}
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2 style={{ marginBottom: '20px' }}>Order Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Fees & Taxes (10%)</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="summary-row total-row">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>

                    <button
                        className="checkout-btn"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>

            <CheckoutModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onClearCart={onClearCart}
            />
        </main>
    );
};

export default Cart;
