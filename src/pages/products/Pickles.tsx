import React from 'react';

const pickles = [
  {
    name: 'Chutney Sauce',
    description: 'A tangy and spicy Nepali-style sauce, perfect as a dip or side for enhancing any meal.',
    images: ['https://i.postimg.cc/GhNRYzmt/9.png']
  },
  {
    name: 'Akabare Pickle',
    description: 'Fiery and flavorful pickle made from Nepali Akabare chilies, known for their intense heat and rich aroma.',
    images: ['https://i.postimg.cc/d1BvyYhc/2.png']
  },
  {
    name: 'Mix Pickle',
    description: 'A delicious blend of seasonal vegetables and spices, preserving the authentic taste of Nepali pickles.',
    images: ['https://i.postimg.cc/brVhm906/4.png']
  },
  {
    name: 'Mango Pickle',
    description: 'Traditional Nepali mango pickle with a perfect balance of tanginess, spice, and natural sweetness.',
    images: ['https://i.postimg.cc/cHZ0CH4c/3.png']
  }
];

const PicklesPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#37474F] mb-4">Pickles</h1>
        <p className="text-lg text-gray-600 mb-12">
          Enjoy the authentic taste of Nepal with our handcrafted pickles, made using traditional recipes and the finest ingredients.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pickles.flatMap((pickle) => 
            pickle.images.map((image, imgIndex) => (
              <div 
                key={`${pickle.name}-${imgIndex}`} 
                className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative pb-[141.46%]">
                  <img 
                    src={image} 
                    alt={`${pickle.name} - Image ${imgIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold text-white">{pickle.name}</h3>
                    <p className="text-sm text-white/90">{pickle.description}</p>
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

export default PicklesPage;
