import { useState } from 'react';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-accent-green">MOE</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-base-dark hover:text-accent-green">Vorteile</a>
            <a href="#products" className="text-base-dark hover:text-accent-green">Produkte</a>
            <a href="#about" className="text-base-dark hover:text-accent-green">Über uns</a>
            <Button size="sm">Kontakt</Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-base-dark hover:text-accent-green">Vorteile</a>
            <a href="#products" className="block px-3 py-2 text-base-dark hover:text-accent-green">Produkte</a>
            <a href="#about" className="block px-3 py-2 text-base-dark hover:text-accent-green">Über uns</a>
            <div className="px-3 py-2">
              <Button fullWidth>Kontakt</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}