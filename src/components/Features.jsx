import { FaSolarPanel, FaEuroSign, FaLeaf, FaTools, FaShieldAlt, FaSun } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

export default function Features() {
  const features = [
    {
      icon: <FaSolarPanel />,
      title: "Plug & Play Installation",
      description: "In weniger als einer Stunde einsatzbereit - ganz ohne komplizierte Montage"
    },
    {
      icon: <FaEuroSign />,
      title: "Sofortige Ersparnis",
      description: "Reduzieren Sie Ihre Stromrechnung vom ersten Tag an"
    },
    {
      icon: <FaLeaf />,
      title: "CO₂ Einsparung",
      description: "Bis zu 200kg CO₂-Einsparung pro Jahr"
    },
    {
      icon: <FaTools />,
      title: "Wartungsfrei",
      description: "Keine regelmäßige Wartung erforderlich"
    },
    {
      icon: <FaShieldAlt />,
      title: "25 Jahre Garantie",
      description: "Langfristige Sicherheit durch Herstellergarantie"
    },
    {
      icon: <FaSun />,
      title: "Hoher Wirkungsgrad",
      description: "Modernste Technologie für maximale Effizienz"
    }
  ];

  return (
    <section id="features" className="py-24 bg-base-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-base-dark mb-4">
            Ihre Vorteile mit unserem Balkonkraftwerk
          </h2>
          <p className="text-lg text-base-gray max-w-2xl mx-auto">
            Entdecken Sie die vielen Vorteile unserer modernen Balkonkraftwerke
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}