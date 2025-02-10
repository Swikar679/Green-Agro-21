import React from 'react';

// Add your snacks here
const snacks = [
  {
    name: 'Special Dalmoth', // Product 1
    description: 'A crunchy and spicy traditional Indian and Nepali snack mix, made with fried lentils, nuts, and aromatic spices for a bold and savory flavor.',
    images: [
      'https://i.postimg.cc/7LHKLrr2/1.png'
    ]
  },
  {
    name: 'Furandana', // Product 2
    description: 'A classic namkeen snack made from puffed rice, gram flour, and spices, offering a crispy texture and a mildly spiced, tangy flavor.',
    images: [
      'https://i.postimg.cc/TPjvz6q5/11.png'
    ]
  },
  {
    name: 'Moong Daal', // Product 3
    description: 'Lightly roasted and salted moong dal, a crunchy, protein-rich snack perfect for healthy munching with a satisfying texture.',
    images: [
      'https://i.postimg.cc/nz0bLGWH/12.png'
    ]
  },
  {
    name: 'Salted Peanuts', // Product 4
    description: 'Crispy and perfectly salted peanuts, an all-time favorite snack packed with protein and rich, nutty flavor.',
    images: [
      'https://i.postimg.cc/wMGCXTHZ/13.png'
    ]
  },
  {
    name: 'Roasted Chana', // Product 5
    description: 'Nutritious and crunchy roasted chickpeas, high in protein and fiber, making for a delicious and healthy snack option.',
    images: [
      'https://i.postimg.cc/wMMKRsKD/14.png'
    ]
  }
];


const SnacksPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#37474F] mb-4">Snacks</h1>
        <p className="text-lg text-gray-600 mb-12">
          Discover our premium selection of authentic Nepali snacks, carefully sourced and packaged to preserve their rich flavors and aromas.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {snacks.flatMap((snack) =>
            snack.images.map((image, imgIndex) => (
              <div
                key={`${snack.name}-${imgIndex}`}
                className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative pb-[141.46%]"> {/* This creates the 1587:2245 aspect ratio */}
                  <img
                    src={image || 'https://via.placeholder.com/1587x2245'} // Placeholder if no image provided
                    alt={`${snack.name} - Image ${imgIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold text-white">{snack.name}</h3>
                    <p className="text-sm text-white/90">{snack.description}</p>
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

export default SnacksPage;