import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';

const instagramPosts = [
  {
    image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Dicas sobre direito de família',
  },
  {
    image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Planejamento sucessório',
  },
  {
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Orientação jurídica',
  },
  {
    image: 'https://images.pexels.com/photos/8111764/pexels-photo-8111764.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Casos de sucesso',
  },
];

export default function Instagram() {
  return (
    <section id="instagram" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading text-primary-darker mb-6">
            Acompanhe no Instagram
          </h2>
          <div className="h-1 w-16 bg-gold-gradient mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Conteúdos educativos sobre Direito das Famílias e Sucessões, dicas jurídicas e informações relevantes para você
          </p>

          <a
            href="https://www.instagram.com/lucianacascaes.adv/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <InstagramIcon className="w-6 h-6" />
            <span>@lucianacascaes.adv</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://www.instagram.com/lucianacascaes.adv/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-darker/80 via-primary-darker/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{post.caption}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <InstagramIcon className="w-5 h-5 text-pink-500" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gold-50 to-accent-teal/5 rounded-2xl px-8 py-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Integrante da</span>
            </div>
            <a
              href="https://www.instagram.com/jurisfeministas/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-teal hover:text-accent-teal-light transition-colors flex items-center gap-1"
            >
              @jurisfeministas
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
