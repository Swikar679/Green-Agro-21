import React from 'react';

// Add your products here
const spices = [
  {
    name: 'PaniPuri Masala', // Product 1
    description: 'Our signature PaniPuri Masala blend, perfect for creating authentic street food flavors.',
    images: [
      'https://i.postimg.cc/T13xj4bL/5.png' // Replace with your image URL
    ]
  },
  {
    name: 'Momo Masala', // Product 2
    description: 'Special blend for enhancing meat dishes with authentic Nepali flavors.',
    images: [
      'https://i.postimg.cc/vHDMcCMC/6.png' // Add your image URL here
    ]
  },
  {
    name: 'Chatepate Masala', // Product 3
    description: 'Perfect blend of spices specially crafted for chicken dishes.',
    images: [
      'https://i.postimg.cc/44Ws4XCz/7.png' // Add your image URL here
    ]
  },
  {
    name: 'Timmure Masala', // Product 4
    description: 'Versatile spice blend suitable for various dishes.',
    images: [
      'https://i.postimg.cc/TPvXNwmX/10.png' // Add your image URL here
    ]
  },
  {
    name: 'Chowmein Masala', // Product 5
    description: 'Special masala blend for perfect Nepali-style chowmein.',
    images: [
      'https://i.postimg.cc/Z5dSL3Wc/8.png' // Add your image URL here
    ]
  }
];

const SpicesPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#37474F] mb-4">Spices</h1>
        <p className="text-lg text-gray-600 mb-12">
          Discover our premium selection of authentic Nepali spices, carefully sourced and packaged to preserve their rich flavors and aromas.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {spices.flatMap((spice) => 
            spice.images.map((image, imgIndex) => (
              <div 
                key={`${spice.name}-${imgIndex}`} 
                className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative pb-[141.46%]"> {/* This creates the 1587:2245 aspect ratio */}
                  <img 
                    src={image || 'https://via.placeholder.com/1587x2245'} // Placeholder if no image provided
                    alt={`${spice.name} - Image ${imgIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold text-white">{spice.name}</h3>
                    <p className="text-sm text-white/90">{spice.description}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SpicesPage;