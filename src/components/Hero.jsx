import Button from './Button';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-base-dark/90 to-base-dark/70" />
      </div>
      
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-base-light mb-6">
              Ihre Energie-<br />revolution beginnt<br />auf dem Balkon
            </h1>
            <p className="text-xl text-base-light/90 mb-8 max-w-lg">
              Produzieren Sie Ihren eigenen Solarstrom mit unseren innovativen Balkonkraftwerken. Nachhaltig, effizient und einfach zu installieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Jetzt Beraten Lassen</Button>
              <Button variant="outline" size="lg">Mehr Erfahren</Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange">95%</div>
                <div className="text-sm text-base-light/80">Zufriedene Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange">600W</div>
                <div className="text-sm text-base-light/80">Peak-Leistung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange">25J</div>
                <div className="text-sm text-base-light/80">Garantie</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}