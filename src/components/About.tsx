import { Heart, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Advogada Luciana da Veiga Cascaes"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-darker/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-gradient rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-teal/20 rounded-2xl -z-10"></div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-heading text-primary-darker mb-6">
              Sobre Mim
            </h2>
            <div className="h-1 w-16 bg-gold-gradient mb-8"></div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Como advogada especialista em <strong>Direito das Famílias e Sucessões</strong>,
              compreendo que cada caso envolve não apenas questões jurídicas, mas principalmente
              histórias de vida, emoções e relações humanas.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Meu compromisso é oferecer um <strong>atendimento humanizado e sensível</strong>,
              respeitando o momento delicado que você está atravessando. Acredito que o direito
              deve estar a serviço das pessoas, buscando sempre soluções justas e equilibradas.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Como integrante da <strong>@jurisfeministas</strong>, defendo uma advocacia
              comprometida com a igualdade, o respeito e a dignidade de todas as pessoas
              envolvidas nos processos familiares e sucessórios.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-100 rounded-full mb-4">
                  <Heart className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="font-semibold text-primary-dark mb-2">Empatia</h3>
                <p className="text-sm text-gray-600">Compreensão e respeito em cada caso</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent-teal/10 rounded-full mb-4">
                  <Shield className="w-7 h-7 text-accent-teal" />
                </div>
                <h3 className="font-semibold text-primary-dark mb-2">Segurança</h3>
                <p className="text-sm text-gray-600">Expertise técnica e estratégia</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-100 rounded-full mb-4">
                  <Users className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="font-semibold text-primary-dark mb-2">Proximidade</h3>
                <p className="text-sm text-gray-600">Atendimento personalizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
