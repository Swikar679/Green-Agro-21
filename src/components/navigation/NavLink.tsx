import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}

export const NavLink = ({ href, children, scrolled }: NavLinkProps) => (
  <Link 
    to={href} 
    className={`relative font-medium transition-colors
               after:content-[''] after:absolute after:w-full after:h-0.5 
               after:bg-[#4CAF50] after:left-0 after:-bottom-1 
               after:scale-x-0 hover:after:scale-x-100 
               after:transition-transform after:duration-300
               ${scrolled ? 'text-gray-800 hover:text-gray-900' : 'text-white/90 hover:text-white'}`}
  >
    {children}
  </Link>
);