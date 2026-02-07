import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  link: string;
}

export function ServiceCard({ icon, title, description, color, link }: ServiceCardProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Link to={link}>
      <div className="bg-white border-t-4 border-gray-200 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col relative overflow-hidden" style={{ borderTopColor: color }}>
        <div className="mb-6" style={{ color }}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <div className="flex items-center font-semibold" style={{ color }}>
          <span>{t.learn_more}</span>
          <ArrowRight size={20} className="ml-2" />
        </div>
      </div>
    </Link>
  );
}