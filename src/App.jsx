import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import CTA from './components/CTA';

function App() {
  return (
    <div className="font-roboto">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <CTA />
    </div>
  );
}

export default App;