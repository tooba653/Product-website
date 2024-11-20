"use client";
import Image from 'next/image';
import { formatPrice } from './utils/helpers';
import { useState } from 'react';

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [currency, setCurrency] = useState('USD');

  const product = {
    id: 1,
    name: "Eco-Friendly Water Bottle",
    price: 2599,
    description:
      "Stay hydrated sustainably with our eco-friendly water bottle! Made from BPA-free, recyclable materials, this bottle is durable and perfect for on-the-go use. Its sleek design and leak-proof cap make it ideal for every occasion.",
    imageUrl: "/product.jpg", 
  };

  const handleQuantityChange = (amount:any) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <main className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={300}
        className="rounded-lg shadow-lg mb-4"
      />
      <p className="text-gray-600 mb-4 text-center">{product.description}</p>
      <div className="text-blue-800 mb-5 text-center">
        <p><strong>Contact Us:</strong> 03452168078</p>
        <p><strong>Instagram:</strong>Tooba Yameen.75</p>
      </div>
      
      
      <div className="mb-4">
        <label htmlFor="currency" className="text-gray-700 mr-2">Select Currency:</label>
        <select 
          id="currency" 
          value={currency} 
          onChange={(e) => setCurrency(e.target.value)}
          className="bg-white border border-gray-300 rounded-md p-1"
        >
          <option value="USD">USD</option>
          <option value="PKR">PKR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>

      <h2 className="text-2xl font-semibold text-green-600 mb-4">
        {formatPrice(product.price * quantity, currency)}
      </h2>

      <div className="flex items-center mb-4">
        <button
          onClick={() => handleQuantityChange(-1)}
          className="px-2 py-1 bg-gray-300 rounded-l-lg hover:bg-gray-400"
        >
          -
        </button>
        <span className="px-4 text-lg">{quantity}</span>
        <button
          onClick={() => handleQuantityChange(1)}
          className="px-2 py-1 bg-gray-300 rounded-r-lg hover:bg-gray-400"
        >
          +
        </button>
      </div>

      <button className="bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition duration-300">
        Add to Cart
      </button>
      <p className="mt-4 text-sm text-gray-500">Limited stock available!</p>
    </main>
  );
};

export default Product;
