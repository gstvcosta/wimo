import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Eu vivia esquecendo vencimentos e compromissos do trabalho. Agora o Wimo me lembra tudo no WhatsApp. Minha rotina ficou infinitamente mais organizada.',
    name: 'Juliana Moreira',
    role: '32 anos, Analista de RH',
    rating: 5,
  },
  {
    quote:
      'Eu nunca tive paciência para planilhas. Com Wimo eu só mando mensagem e tudo fica organizado. No primeiro mês consegui economizar R$ 280 só vendo para onde meu dinheiro estava indo.',
    name: 'Carlos Freitas',
    role: '41 anos, Autônomo',
    rating: 5,
  },
  {
    quote:
      'O que eu mais gostei foi a automatização. Mando a foto da nota, e a IA já registra tudo. Economizo tempo todo dia.',
    name: 'Roberto Cunha',
    role: '39 anos, Professor',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 w-full bg-[#F8FAFC]">
      <div className="w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">O que nossos clientes dizem</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas financeiras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-card border border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="flex items-center gap-2 text-[#4ECDC4] mb-4">
                <Quote className="h-5 w-5" />
              </div>

              <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                “{t.quote}”
              </p>

              <div className="flex items-center gap-1 mt-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <div className="mt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;