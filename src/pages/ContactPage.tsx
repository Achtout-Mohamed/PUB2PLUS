import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { Button } from '../components/Button';

export function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm mb-6 text-gray-300">
            <Link to="/" className="hover:text-white transition-colors">
              {t.home}
            </Link>
            <ChevronRight size={16} />
            <span>{t.contact}</span>
          </div>
          
          <h1 className="text-white mb-4"><span style={{color:'white'}}>{language === 'fr' ? 'Contactez-nous' : 'Contact Us'}</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {language === 'fr'
              ? 'Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans vos projets'
              : 'Our team is here to answer your questions and support you with your projects'
            }
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6">{language === 'fr' ? 'Envoyez-nous un Message' : 'Send us a Message'}</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <p className="text-green-800 font-semibold">
                    {language === 'fr' 
                      ? '✓ Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.'
                      : '✓ Thank you! Your message has been sent successfully. We will respond as soon as possible.'
                    }
                  </p>
                </div>
              ) : null}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === 'fr' ? 'Nom complet *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0167B3] focus:border-transparent"
                    placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === 'fr' ? 'Email *' : 'Email *'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0167B3] focus:border-transparent"
                    placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === 'fr' ? 'Téléphone *' : 'Phone *'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0167B3] focus:border-transparent"
                    placeholder="+212 XXX-XXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === 'fr' ? 'Service Intéressé' : 'Interested Service'}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0167B3] focus:border-transparent"
                  >
                    <option value="">{language === 'fr' ? 'Sélectionnez un service' : 'Select a service'}</option>
                    <option value="impression-grand-format">{language === 'fr' ? 'Impression Grand Format' : 'Large Format Printing'}</option>
                    <option value="signaletique">{language === 'fr' ? 'Signalétique' : 'Signage'}</option>
                    <option value="plv">{language === 'fr' ? 'PLV & Stands' : 'POS & Stands'}</option>
                    <option value="habillage">{language === 'fr' ? 'Habillage Véhicule/Vitrine' : 'Vehicle/Window Branding'}</option>
                    <option value="vinyle">{language === 'fr' ? 'Vinyle' : 'Vinyl'}</option>
                    <option value="bach">{language === 'fr' ? 'Bach (Bâche)' : 'Banner (Mesh)'}</option>
                    <option value="autre">{language === 'fr' ? 'Autre' : 'Other'}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === 'fr' ? 'Message *' : 'Message *'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0167B3] focus:border-transparent resize-none"
                    placeholder={language === 'fr' ? 'Décrivez votre projet...' : 'Describe your project...'}
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  <Send size={20} className="mr-2" />
                  {language === 'fr' ? 'Envoyer la Demande' : 'Send Request'}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  {language === 'fr'
                    ? <>Vos données sont protégées. Voir notre{' '}
                      <a href="#" className="text-[#0167B3] hover:text-[#F15921] hover:underline transition-colors">
                        politique de confidentialité
                      </a>
                      .</>
                    : <>Your data is protected. See our{' '}
                      <a href="#" className="text-[#0167B3] hover:text-[#F15921] hover:underline transition-colors">
                        privacy policy
                      </a>
                      .</>
                  }
                </p>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6">{language === 'fr' ? 'Informations de Contact' : 'Contact Information'}</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} style={{ color: '#0167B3' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{language === 'fr' ? 'Adresse' : 'Address'}</h3>
                      <p className="text-gray-600">
                        Casablanca, Maroc
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <Phone size={24} style={{ color: '#0167B3' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{language === 'fr' ? 'Téléphone' : 'Phone'}</h3>
                      <a 
                        href="tel:+212XXXXXXXXX" 
                        className="text-gray-600 hover:text-[#0167B3] transition-colors"
                      >
                        +212 XXX-XXXXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} style={{ color: '#FFD700' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{language === 'fr' ? 'Email' : 'Email'}</h3>
                      <a 
                        href="mailto:contact@Pub2Plus.ma" 
                        className="text-gray-600 hover:text-[#0167B3] transition-colors"
                      >
                        contact@Pub2Plus.ma
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Clock size={24} style={{ color: '#3F3F3F' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{language === 'fr' ? 'Horaires' : 'Hours'}</h3>
                      <p className="text-gray-600">
                        {language === 'fr'
                          ? <>Lundi - Vendredi: 9h00 - 18h00<br />Samedi: 9h00 - 13h00<br />Dimanche: Fermé</>
                          : <>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM<br />Sunday: Closed</>
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alternative Contact Methods */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">{language === 'fr' ? 'Autres Moyens de Contact' : 'Other Contact Methods'}</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+212XXXXXXXXX"
                    className="flex items-center justify-center space-x-3 bg-white border-2 border-[#F15921 ] text-[#F15921 ] px-6 py-4 rounded-lg font-semibold hover:bg-[#F15921 ] hover:text-white transition-colors"
                  >
                    <Phone size={24} />
                    <span>{language === 'fr' ? 'Appelez-nous' : 'Call Us'}</span>
                  </a>

                  <a
                    href="https://wa.me/212XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-[#25D366] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
                  >
                    <MessageCircle size={24} />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="mailto:contact@Pub2Plus.ma"
                    className="flex items-center justify-center space-x-3 bg-white border-2 border-[#F15921] text-[#F15921] px-6 py-4 rounded-lg font-semibold hover:bg-[#F15921] hover:text-white transition-colors"
                  >
                    <Mail size={24} />
                    <span>Email</span>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p className="font-semibold">Google Maps</p>
                  <p className="text-sm">Casablanca, Maroc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}