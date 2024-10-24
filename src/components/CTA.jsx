import Button from './Button';

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-accent-green/90 backdrop-blur-sm" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für Ihre eigene Solaranlage?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Lassen Sie sich von unseren Experten beraten und starten Sie noch heute Ihre persönliche Energiewende.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="white" size="lg">Kostenlose Beratung</Button>
            <Button variant="outline-white" size="lg">Katalog Herunterladen</Button>
          </div>
        </div>
      </div>
    </section>
  );
}