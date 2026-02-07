import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const services = [
  // Category A: Supports d'Impression
  { name: 'Vinyle', nameEn: 'Vinyl', category: 'impression' },
  { name: 'Bach (Bâche)', nameEn: 'Banner (Mesh)', category: 'impression' },
  { name: 'One Way Vision', nameEn: 'One Way Vision', category: 'impression' },
  { name: 'Canvas (Caneva)', nameEn: 'Canvas', category: 'impression' },
  { name: 'Papier Peint Personnalisé', nameEn: 'Custom Wallpaper', category: 'impression' },
  { name: 'Backlight', nameEn: 'Backlight', category: 'impression' },
  { name: 'Papier', nameEn: 'Paper', category: 'impression' },
  { name: 'Adhésif Transparent', nameEn: 'Transparent Adhesive', category: 'impression' },
  { name: 'Adhésif Transparent Sablé', nameEn: 'Frosted Transparent Adhesive', category: 'impression' },
  
  // Category B: PLV & Signalétique
  { name: 'X Banner', nameEn: 'X Banner', category: 'plv' },
  { name: 'Flags (Drapeaux)', nameEn: 'Flags', category: 'plv' },
  { name: 'Roll-up', nameEn: 'Roll-up', category: 'plv' },
  { name: 'Palissades', nameEn: 'Hoardings', category: 'plv' },
  { name: 'STANDS', nameEn: 'STANDS', category: 'plv' },
  { name: 'PLV (Publicité sur Lieu de Vente)', nameEn: 'POS (Point of Sale Advertising)', category: 'plv' },
  { name: 'Enseignes & Panneaux', nameEn: 'Signs & Panels', category: 'plv' },
  { name: 'Signalétiques', nameEn: 'Signage', category: 'plv' },
  
  // Category C: Services Spécialisés
  { name: 'Impression Grand Format', nameEn: 'Large Format Printing', category: 'specialise' },
  { name: 'Impression Petit Format', nameEn: 'Small Format Printing', category: 'specialise' },
  { name: 'Habillage de Vitrine', nameEn: 'Window Branding', category: 'specialise' },
  { name: 'Habillage de Véhicule', nameEn: 'Vehicle Branding', category: 'specialise' },
  { name: 'Découpe & Marquage', nameEn: 'Cutting & Marking', category: 'specialise' },
  { name: 'Lettrage et Logo en Relief', nameEn: 'Lettering and Relief Logo', category: 'specialise' },
  { name: 'Cachets et Tampons', nameEn: 'Stamps and Seals', category: 'specialise' },
  { name: 'Plaque Immatriculation', nameEn: 'License Plates', category: 'specialise' },
];

const categoryColors: { [key: string]: string } = {
  impression: '#0167B3',
  plv: '#F15921',
  specialise: '#FFD700',
};

export function ServiceGrid() {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-200 hover:border-gray-300 group"
        >
          <div className="flex items-start space-x-3">
            <div
              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
              style={{ backgroundColor: categoryColors[service.category] }}
            />
            <h4 className="text-base font-semibold text-gray-900 group-hover:opacity-70 transition-opacity">
              {language === 'fr' ? service.name : service.nameEn}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}