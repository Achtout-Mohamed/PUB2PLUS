import { Link } from 'react-router-dom';
import { ChevronRight, Award, Users, Target, Globe, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { Button } from '../components/Button';

export function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];
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
            <span>{t.about_breadcrumb}</span>
          </div>
          
          <h1 className="text-white mb-4"><span style={{color:'white'}}>{t.about_title} </span> <span style={{ color: '#F15921' }}>Pub2</span><span style={{ color: '#0167B3' }}>Plus</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {language === 'fr' 
              ? 'Votre partenaire de confiance en publicité et événementiel à Casablanca'
              : 'Your trusted partner in advertising and events in Casablanca'
            }
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-6">{t.our_story}</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                {language === 'fr' 
                  ? <>Depuis plus de 10 ans, <strong>Pub2Plus</strong> s'est imposée comme un acteur majeur de l'industrie publicitaire et événementielle au Maroc. Basée à Casablanca, nous accompagnons les entreprises dans la réalisation de leurs projets de communication, de l'impression à la signalétique, en passant par les solutions PLV et l'habillage.</>
                  : <>For more than 10 years, <strong>Pub2Plus</strong> has established itself as a major player in the advertising and event industry in Morocco. Based in Casablanca, we support companies in realizing their communication projects, from printing to signage, including POS solutions and branding.</>
                }
              </p>
              <p>
                {language === 'fr'
                  ? 'Notre mission est simple : offrir un service complet de A à Z qui permet à nos clients de se concentrer sur leur cœur de métier pendant que nous gérons tous les aspects techniques et créatifs de leurs supports publicitaires et événementiels.'
                  : 'Our mission is simple: to offer a complete A to Z service that allows our clients to focus on their core business while we manage all technical and creative aspects of their advertising and event materials.'
                }
              </p>
              <p>
                {language === 'fr'
                  ? 'Grâce à une équipe d\'experts passionnés et un parc de machines de dernière génération, nous garantissons des résultats professionnels qui répondent aux standards les plus élevés. Que vous soyez une PME locale ou une grande entreprise internationale, nous adaptons nos solutions à vos besoins spécifiques.'
                  : 'Thanks to a team of passionate experts and state-of-the-art equipment, we guarantee professional results that meet the highest standards. Whether you are a local SME or a large international company, we adapt our solutions to your specific needs.'
                }
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Target size={24} style={{ color: '#0167B3' }} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.our_mission}</h3>
                <p className="text-gray-600">
                  {language === 'fr'
                    ? 'Fournir des solutions publicitaires et événementielles de haute qualité qui permettent à nos clients de se démarquer et de communiquer efficacement.'
                    : 'Provide high-quality advertising and event solutions that allow our clients to stand out and communicate effectively.'
                  }
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <Award size={24} style={{ color: '#F15921' }} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.our_vision}</h3>
                <p className="text-gray-600">
                  {language === 'fr'
                    ? 'Devenir la référence incontournable au Maroc pour tous les besoins en impression, signalétique et services événementiels.'
                    : 'Become the undisputed reference in Morocco for all printing, signage and event services needs.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Casablanca */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">{t.casablanca_title}</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  {language === 'fr'
                    ? 'Casablanca n\'est pas seulement notre ville d\'origine, c\'est le cœur économique du Maroc. Cette position stratégique nous permet de :'
                    : 'Casablanca is not just our hometown, it is the economic heart of Morocco. This strategic position allows us to:'
                  }
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={24} className="flex-shrink-0 mt-1" style={{ color: '#F15921 ' }} />
                    <span>{t.serve_quickly}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={24} className="flex-shrink-0 mt-1" style={{ color: '#F15921 ' }} />
                    <span>{t.understand_market}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={24} className="flex-shrink-0 mt-1" style={{ color: '#F15921 ' }} />
                    <span>{t.manage_projects}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={24} className="flex-shrink-0 mt-1" style={{ color: '#F15921 ' }} />
                    <span>{t.access_resources}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users size={32} style={{ color: '#0167B3' }} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">500+</div>
                    <div className="text-gray-600">{t.satisfied_clients}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                    <Award size={32} style={{ color: '#0167B3' }} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">10+</div>
                    <div className="text-gray-600">{t.years_experience}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Globe size={32} style={{ color: '#FFD700' }} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">25+</div>
                    <div className="text-gray-600">{t.professional_services}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">{t.our_expertise}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.design_title}</h3>
              <p className="text-gray-600">
                {t.design_desc}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.production_title}</h3>
              <p className="text-gray-600">
                {t.production_desc}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.installation_title}</h3>
              <p className="text-gray-600">
                {t.installation_desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 md:py-20 text-white"
        style={{
          background: 'linear-gradient(135deg, #0167B3 0%, #FFD700 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white mb-4">{t.join_clients}</h2>
          <p className="text-xl mb-8 text-white/90">
            {t.join_subtitle}
          </p>
          <Link to="/contact">
            <Button 
              variant="primary" 
              className="text-white text-lg h-14 px-10 transition-colors"
              style={{
                backgroundColor: '#F15921',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d94a1a')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F15921')}
            >
              {language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}