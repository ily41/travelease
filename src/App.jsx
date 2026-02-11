import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';
import Cart from './pages/Cart';

function App() {
    const [cart, setCart] = useState(() => {
        // Initialize from localStorage if available
        const savedCart = localStorage.getItem('travel_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('travel_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to your booking!`);
    };

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <Router>
            <div className="app">
                <Header cartCount={cart.length} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<Details onAddToCart={addToCart} />} />
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                cart={cart}
                                onRemoveFromCart={removeFromCart}
                                onClearCart={clearCart}
                            />
                        }
                    />
                </Routes>

                <footer style={{ backgroundColor: '#333', color: '#F5F5F5', padding: '40px 0', marginTop: '60px' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <p>&copy; 2024 TRAVELEASE. All rights reserved.</p>
                        <p style={{ color: '#708090', fontSize: '0.9rem', marginTop: '10px' }}>Simplifying your next journey with elegance.</p>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
