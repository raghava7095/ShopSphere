// src/components/FeaturedProducts.js
import React from 'react';

const featuredProducts = [
    { id: 1, name: 'Product 1', price: '$25.00', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$35.00', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$45.00', image: 'https://via.placeholder.com/150' },
];

const FeaturedProducts = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredProducts.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4">
                        <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-gray-700">{product.price}</p>
                        <button className="mt-2 bg-gray-800 text-white p-2 rounded">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
