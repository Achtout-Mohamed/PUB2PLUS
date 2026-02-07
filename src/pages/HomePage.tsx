import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, Shield, Printer, MapPin, Paintbrush, Car } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceGrid } from '../components/ServiceGrid';

export function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[900px] flex items-center justify-center bg-white overflow-hidden">
        {/* Blue Geometric Shapes Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0167B3] opacity-30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F15921] opacity-30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#FFD700] opacity-15 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="mb-6 text-[#1A1A1A]">
            {language === 'fr' 
              ? <>Votre Partenaire Communication & <span style={{ color: '#F15921' }}>Événementiel</span> de A à Z</>
              : <>Your Communication & <span style={{ color: '#F15921' }}>Event</span> Partner From A to Z</>
            }
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
            {t.hero_subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary" className="w-full sm:w-auto text-lg h-14">
                {t.ask_quote}
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="secondary" className="w-full sm:w-auto text-lg h-14 border-black text-black hover:bg-black hover:text-white">
                {t.our_services}
              </Button>
            </Link>
          </div>
          <div className="mt-8 inline-flex items-center space-x-2 bg-black/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <Award size={20} style={{ color: '#FFD700' }} />
            <span className="text-sm">10+ années d'expérience | Casablanca, Maroc</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t.services_title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.services_subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ServiceCard
              icon={<Printer size={48} />}
              title={t.printing_service}
              description={t.printing_desc}
              color="#0167B3"
              link="/services?service=impression"
            />
            <ServiceCard
              icon={<MapPin size={48} />}
              title={t.signage_service}
              description={t.signage_desc}
              color="#F15921"
              link="/services?service=signalétique"
            />
            <ServiceCard
              icon={<Paintbrush size={48} />}
              title={t.plv_service}
              description={t.plv_desc}
              color="#FFD700"
              link="/services?service=plv"
            />
            <ServiceCard
              icon={<Car size={48} />}
              title={t.branding_service}
              description={t.branding_desc}
              color="#0167B3"
              link="/services?service=habillage"
            />
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t.full_services_title}</h2>
            <p className="text-lg text-gray-600">
              {t.full_services_subtitle}
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t.why_choose_us}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyan-50 flex items-center justify-center">
                <Award size={40} style={{ color: '#F15921 ' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.expertise_title}</h3>
              <p className="text-gray-600">
                {t.expertise_desc}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange-50 flex items-center justify-center">
                <CheckCircle size={40} style={{ color: '#F15921' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.service_title}</h3>
              <p className="text-gray-600">
                {t.service_desc}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-yellow-50 flex items-center justify-center">
                <Shield size={40} style={{ color: '#FFD700' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.quality_title}</h3>
              <p className="text-gray-600">
                {t.quality_desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section 
        className="py-16 md:py-24 text-white"
        style={{
          background: 'linear-gradient(135deg, #0167B3 0%, #014A7F 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white mb-4">{t.ready_title}</h2>
          <p className="text-xl mb-8 text-white/90">
            {t.ready_subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button 
                variant="primary" 
                className="w-full sm:w-auto text-white text-lg h-16 px-10 transition-colors"
                style={{
                  backgroundColor: '#F15921',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d94a1a')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F15921')}
              >
                {t.free_quote}
              </Button>
            </Link>
            <a 
              href="tel:+212XXXXXXXXX" 
              className="text-white font-semibold text-lg hover:opacity-80 transition-opacity flex items-center space-x-2"
            >
              <span>+212 XXX-XXXXXX</span>
            </a>
            <a 
              href="https://wa.me/212XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
            >
              <span>{t.whatsapp}</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}