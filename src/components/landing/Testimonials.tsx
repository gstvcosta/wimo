import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Revolucionou completamente como gerencio minhas finanças. A IA me ajuda a tomar decisões mais inteligentes todos os dias.',
    name: 'Maria Silva',
    role: 'Empresária',
    rating: 5,
  },
  {
    quote:
      'Os insights são incríveis! Consegui aumentar meus rendimentos em 40% no primeiro ano usando a plataforma.',
    name: 'João Santos',
    role: 'Investidor',
    rating: 5,
  },
  {
    quote:
      'Finalmente tenho controle total das minhas finanças. A interface é intuitiva e os relatórios são muito detalhados.',
    name: 'Ana Costa',
    role: 'Freelancer',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 w-full bg-[#F8FAFC]">
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