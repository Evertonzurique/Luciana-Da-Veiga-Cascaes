import { Instagram, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import brandTitle from '../assets/images/logos/logo-lc.png';
// Import das imagens com tratamento de erro
import hero1Img from '../assets/images/hero/hero1.JPG';
import hero2Img from '../assets/images/hero/hero2.jpg';
import hero3Img from '../assets/images/hero/hero3.jpg';

// Fallback para caso de erro
const hero1 = hero1Img || '/src/assets/images/hero/hero1.JPG';
const hero2 = hero2Img || '/src/assets/images/hero/hero2.jpg';
const hero3 = hero3Img || '/src/assets/images/hero/hero3.jpg';

// Usa as imagens locais importadas diretamente
const heroImages = [hero1, hero2, hero3];

export default function Hero() {
  console.log('Hero component rendering');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-primary-darker">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt="Professional legal services"
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-darker/70 via-primary-darker/50 to-primary-darker/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="mb-8 flex justify-center">
          <img
            src={brandTitle}
            alt="Luciana da Veiga Cascaes - Advocacia"
            className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto object-contain animate-fade-in"
          />
        </h1>

        <div className="h-1 w-24 mx-auto bg-gold-gradient mb-8"></div>

        <p className="text-xl sm:text-2xl md:text-3xl text-neutral-light font-light mb-4">
          Especialista em Direito das Famílias e Sucessões
        </p>

        <p className="text-base sm:text-lg md:text-xl text-neutral-light/80 font-light max-w-3xl mx-auto mb-12">
          Atendimento humanizado e sensível para os momentos mais delicados da sua vida
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-gold-gradient text-primary-darker font-semibold rounded-lg hover:shadow-2xl hover:shadow-gold-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Fale Comigo no WhatsApp
          </button>

          <a
            href="https://www.instagram.com/lucianacascaes.adv/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-neutral-light/30 text-neutral-lighter font-semibold rounded-lg hover:border-gold-400 hover:bg-gold-400/10 transition-all duration-300 flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            @lucianacascaes.adv
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-light/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-400"></div>
            <span>OAB/XX 00.000</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-400"></div>
            <span>@jurisfeministas</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-light/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
