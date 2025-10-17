import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Instagram from './components/Instagram';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
