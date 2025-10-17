import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Maria Silva',
    case: 'Divórcio Consensual',
    text: 'A Dra. Luciana foi fundamental em um dos momentos mais difíceis da minha vida. Sua empatia e profissionalismo me deram a segurança necessária para seguir em frente. Conseguimos resolver tudo de forma tranquila e justa.',
  },
  {
    name: 'João Santos',
    case: 'Regulamentação de Guarda',
    text: 'Excelente profissional! Sempre me orientou com clareza e paciência, priorizando o bem-estar dos meus filhos. Graças ao trabalho da Dra. Luciana, conseguimos chegar a um acordo que beneficiou toda a família.',
  },
  {
    name: 'Ana Paula',
    case: 'Inventário',
    text: 'O processo de inventário parecia impossível com tantas questões familiares envolvidas. A Dra. Luciana conduziu tudo com muita sensibilidade e competência técnica, facilitando o diálogo entre todos os herdeiros.',
  },
  {
    name: 'Carlos Mendes',
    case: 'Pensão Alimentícia',
    text: 'Estava desesperado com a situação da pensão do meu filho. A Dra. Luciana me explicou todos os meus direitos com clareza e agiu rapidamente. Hoje tenho a tranquilidade de que meu filho está amparado.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-primary-darker to-primary-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-neutral-lighter mb-6">
            Depoimentos
          </h2>
          <div className="h-1 w-16 bg-gold-gradient mx-auto mb-6"></div>
          <p className="text-lg text-neutral-light/80 max-w-3xl mx-auto">
            O que meus clientes dizem sobre o atendimento humanizado e os resultados alcançados
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-8 right-8 w-24 h-24 text-gold-100 opacity-50" />

            <div className="relative z-10">
              <div className="mb-8">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary-dark text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentIndex].case}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full border-2 border-gray-300 hover:border-gold-400 hover:bg-gold-50 transition-all duration-300"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-gold-500 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ver depoimento ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full border-2 border-gray-300 hover:border-gold-400 hover:bg-gold-50 transition-all duration-300"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
