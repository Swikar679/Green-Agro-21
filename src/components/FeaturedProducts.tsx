import React, { useState, useEffect, useRef } from 'react';

// Add your product images here
const productImages = [
  'https://i.postimg.cc/7LHKLrr2/1.png',
  'https://i.postimg.cc/x1Hwm2Zp/19.png',
  'https://i.postimg.cc/TPjvz6q5/11.png',
  'https://i.postimg.cc/cHZ0CH4c/3.png',
  'https://i.postimg.cc/Z5dSL3Wc/8.png',
];

// Duplicate images for seamless looping
const extendedImages = [
  productImages[productImages.length - 1], // Last image as the first duplicate
  ...productImages,
  productImages[0], // First image as the last duplicate
];

const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start from the first actual image
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    if (currentSlide >= extendedImages.length - 1) return;

    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide <= 0) return;

    setCurrentSlide((prev) => prev - 1);
  };

  useEffect(() => {
    if (currentSlide === extendedImages.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1); // Instantly jump to the first actual image
      }, 500);
    } else if (currentSlide === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(extendedImages.length - 2); // Instantly jump to the last actual image
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [currentSlide]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Products
        </h2>

        {/* Image Slider Container */}
        <div className="relative w-full max-w-[600px] h-[600px] mx-auto overflow-hidden rounded-xl shadow-lg">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: isTransitioning
                ? 'transform 0.5s ease-in-out'
                : 'none',
            }}
          >
            {extendedImages.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-[600px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {productImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index + 1)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index + 1
                    ? 'bg-green-500'
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Previous/Next Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
            aria-label="Next slide"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

