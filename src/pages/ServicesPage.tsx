import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Printer, Package, Scissors, MapPin, Car } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { Button } from '../components/Button';

const serviceCategories = [
  {
    id: 'impression',
    title: 'Impression Grand & Petit Format',
    titleEn: 'Large & Small Format Printing',
    icon: <Printer size={32} />,
    color: '#0167B3',
    services: [
      {
        name: 'Vinyle',
        nameEn: 'Vinyl',
        description: 'Support adhésif durable pour enseignes extérieures et intérieures. Résistant aux UV et aux intempéries.',
        descriptionEn: 'Durable adhesive material for indoor and outdoor signs. UV-resistant and weather-proof.',
        applications: 'Enseignes, vitrines, décoration murale',
        applicationsEn: 'Signs, storefronts, wall decoration',
      },
      {
        name: 'Bach (Bâche)',
        nameEn: 'Banner (Mesh)',
        description: 'Support résistant pour affichage grand format extérieur. Idéal pour les grandes surfaces.',
        descriptionEn: 'Resistant material for large format outdoor displays. Ideal for large areas.',
        applications: 'Panneaux publicitaires, façades, événements',
        applicationsEn: 'Billboards, facades, events',
      },
      {
        name: 'One Way Vision',
        nameEn: 'One Way Vision',
        description: 'Film perforé permettant la visibilité de l\'intérieur tout en affichant de l\'extérieur.',
        descriptionEn: 'Perforated film allowing visibility from inside while displaying outside.',
        applications: 'Vitrines, véhicules, vitres de bureaux',
        applicationsEn: 'Storefronts, vehicles, office windows',
      },
      {
        name: 'Canvas (Caneva)',
        nameEn: 'Canvas',
        description: 'Support textile pour impression haute qualité. Effet artistique et professionnel.',
        descriptionEn: 'Textile material for high-quality printing. Artistic and professional effect.',
        applications: 'Tableaux décoratifs, stands, expositions',
        applicationsEn: 'Decorative artwork, stands, exhibitions',
      },
      {
        name: 'Papier Peint Personnalisé',
        nameEn: 'Custom Wallpaper',
        description: 'Impression sur papier peint pour décoration intérieure sur mesure.',
        descriptionEn: 'Wallpaper printing for custom interior decoration.',
        applications: 'Bureaux, magasins, espaces commerciaux',
        applicationsEn: 'Offices, retail stores, commercial spaces',
      },
      {
        name: 'Backlight',
        nameEn: 'Backlight',
        description: 'Support translucide pour rétroéclairage. Rendu lumineux exceptionnel.',
        descriptionEn: 'Translucent material for backlighting. Exceptional luminous effect.',
        applications: 'Enseignes lumineuses, caissons lumineux',
        applicationsEn: 'Illuminated signs, light boxes',
      },
      {
        name: 'Papier',
        nameEn: 'Paper',
        description: 'Impression papier haute qualité pour tous formats et finitions.',
        descriptionEn: 'High-quality paper printing for all formats and finishes.',
        applications: 'Affiches, flyers, catalogues',
        applicationsEn: 'Posters, flyers, catalogs',
      },
      {
        name: 'Adhésif Transparent',
        nameEn: 'Clear Adhesive',
        description: 'Film adhésif transparent avec impression pour application sur surfaces vitrées.',
        descriptionEn: 'Clear adhesive film with printing for application on glass surfaces.',
        applications: 'Vitrines, portes vitrées, logos',
        applicationsEn: 'Storefronts, glass doors, logos',
      },
      {
        name: 'Adhésif Transparent Sablé',
        nameEn: 'Frosted Adhesive',
        description: 'Film dépoli offrant intimité tout en laissant passer la lumière.',
        descriptionEn: 'Frosted film offering privacy while allowing light to pass through.',
        applications: 'Bureaux, salles de réunion, séparations',
        applicationsEn: 'Offices, meeting rooms, partitions',
      },
    ],
  },
  {
    id: 'signalétique',
    title: 'Signalétique & Enseignes',
    titleEn: 'Signage & Signs',
    icon: <MapPin size={32} />,
    color: '#F15921',
    services: [
      {
        name: 'Enseignes & Panneaux',
        nameEn: 'Signs & Panels',
        description: 'Fabrication d\'enseignes et panneaux sur tous supports.',
        descriptionEn: 'Manufacturing of signs and panels on all materials.',
        applications: 'Façades commerciales, signalisation',
        applicationsEn: 'Commercial facades, signage',
      },
      {
        name: 'Signalétiques',
        nameEn: 'Wayfinding Signage',
        description: 'Signalétique intérieure et extérieure sur mesure.',
        descriptionEn: 'Custom interior and exterior wayfinding signage.',
        applications: 'Bureaux, hôtels, centres commerciaux',
        applicationsEn: 'Offices, hotels, shopping centers',
      },
      {
        name: 'Lettrage et Logo en Relief',
        nameEn: '3D Lettering & Logos',
        description: 'Lettrage 3D et logos en relief pour enseignes premium.',
        descriptionEn: '3D lettering and embossed logos for premium signage.',
        applications: 'Façades, réceptions, bureaux',
        applicationsEn: 'Facades, receptions, offices',
      },
      {
        name: 'Découpe & Marquage',
        nameEn: 'Cutting & Marking',
        description: 'Découpe de précision et marquage sur tous supports.',
        descriptionEn: 'Precision cutting and marking on all materials.',
        applications: 'Lettres découpées, logos, enseignes',
        applicationsEn: 'Cut letters, logos, signs',
      },
    ],
  },
  {
    id: 'plv',
    title: 'PLV & Stands',
    titleEn: 'POS & Stands',
    icon: <Package size={32} />,
    color: '#FFD700',
    services: [
      {
        name: 'X Banner',
        nameEn: 'X Banner',
        description: 'Support publicitaire portable et léger. Installation rapide sans outils.',
        descriptionEn: 'Portable and lightweight advertising support. Quick installation without tools.',
        applications: 'Événements, salons, points de vente',
        applicationsEn: 'Events, trade shows, retail points',
      },
      {
        name: 'Flags (Drapeaux)',
        nameEn: 'Flags',
        description: 'Drapeaux publicitaires pour signalisation extérieure. Haute visibilité.',
        descriptionEn: 'Advertising flags for outdoor signage. High visibility.',
        applications: 'Événements extérieurs, signalisation',
        applicationsEn: 'Outdoor events, signage',
      },
      {
        name: 'Roll-up',
        nameEn: 'Roll-up Banner',
        description: 'Kakémono enroulable professionnel. Transport et installation faciles.',
        descriptionEn: 'Professional roll-up banners. Easy transport and installation.',
        applications: 'Salons, conférences, boutiques',
        applicationsEn: 'Trade shows, conferences, stores',
      },
      {
        name: 'Palissades',
        nameEn: 'Hoarding Panels',
        description: 'Panneaux publicitaires pour chantiers et événements de grande envergure.',
        descriptionEn: 'Advertising panels for construction sites and large events.',
        applications: 'Chantiers, festivals, zones événementielles',
        applicationsEn: 'Construction sites, festivals, event zones',
      },
      {
        name: 'STANDS',
        nameEn: 'Stands',
        description: 'Conception et fabrication de stands événementiels sur mesure.',
        descriptionEn: 'Design and construction of custom event stands.',
        applications: 'Salons professionnels, foires commerciales',
        applicationsEn: 'Trade fairs, commercial exhibitions',
      },  
      {
        name: 'PLV (Publicité sur Lieu de Vente)',
        nameEn: 'Point of Sale Display',
        description: 'Solutions complètes de PLV pour dynamiser vos points de vente.',
        descriptionEn: 'Complete POS solutions to enhance your retail points.',
        applications: 'Magasins, supermarchés, espaces commerciaux',
        applicationsEn: 'Stores, supermarkets, commercial spaces',
      },
    ],
  },
  {
    id: 'habillage',
    title: 'Habillage & Marquage',
    titleEn: 'Branding & Wrapping',
    icon: <Car size={32} />,
    color: '#0167B3',
    services: [
      {
        name: 'Habillage de Vitrine',
        nameEn: 'Storefront Branding',
        description: 'Personnalisation complète de vitrines commerciales.',
        descriptionEn: 'Complete customization of commercial storefronts.',
        applications: 'Magasins, boutiques, showrooms',
        applicationsEn: 'Stores, boutiques, showrooms',
      },
      {
        name: 'Habillage de Véhicule',
        nameEn: 'Vehicle Wrapping',
        description: 'Covering complet ou partiel de véhicules professionnels.',
        descriptionEn: 'Full or partial wrapping of professional vehicles.',
        applications: 'Flottes commerciales, véhicules publicitaires',
        applicationsEn: 'Commercial fleets, advertising vehicles',
      },
      {
        name: 'Cachets et Tampons',
        nameEn: 'Stamps & Seals',
        description: 'Fabrication de cachets et tampons professionnels sur mesure.',
        descriptionEn: 'Manufacturing of custom professional stamps and seals.',
        applications: 'Administration, entreprises',
        applicationsEn: 'Administration, companies',
      },
      {
        name: 'Plaque Immatriculation',
        nameEn: 'License Plates',
        description: 'Fabrication de plaques d\'immatriculation conformes.',
        descriptionEn: 'Manufacturing of compliant license plates.',
        applications: 'Véhicules personnels et professionnels',
        applicationsEn: 'Personal and professional vehicles',
      },
    ],
  },
];

export function ServicesPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('impression');

  // Set active tab from query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service && ['impression', 'signalétique', 'plv', 'habillage'].includes(service)) {
      setActiveTab(service);
    }
  }, [location.search]);

  const activeCategory = serviceCategories.find(cat => cat.id === activeTab);

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
            <span>{t.services}</span>
          </div>
          
          <h1 className="text-white mb-4"><span style={{color:'white'}}>{t.services_main_title}</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {t.services_main_desc}
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12 border-b pb-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-semibold transition-all ${
                  activeTab === category.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span style={{ color: activeTab === category.id ? category.color : undefined }}>
                  {category.icon}
                </span>
                <span>{language === 'fr' ? category.title : category.titleEn}</span>
              </button>
            ))}
          </div>

          {/* Services Content */}
          {activeCategory && (
            <div className="space-y-6">
              {activeCategory.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-3">
                        <div
                          className="w-1 h-8 rounded"
                          style={{ backgroundColor: activeCategory.color }}
                        />
                        <h3 className="text-2xl font-semibold">{language === 'fr' ? service.name : service.nameEn}</h3>
                      </div>
                      <p className="text-gray-600 mb-4 text-lg">
                        {language === 'fr' ? service.description : service.descriptionEn}
                      </p>
                      <div className="flex items-start space-x-2">
                        <span className="text-sm font-semibold text-gray-700">{language === 'fr' ? 'Applications:' : 'Applications:'}</span>
                        <span className="text-sm text-gray-600">{language === 'fr' ? service.applications : service.applicationsEn}</span>
                      </div>
                    </div>
                    <Link to="/contact" className="flex-shrink-0">
                      <Button variant="primary" className="w-full md:w-auto whitespace-nowrap">
                        {language === 'fr' ? 'Demander un devis' : 'Request a Quote'}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
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
          <h2 className="text-white mb-4">Besoin d'un service spécifique ?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
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
              Nous Contacter
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}