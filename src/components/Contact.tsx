import { useState, FormEvent } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta sobre Direito das Famílias e Sucessões.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-primary-darker mb-6">
            Entre em Contato
          </h2>
          <div className="h-1 w-16 bg-gold-gradient mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estou à disposição para ouvir sua história e oferecer a orientação jurídica que você precisa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-primary-dark mb-6">
                Formas de Contato
              </h3>

              <div className="space-y-6">
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center gap-4 p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 group"
                >
                  <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-lg">WhatsApp</p>
                    <p className="text-sm text-white/90">Resposta rápida e agendamento</p>
                  </div>
                </button>

                <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-gold-50 to-gold-100 rounded-xl">
                  <div className="p-3 bg-gold-400 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-primary-dark">Telefone</p>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-accent-teal/10 to-accent-teal/20 rounded-xl">
                  <div className="p-3 bg-accent-teal rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-primary-dark">E-mail</p>
                    <p className="text-gray-600">contato@lucianacascaes.adv.br</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-primary-darker to-primary-dark rounded-xl text-white">
                <h4 className="font-semibold mb-3">Horário de Atendimento</h4>
                <p className="text-sm text-neutral-light/90">
                  Segunda a Sexta: 9h às 18h<br />
                  Atendimentos mediante agendamento prévio
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold-50 to-accent-teal/5 rounded-2xl p-8">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-primary-dark">Confidencialidade garantida:</strong> Todas as informações
                compartilhadas são protegidas pelo sigilo profissional e pela Lei Geral de Proteção de Dados (LGPD).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-primary-dark mb-6">
              Envie uma Mensagem
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-800">Mensagem enviada com sucesso!</p>
                  <p className="text-sm text-green-700 mt-1">Entrarei em contato em breve.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800">Erro ao enviar mensagem</p>
                  <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none transition-all resize-none"
                  placeholder="Descreva brevemente sua situação e como posso ajudá-lo(a)..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gold-gradient text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Ao enviar esta mensagem, você concorda com nossa política de privacidade
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
