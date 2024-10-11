import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center relative">
                {/* Logo with Icon */}
                <div className="flex items-center">
                    <FaShoppingCart className="text-3xl mr-2" />
                    <h1 className="text-2xl font-bold">ShopSphere</h1>
                </div>

                {/* Hamburger Menu Icon for Mobile */}
                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none fixed top-4 right-4 z-50"
                    >
                        {isOpen ? (
                            <FaTimes className="w-6 h-6" />
                        ) : (
                            <FaBars className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Full Screen Overlay Menu for Mobile */}
                <div
                    className={`${
                        isOpen ? 'fixed inset-0 bg-gray-800 flex flex-col justify-center items-center z-40' : 'hidden'
                    } sm:flex sm:space-x-4 sm:items-center sm:relative sm:bg-transparent sm:h-auto`}
                >
                    <ul className="text-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <li>
                            <Link
                                className="block text-white hover:text-gray-400 p-2"
                                to="/"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block text-white hover:text-gray-400 p-2"
                                to="/shop"
                                onClick={() => setIsOpen(false)}
                            >
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block text-white hover:text-gray-400 p-2"
                                to="/cart"
                                onClick={() => setIsOpen(false)}
                            >
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block text-white hover:text-gray-400 p-2"
                                to="/profile"
                                onClick={() => setIsOpen(false)}
                            >
                                <FaUserCircle className="inline-block mr-1" /> Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
