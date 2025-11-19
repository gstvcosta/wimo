import React from 'react';
import { Zap, Shield, Brain, Cpu, Headphones, Sparkles } from 'lucide-react';

type Feature = {
  title: string;
  description: string;
  Icon: React.ComponentType<any>;
};

const features: Feature[] = [
  {
    title: 'Dashboard Completo',
    description:
      'Gerencie todas suas finanças em tempo real com nossa interface intuitiva e poderosa.',
    Icon: Zap,
  },
  {
    title: 'Segurança Total',
    description:
      'Seus dados protegidos com criptografia de nível bancário e autenticação avançada.',
    Icon: Shield,
  },
  {
    title: 'IA Avançada',
    description:
      'Insights inteligentes e recomendações personalizadas para otimizar suas finanças.',
    Icon: Brain,
  },
  {
    title: 'Automação Total',
    description:
      'Configure uma vez e deixe a plataforma trabalhar por você com inteligência artificial.',
    Icon: Cpu,
  },
  {
    title: 'Suporte 24/7',
    description:
      'Nossa equipe especializada está sempre disponível para ajudar você a prosperar.',
    Icon: Headphones,
  },
  {
    title: 'Experiência Premium',
    description:
      'Interface elegante e funcionalidades exclusivas para uma experiência única.',
    Icon: Sparkles,
  },
];

const WhyChoose: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 w-full bg-[#F1F5F9]">
      <div className="w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Por que escolher o <span className="text-[#004461]">Wimo</span>?
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A solução mais completa e intuitiva para transformar sua vida financeira
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map(({ title, description, Icon }, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-card border border-primary/10 shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="h-10 w-10 rounded-xl bg-[#4ECDC4]/20 ring-1 ring-[#4ECDC4]/40 flex items-center justify-center text-[#004461] mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;