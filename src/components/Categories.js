// src/components/Categories.js
import React from 'react';

const categories = [
    { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Fashion', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Home & Garden', image: 'https://via.placeholder.com/150' },
];

const Categories = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                    <div key={category.id} className="border rounded-lg p-4 text-center">
                        <img src={category.image} alt={category.name} className="w-full h-32 object-cover mb-2" />
                        <h3 className="font-semibold">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
