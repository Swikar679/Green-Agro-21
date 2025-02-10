import React from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';

interface NavActionsProps {
  onMenuClick: () => void;
  scrolled: boolean;
}

export const NavActions = ({ onMenuClick, scrolled }: NavActionsProps) => (
  <div className="flex items-center space-x-4">
    <Search className={`h-5 w-5 cursor-pointer transition-colors
                     ${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'}`} />
    <div className="relative">
      <ShoppingCart className={`h-5 w-5 cursor-pointer transition-colors
                             ${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'}`} />
      <span className="absolute -top-2 -right-2 bg-[#4CAF50] text-white text-xs 
                     rounded-full h-4 w-4 flex items-center justify-center">
        0
      </span>
    </div>
    <button onClick={onMenuClick} className="md:hidden">
      <Menu className={`h-6 w-6 transition-colors
                     ${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'}`} />
    </button>
  </div>
);