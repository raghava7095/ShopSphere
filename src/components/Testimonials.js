// src/components/Testimonials.js
import React from 'react';

const testimonials = [
    { id: 1, name: 'John Doe', feedback: 'Great service and quality products!', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jane Smith', feedback: 'I love shopping here. Highly recommend!', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Alice Johnson', feedback: 'Fast shipping and excellent customer support.', image: 'https://via.placeholder.com/150' },
];

const Testimonials = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="border rounded-lg p-4">
                        <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-2" />
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
