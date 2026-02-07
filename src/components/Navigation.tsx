import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Accueil', labelEn: 'Home' },
    { path: '/services', label: 'Services', labelEn: 'Services' },
    { path: '/about', label: 'À Propos', labelEn: 'About' },
    { path: '/portfolio', label: 'Portfolio', labelEn: 'Portfolio' },
    { path: '/contact', label: 'Contact', labelEn: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Pub2Plus Logo" className="h-20" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'font-bold'
                    : 'hover:opacity-70'
                }`}
                style={{
                  color: isActive(link.path) ? '#0167B3' : '#3F3F3F',
                }}
              >
                {language === 'fr' ? link.label : link.labelEn}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm px-3 py-2 rounded border border-gray-300 hover:bg-gray-50 transition-colors"
              aria-label="Change language"
            >
              <Globe size={16} />
              <span>{language === 'fr' ? 'FR' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 text-lg font-medium ${
                  isActive(link.path) ? 'font-bold' : ''
                }`}
                style={{
                  color: isActive(link.path) ? '#0167B3' : '#3F3F3F',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'fr' ? link.label : link.labelEn}
              </Link>
            ))}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-base px-4 py-3 rounded border border-gray-300 w-full justify-center hover:bg-gray-50 transition-colors"
              aria-label="Change language"
            >
              <Globe size={18} />
              <span>{language === 'fr' ? 'FR | EN' : 'EN | FR'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}