import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, MapPin } from 'lucide-react';

const Header = ({ cartCount }) => {
    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" className="logo">
                    TRAVELEASE
                </Link>
                <nav>
                    <Link to="/cart" className="cart-icon-container">
                        <ShoppingCart size={24} />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
