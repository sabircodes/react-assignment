export default function Products() {
  const products = [
    {
      name: "Starter Set",
      price: "699",
      features: [
        "320W Leistung",
        "Micro-Wechselrichter",
        "Montagematerial",
        "2 Premium Solar-Module"
      ]
    },
    {
      name: "Premium Set",
      price: "899",
      features: [
        "600W Leistung",
        "Hochwertiger Wechselrichter",
        "Komplettes Montageset",
        "2 Premium Solar-Module",
        "WLAN-Monitoring"
      ],
      popular: true
    },
    {
      name: "Professional Set",
      price: "1299",
      features: [
        "800W Leistung",
        "Premium Wechselrichter",
        "Profi-Montagesystem",
        "3 Premium Solar-Module",
        "WLAN-Monitoring",
        "Erweiterte Garantie"
      ]
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-base-dark mb-4">
            Unsere Balkonkraftwerk-Sets
          </h2>
          <p className="text-lg text-base-gray max-w-2xl mx-auto">
            Wählen Sie das perfekte Set für Ihre Bedürfnisse
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 ${
                product.popular 
                  ? 'bg-accent-green text-white ring-4 ring-accent-green ring-offset-4' 
                  : 'bg-base-light'
              }`}
            >
              {product.popular && (
                <span className="inline-block px-4 py-1 rounded-full bg-accent-orange text-white text-sm font-bold mb-4">
                  Bestseller
                </span>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${product.popular ? 'text-white' : 'text-base-dark'}`}>
                {product.name}
              </h3>
              <div className="flex items-baseline mb-6">
                <span className={`text-4xl font-bold ${product.popular ? 'text-white' : 'text-base-dark'}`}>
                  €{product.price}
                </span>
                <span className={`ml-2 ${product.popular ? 'text-white/80' : 'text-base-gray'}`}>
                  inkl. MwSt
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className={`w-5 h-5 mr-3 ${product.popular ? 'text-white' : 'text-accent-green'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={product.popular ? 'text-white/90' : 'text-base-gray'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 px-6 rounded-full font-bold transition-colors ${
                  product.popular 
                    ? 'bg-white text-accent-green hover:bg-base-light' 
                    : 'bg-accent-green text-white hover:bg-accent-green/90'
                }`}
              >
                Jetzt Bestellen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}