import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background overlay */}
      <div 
        className={`fixed inset-0 h-16 z-40 transition-all duration-300 pointer-events-none
          ${scrolled 
            ? 'bg-white/90 backdrop-blur-sm shadow-sm' 
            : 'bg-gradient-to-b from-black/50 via-black/30 to-transparent'}`} 
      />

      {/* Navbar content */}
      <nav className="fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="relative z-10">
              <Logo />
            </div>
            
            <div className="hidden md:flex space-x-8 relative z-10">
              <NavLink scrolled={scrolled} href="/">Home</NavLink>
              <NavLink scrolled={scrolled} href="/products">Products</NavLink>
              <NavLink scrolled={scrolled} href="/about">About</NavLink>
              <NavLink scrolled={scrolled} href="/contact">Contact</NavLink>
            </div>

            <button 
              className="md:hidden relative z-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className={scrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg mt-2 rounded-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <MobileNavLink scrolled={scrolled} href="/">Home</MobileNavLink>
                <MobileNavLink scrolled={scrolled} href="/products">Products</MobileNavLink>
                <MobileNavLink scrolled={scrolled} href="/about">About</MobileNavLink>
                <MobileNavLink scrolled={scrolled} href="/contact">Contact</MobileNavLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}

function NavLink({ href, children, scrolled }: NavLinkProps) {
  return (
    <Link 
      to={href}
      className={`font-medium transition-all duration-300 hover:text-primary
        ${scrolled ? 'text-gray-900' : 'text-white'}`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      to={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-100 transition-all duration-300"
    >
      {children}
    </Link>
  );
}