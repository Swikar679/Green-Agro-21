import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductsDropdownProps {
  scrolled: boolean;
}

export const ProductsDropdown = ({ scrolled }: ProductsDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div className="relative"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
      <button className={`flex items-center font-medium transition-colors
                       ${scrolled ? 'text-gray-800 hover:text-gray-900' : 'text-white/90 hover:text-white'}`}>
        Products <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <div className={`absolute ${isOpen ? 'block' : 'hidden'} w-48
                    shadow-lg py-2 mt-2 rounded-lg
                    ${scrolled 
                      ? 'bg-white border-gray-200/20' 
                      : 'bg-black/10 backdrop-blur-md border-white/10'}
                    border`}>
        <Link to="/products/spices" 
              className={`block px-4 py-2 transition-colors rounded-md mx-1
                       ${scrolled 
                         ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                         : 'text-white/90 hover:text-white hover:bg-white/10'}`}>
          Spices
        </Link>
        <Link to="/products/nepali-products"
              className={`block px-4 py-2 transition-colors rounded-md mx-1
                       ${scrolled 
                         ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                         : 'text-white/90 hover:text-white hover:bg-white/10'}`}>
          Nepali Products
        </Link>
        <Link to="/products/snacks"
              className={`block px-4 py-2 transition-colors rounded-md mx-1
                       ${scrolled 
                         ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                         : 'text-white/90 hover:text-white hover:bg-white/10'}`}>
          Snacks
        </Link>
        <Link to="/products/pickles"
              className={`block px-4 py-2 transition-colors rounded-md mx-1
                       ${scrolled 
                         ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                         : 'text-white/90 hover:text-white hover:bg-white/10'}`}>
          Pickles
        </Link>
      </div>
    </div>
  );
};