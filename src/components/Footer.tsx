import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#0A1E2E] text-white border-t-4 border-[#FFD700]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span style={{ color: '#F15921 ' }}>Pub2</span>
              <span style={{ color: '#0167B3' }}>Plus</span>
            </div>
            <p className="text-sm mb-2 text-gray-300">
              {language === 'fr' 
                ? 'Créations | Impressions | PLV | Signalétique'
                : 'Creations | Printing | POS | Signage'
              }
            </p>
            <p className="text-sm text-gray-300" dir="rtl">
              خدمات الطباعة و صناعة الإشهار
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#F15921 ' }}>
              {language === 'fr' ? 'Services Rapides' : 'Quick Services'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'fr' ? 'Impression Grand Format' : 'Large Format Printing'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'fr' ? 'Signalétique' : 'Signage'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'fr' ? 'PLV & Stands' : 'POS & Stands'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'fr' ? 'Habillage Véhicule' : 'Vehicle Wrapping'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  {language === 'fr' ? 'Impression Petit Format' : 'Small Format Printing'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#F15921 ' }}>
              {language === 'fr' ? 'Contact' : 'Contact'}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" style={{ color: '#FFD700' }} />
                <span className="text-gray-300">
                  Casablanca, Maroc
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" style={{ color: '#0167B3' }} />
                <a href="tel:+212XXXXXXXXX" className="text-gray-300 hover:text-white transition-colors">
                  +212 XXX-XXXXXX
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" style={{ color: '#FFD700' }} />
                <a href="mailto:contact@Pub2Plus.ma" className="text-gray-300 hover:text-white transition-colors">
                  contact@Pub2Plus.ma
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="flex-shrink-0 mt-1" style={{ color: '#0167B3 ' }} />
                <span className="text-gray-300">
                  {language === 'fr' ? 'Lun-Ven: 9h-18h' : 'Mon-Fri: 9am-6pm'}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#F15921 ' }}>
              {language === 'fr' ? 'Suivez-nous' : 'Follow Us'}
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#25D366' }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            {language === 'fr'
              ? '© 2025 Pub2Plus. Tous droits réservés.'
              : '© 2025 Pub2Plus. All rights reserved.'
            }
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            {/* <a href="#" className="hover:text-white transition-colors">
              Mentions Légales
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Politique de Confidentialité
            </a> */}
            <span>|</span>
            <span>Casablanca, Maroc</span>
          </div>
        </div>
      </div>
    </footer>
  );
}