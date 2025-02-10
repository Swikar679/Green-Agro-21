import React from 'react';
import { Link } from 'react-router-dom';

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}

export const MobileNavLink = ({ href, children, scrolled }: MobileNavLinkProps) => (
  <Link 
    to={href} 
    className={`block px-3 py-2 rounded-lg transition-colors
              ${scrolled 
                ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                : 'text-white/90 hover:text-white hover:bg-white/10'}`}
  >
    {children}
  </Link>
);