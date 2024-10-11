import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-700">${product.price}</p>
        <button className="mt-4 w-full bg-gray-800 text-white py-2 rounded hover:bg-blue-600">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
