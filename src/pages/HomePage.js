// src/pages/HomePage.js
import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-4">Welcome to ShopSphere</h1>
            <FeaturedProducts />
            <Categories />
            <Testimonials />
        </div>
    );
};

export default HomePage;
