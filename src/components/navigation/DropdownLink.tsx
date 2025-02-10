import React from 'react';

interface DropdownLinkProps {
  href: string;
  children: React.ReactNode;
}

export const DropdownLink = ({ href, children }: DropdownLinkProps) => (
  <a 
    href={href} 
    className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r 
               from-[#4CAF50] to-[#45a049] hover:text-white transition-colors
               rounded-md mx-1"
  >
    {children}
  </a>
);