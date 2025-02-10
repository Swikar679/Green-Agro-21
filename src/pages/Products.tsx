import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Spices',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Premium Nepali spices and seasonings',
    link: '/products/spices'
  },
  {
    title: 'Traditional Nepali Products',
    image: 'https://i.postimg.cc/j5qSLwF4/Gemini-Generated-Image-30ssoe30ssoe30ss.jpg',
    description: 'Authentic Nepali traditional products',
    link: '/products/nepali-products'
  },
  {
    title: 'Snacks',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Traditional Nepali snacks',
    link: '/products/snacks'
  },
  {
    title: 'Pickles',
    image: 'https://i.postimg.cc/qRKj6q6g/DALL-E-2025-02-10-10-10-41-A-traditional-Nepali-style-pickle-achar-presented-in-a-small-clay-bow.webp',
    description: 'Authentic Nepali pickles and preserves',
    link: '/products/pickles'
  }
];

export default function Products() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.title}
              to={category.link}
              className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative pb-[141.46%]"> {/* This creates the 1587:2245 aspect ratio */}
                <img 
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-white text-opacity-90">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}