import { Scale, Mail, Phone, Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-darker text-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-8 h-8 text-gold-400" />
              <div>
                <p className="font-heading text-lg text-gold-400">L + C</p>
              </div>
            </div>
            <p className="text-sm text-neutral-light/70 leading-relaxed">
              Advocacia humanizada especializada em Direito das Famílias e Sucessões
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-lighter mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-neutral-light/70 hover:text-gold-400 transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-neutral-light/70 hover:text-gold-400 transition-colors"
                >
                  Áreas de Atuação
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-neutral-light/70 hover:text-gold-400 transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-neutral-light/70 hover:text-gold-400 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-lighter mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-light/70">(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-light/70">contato@lucianacascaes.adv.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-light/70">Atendimento presencial e online</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-lighter mb-4">Redes Sociais</h3>
            <a
              href="https://www.instagram.com/lucianacascaes.adv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-sm"
            >
              <Instagram className="w-4 h-4" />
              @lucianacascaes.adv
            </a>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/jurisfeministas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-light/60 hover:text-gold-400 transition-colors"
              >
                Integrante: @jurisfeministas
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-light/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-light/60">
            <p>
              {currentYear} Luciana da Veiga Cascaes - OAB/XX 00.000
            </p>
            <p className="text-xs">
              Todos os direitos reservados | Desenvolvido com cuidado e atenção aos detalhes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
