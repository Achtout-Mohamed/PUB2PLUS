import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const categories = ['Tous', 'Impression', 'Signalétique', 'PLV', 'Stands', 'Habillage'];
const categoriesEn = ['All', 'Printing', 'Signage', 'POS', 'Stands', 'Branding'];
const categoriesFr = ['Tous', 'Impression', 'Signalétique', 'PLV', 'Stands', 'Habillage'];

const projects = [
  {
    id: 1,
    title: 'Habillage de Flotte Commerciale',
    titleEn: 'Commercial Fleet Wrapping',
    category: 'Habillage',
    categoryEn: 'Branding',
    description: 'Covering complet de 20 véhicules pour une entreprise de logistique',
    descriptionEn: 'Complete wrapping of 20 vehicles for a logistics company',
    image: 'vehicle wrap commercial',
  },
  {
    id: 2,
    title: 'Stand Salon Professionnel',
    titleEn: 'Professional Exhibition Stand',
    category: 'Stands',
    categoryEn: 'Stands',
    description: 'Conception et réalisation de stand 50m² pour salon international',
    descriptionEn: 'Design and construction of 50m² stand for international trade show',
    image: 'exhibition booth trade show',
  },
  {
    id: 3,
    title: 'Signalétique Centre Commercial',
    titleEn: 'Shopping Mall Signage',
    category: 'Signalétique',
    categoryEn: 'Signage',
    description: 'Signalétique complète intérieure et extérieure',
    descriptionEn: 'Complete interior and exterior signage',
    image: 'shopping mall signage',
  },
  {
    id: 4,
    title: 'PLV Grande Distribution',
    titleEn: 'Retail POS Display',
    category: 'PLV',
    categoryEn: 'POS',
    description: 'Supports PLV pour campagne nationale produits alimentaires',
    descriptionEn: 'POS displays for national food product campaign',
    image: 'point of sale display retail',
  },
  {
    id: 5,
    title: 'Impression Grand Format Façade',
    titleEn: 'Large Format Building Banner',
    category: 'Impression',
    categoryEn: 'Printing',
    description: 'Bâche publicitaire 15x8m pour lancement immobilier',
    descriptionEn: '15x8m advertising banner for real estate launch',
    image: 'large format building banner',
  },
  {
    id: 6,
    title: 'Habillage Vitrine Boutique',
    titleEn: 'Shop Window Branding',
    category: 'Habillage',
    categoryEn: 'Branding',
    description: 'Personnalisation vitrine avec adhésifs découpés et one-way vision',
    descriptionEn: 'Window customization with cut adhesives and one-way vision',
    image: 'storefront window graphics',
  },
  {
    id: 7,
    title: 'Roll-up Événement Corporate',
    titleEn: 'Corporate Event Roll-up Banners',
    category: 'PLV',
    categoryEn: 'POS',
    description: 'Série de 15 roll-ups pour séminaire d\'entreprise',
    descriptionEn: 'Series of 15 roll-ups for corporate seminar',
    image: 'corporate event rollup banner',
  },
  {
    id: 8,
    title: 'Enseigne Lumineuse Restaurant',
    titleEn: 'Illuminated Restaurant Sign',
    category: 'Signalétique',
    categoryEn: 'Signage',
    description: 'Lettres LED en relief pour façade restaurant gastronomique',
    descriptionEn: 'LED letters in relief for gastronomic restaurant facade',
    image: 'illuminated restaurant sign',
  },
  {
    id: 9,
    title: 'Impression Backlight Aéroport',
    titleEn: 'Airport Backlit Display',
    category: 'Impression',
    categoryEn: 'Printing',
    description: 'Caissons lumineux haute définition pour campagne aéroportuaire',
    descriptionEn: 'High-definition light boxes for airport campaign',
    image: 'airport backlit display advertising',
  },
];

export function PortfolioPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeFilter, setActiveFilter] = useState(language === 'fr' ? 'Tous' : 'All');

  const currentCategories = language === 'fr' ? categories : categoriesEn;
  const filteredProjects = activeFilter === (language === 'fr' ? 'Tous' : 'All')
    ? projects 
    : projects.filter(project => 
        language === 'fr' ? project.category === activeFilter : project.categoryEn === activeFilter
      );

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
            <span>{t.portfolio}</span>
          </div>
          
          <h1 className="text-white mb-4"><span style={{color:'white'}}>{language === 'fr' ? 'Nos Réalisations' : 'Our Work'}</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {language === 'fr' 
              ? 'Découvrez nos projets et réalisations pour des entreprises locales et internationales'
              : 'Discover our projects and achievements for local and international companies'
            }
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {currentCategories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === category
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={
                  activeFilter === category
                    ? { background: 'linear-gradient(135deg, #0167B3 0%, #014A7F 100%)' }
                    : {}
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop`}
                    alt={language === 'fr' ? project.title : project.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: '#0167B3' }}
                    >
                      {language === 'fr' ? project.category : project.categoryEn}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#F15921] transition-colors">
                    {language === 'fr' ? project.title : project.titleEn}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'fr' ? project.description : project.descriptionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {language === 'fr' ? 'Aucun projet trouvé pour cette catégorie' : 'No projects found for this category'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 md:py-20 text-white"
        style={{
          background: 'linear-gradient(135deg, #0167B3 0%, #014A7F 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white mb-4">{language === 'fr' ? 'Votre Projet Sera Le Prochain' : 'Your Project Could Be Next'}</h2>
          <p className="text-xl mb-8 text-white/90">
            {language === 'fr' 
              ? 'Discutons de vos besoins et créons ensemble quelque chose d\'exceptionnel'
              : 'Let\'s discuss your needs and create something exceptional together'
            }
          </p>
          <Link to="/contact">
            <button
              className="text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
              style={{
                backgroundColor: '#F15921',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d94a1a')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F15921')}
            >
              {language === 'fr' ? 'Démarrer un Projet' : 'Start a Project'}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}