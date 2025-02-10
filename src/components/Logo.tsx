import { Leaf } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Logo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Leaf 
          className={`h-8 w-8 transition-all duration-300 text-primary animate-leaf
                     ${scrolled ? 'text-primary' : 'text-primary'}`}
          style={{
            filter: `drop-shadow(0 0 2px rgba(76, 175, 80, ${scrolled ? '0.3' : '0.5'}))`
          }}
        />
      </div>
      <div>
        <span className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
          Green Agro
        </span>
        <span className={`block text-xs transition-colors duration-300 ${scrolled ? 'text-gray-600' : 'text-white/80'}`}>
          Products Pvt. Ltd.
        </span>
      </div>
    </div>
  );
}