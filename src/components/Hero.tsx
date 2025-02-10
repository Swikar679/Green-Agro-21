import React from 'react';

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4CAF50] to-[#45a049] inline-block text-transparent bg-clip-text drop-shadow-lg py-1">
            Welcome to Green Agro Products
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-white">
            Authentic Nepali Products
          </h2>
          <p className="text-lg md:text-2xl mt-6 max-w-3xl text-gray-200 mx-auto">
            Explore our premium selection of spices, traditional snacks, and
            authentic Nepali delicacies. Each product is carefully crafted to
            preserve Nepal's rich culinary heritage.
          </p>
        </div>
      </div>

      {/* Large Image Below Hero */}
      <div className="w-full mt-8">
        <img
          src="https://i.postimg.cc/V5y8yLTM/1.png"
          alt="Big Image Showcase"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Featured Products Section (This remains unchanged) */}
      <div className="w-full text-center mt-8"></div>
    </div>
  );
};

export default Hero;
