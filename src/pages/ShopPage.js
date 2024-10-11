import React from 'react';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
  // Sample products
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 39.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150' },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
