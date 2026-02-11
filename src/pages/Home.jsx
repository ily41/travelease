import React from 'react';
import TravelCard from '../components/TravelCard';
import products from '../products.json';

const Home = () => {
    return (
        <main className="container">
            <section style={{ marginTop: '40px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '10px' }}>Explore the World</h1>
                <p style={{ color: '#708090', fontSize: '1.2rem' }}>Curated travel packages for the modern explorer.</p>
            </section>

            <div className="product-grid">
                {products.map(product => (
                    <TravelCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
};

export default Home;
