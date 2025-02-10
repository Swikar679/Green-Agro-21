import React from 'react';

const nepaliProducts = [
  {
    name: 'Khursani Powder',
    description: 'Authentic Nepali chili powder, adding a fiery kick to your dishes.',
    images: ['https://i.postimg.cc/wx4Y8FJ2/15.png']
  },
  {
    name: 'Chow Chow Masala',
    description: 'Special spice blend perfect for enhancing the flavors of chow chow.',
    images: ['https://i.postimg.cc/GpCZJfwL/16.png']
  },
  {
    name: 'Makai Mitho',
    description: 'Sweet and delicious Nepali corn flour, ideal for traditional recipes.',
    images: ['https://i.postimg.cc/026R8m0s/17.png']
  },
  {
    name: 'Corn Grits',
    description: 'High-quality coarse corn grits, perfect for making porridge and other dishes.',
    images: ['https://i.postimg.cc/sDtF1XTZ/18.png']
  },
  {
    name: 'Phapar Pitho',
    description: 'Nutritious buckwheat flour, a staple in traditional Nepali cuisine.',
    images: ['https://i.postimg.cc/x1Hwm2Zp/19.png']
  },
  {
    name: 'Kodo Pitho',
    description: 'Finger millet flour, rich in fiber and essential nutrients.',
    images: ['https://i.postimg.cc/xd3BsPnK/20.png']
  }
];

const NepaliProductsPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#37474F] mb-4">Nepali Products</h1>
        <p className="text-lg text-gray-600 mb-12">
          Explore our range of authentic Nepali products, carefully crafted to bring you the rich flavors of Nepal.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {nepaliProducts.flatMap((product) => 
            product.images.map((image, imgIndex) => (
              <div 
                key={`${product.name}-${imgIndex}`} 
                className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative pb-[141.46%]">
                  <img 
                    src={image} 
                    alt={`${product.name} - Image ${imgIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold text-white">{product.name}</h3>
                    <p className="text-sm text-white/90">{product.description}</p>
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

export default NepaliProductsPage;
