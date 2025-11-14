

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePlanConfig } from '@/hooks/usePlanConfig';

const LandingPricing = () => {
  const { config, isLoading, error } = usePlanConfig();

  if (isLoading) {
    return (
      <section className="py-20 w-full" id="planos">
        <div className="w-full px-4">
          <div className="flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !config) {
    return (
      <section className="py-20 w-full" id="planos">
        <div className="w-full px-4">
          <div className="text-center text-red-600">
            Erro ao carregar configurações dos planos
          </div>
        </div>
      </section>
    );
  }

  const plans = [{
    name: "Mensal",
    price: config.prices.monthly.displayPrice,
    period: "/mês",
    description: "",
    features: config.prices.monthly.features,
    limitations: [],
    buttonText: "Assinar Agora",
    buttonVariant: "default" as const,
    popular: false,
    linkTo: config.prices.monthly.linkTo
  }, {
    name: "Anual",
    price: config.prices.annual.displayPrice,
    period: "/ano",
    originalPrice: config.prices.annual.displayOriginalPrice,
    savings: config.prices.annual.displaySavings,
    monthlyEquivalent: config.prices.annual.monthlyEquivalent,
    description: "Melhor custo-benefício",
    features: config.prices.annual.features,
    limitations: [],
    buttonText: "Melhor Oferta",
    buttonVariant: "default" as const,
    popular: true,
    linkTo: config.prices.annual.linkTo
  }];

  return (
    <section className="py-24 w-full" id="planos">
      <div className="w-full px-4">
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Selecione seu plano perfeito
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolucione sua gestão financeira com planos pensados para você
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, staggerChildren: 0.1 }} 
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              viewport={{ once: true }} 
              className="relative"
            >
              <Card className={`h-full relative ${plan.popular ? 'border-accent shadow-2xl scale-105 bg-gradient-to-br from-card to-card/80' : 'hover:shadow-lg border-primary/20'} transition-all duration-300`} style={plan.popular ? {boxShadow: '0 0 40px hsl(var(--shadow-color) / 0.4)'} : {}}>
                {/* Destaque 7 dias gratis */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-gradient-to-r from-secondary via-accent to-primary text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    7 dias gratis
                  </div>
                </div>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                      <Star className="h-4 w-4 text-cyan-300" />
                      Mais Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    {plan.monthlyEquivalent && (
                      <div className="mt-2">
                        <span className="text-sm text-green-600 font-medium">Apenas {plan.monthlyEquivalent} por mês</span>
                      </div>
                    )}
                  </div>
                  {plan.description && (
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                  )}
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-[#4ECDC4] flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                        <span className="text-sm">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' : ''} transition-all hover:scale-[1.02]`}
                    variant={plan.buttonVariant} 
                    size="lg"
                    onClick={() => window.location.href = plan.linkTo}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPricing;
