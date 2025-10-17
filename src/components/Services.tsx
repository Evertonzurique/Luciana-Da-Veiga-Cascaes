import { Heart, Users, FileText, Scale, Home, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Divórcio',
    description: 'Assessoria completa em processos de divórcio consensual e litigioso, buscando sempre a melhor solução para todas as partes envolvidas.',
    color: 'gold',
  },
  {
    icon: Users,
    title: 'Guarda de Filhos',
    description: 'Orientação sensível e estratégica em questões de guarda compartilhada, unilateral e regulamentação de visitas, sempre priorizando o bem-estar das crianças.',
    color: 'teal',
  },
  {
    icon: Scale,
    title: 'Pensão Alimentícia',
    description: 'Requerimento, revisão, exoneração e execução de pensão alimentícia, garantindo os direitos de quem precisa e a justiça para quem paga.',
    color: 'gold',
  },
  {
    icon: FileText,
    title: 'Inventário e Partilha',
    description: 'Condução de inventários judiciais e extrajudiciais, com planejamento sucessório para facilitar a transmissão de bens e evitar conflitos.',
    color: 'teal',
  },
  {
    icon: Home,
    title: 'União Estável',
    description: 'Reconhecimento, dissolução e elaboração de contratos de união estável, protegendo os direitos patrimoniais e pessoais do casal.',
    color: 'gold',
  },
  {
    icon: Briefcase,
    title: 'Planejamento Sucessório',
    description: 'Elaboração de testamentos e estratégias para organização do patrimônio familiar, evitando disputas futuras e garantindo a vontade do titular.',
    color: 'teal',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-primary-darker mb-6">
            Áreas de Atuação
          </h2>
          <div className="h-1 w-16 bg-gold-gradient mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Atuação especializada em Direito das Famílias e Sucessões, com soluções jurídicas
            personalizadas para cada situação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const bgColorClass = service.color === 'gold' ? 'bg-gold-100' : 'bg-accent-teal/10';
            const iconColorClass = service.color === 'gold' ? 'text-gold-600' : 'text-accent-teal';
            const borderColorClass = service.color === 'gold' ? 'hover:border-gold-400' : 'hover:border-accent-teal';

            return (
              <div
                key={index}
                className={`group p-8 bg-neutral-light rounded-2xl border-2 border-transparent ${borderColorClass} transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${bgColorClass} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${iconColorClass}`} />
                </div>

                <h3 className="text-xl font-semibold text-primary-dark mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-gold-50 to-accent-teal/5 rounded-2xl p-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Não encontrou o que procura?</strong>
            </p>
            <p className="text-gray-600">
              Entre em contato para conversarmos sobre como posso ajudá-lo(a) em seu caso específico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
