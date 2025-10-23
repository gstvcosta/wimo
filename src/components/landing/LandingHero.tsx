
import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBrandingConfig } from '@/hooks/useBrandingConfig';

// Animação sutil de flutuação
const floatAnimation = { y: [0, -8, 0] };
const floatTransition = (delay = 0) => ({
  duration: 4,
  repeat: Infinity as number,
  ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
  delay
});

const LandingHero = () => {
  // Branding dinâmico com fallback para o nome solicitado
  const { companyName } = useBrandingConfig();
  const productName = (companyName && companyName.trim().length > 0) ? companyName : (import.meta.env.VITE_COMPANY_NAME || 'Poupe Já');
  const appUrl = import.meta.env.VITE_APP_URL;

  const scrollToPlans = useCallback(() => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleLoginClick = useCallback(() => {
    if (appUrl) {
      window.location.href = appUrl;
    }
  }, [appUrl]);

  // resolvedName já definido via branding

  return (
    <section className="dv-hero-gradient relative overflow-hidden w-full pt-10 md:pt-16 pb-16 md:pb-28">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto items-center">
          {/* Lado Esquerdo – Texto principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4" style={{letterSpacing: '-0.02em', lineHeight: '1.3'}}>
              <span className="block dv-brand-text">{productName}</span>
              <span className="block text-foreground">Clareza e controle do seu dinheiro direto no WhatsApp</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed mx-auto md:mx-0">
              Acompanhe gastos, metas e relatórios sem planilhas. Simples, prático e feito para o seu dia a dia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="text-sm md:text-base px-6 md:px-8 py-5 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-[1.02]"
                onClick={scrollToPlans}
              >
                Quero começar agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-sm md:text-base px-6 md:px-8 py-5"
                onClick={handleLoginClick}
              >
                Já tenho conta
              </Button>
            </div>

            {/* Benefícios rápidos */}
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-sm mx-auto md:mx-0">
              <Badge variant="secondary" className="justify-center">Simples</Badge>
              <Badge variant="secondary" className="justify-center">Prático</Badge>
              <Badge variant="secondary" className="col-span-2 flex items-center justify-center gap-1"><MessageCircle className="h-3.5 w-3.5" /> 100% no WhatsApp</Badge>
            </div>
          </motion.div>

          {/* Lado Direito – Telefone + cards flutuantes */}
          <div className="relative order-1 md:order-2 h-[420px] md:h-[560px] pointer-events-none select-none" aria-hidden>
            {/* Mockup do iPhone */}
            <img
              src="/mockup-topo.png"
              alt="Preview do app"
              className="absolute left-1/2 -translate-x-1/2 top-6 md:top-10 w-[244px] md:w-[315px] h-auto object-contain z-10"
            />

            {/* Cards flutuantes */}
            {/* Top-Right (pequeno) */}
            <motion.div
              className="absolute block -right-2 md:-right-6 lg:-right-10 top-3 md:top-8 lg:top-10 z-20"
              animate={floatAnimation}
              transition={floatTransition(0.2)}
            >
              <Card className="rounded-lg shadow-lg ring-1 ring-primary/20 bg-background/80 backdrop-blur-xl border border-primary/30 max-w-[100px] md:max-w-[200px]" style={{boxShadow: '0 0 20px rgba(99, 102, 241, 0.25)'}}>
                <CardHeader className="pb-1 px-2 pt-2 md:pb-2 md:px-6 md:pt-6">
                  <CardTitle className="text-[10px] md:text-sm leading-tight">Gastei R$ 45 no almoço hoje</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Top-Left (meta mensal) */}
            <motion.div
              className="absolute block -left-1 md:-left-6 lg:-left-10 top-0 md:top-4 lg:top-6 z-20"
              animate={floatAnimation}
              transition={floatTransition(0.35)}
            >
              <Card className="rounded-lg shadow-lg ring-1 ring-primary/20 bg-background/80 backdrop-blur-xl border border-primary/30 max-w-[115px] md:max-w-[240px]" style={{boxShadow: '0 0 20px rgba(99, 102, 241, 0.25)'}}>
                <CardHeader className="pb-0 px-2 pt-1.5 md:pb-1 md:px-6 md:pt-6">
                  <CardTitle className="text-[9px] md:text-xs uppercase tracking-wide text-muted-foreground">Meta mensal</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-2 pb-2 md:px-6 md:pb-6">
                  <div className="text-[10px] md:text-sm font-semibold dv-text-accent mb-0.5 md:mb-1">R$ 3.247,50</div>
                  <div className="h-1 md:h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-primary to-secondary"></div>
                  </div>
                  <div className="mt-0.5 md:mt-1 text-[8px] md:text-[11px] text-muted-foreground">85% atingida</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Middle-Left (insights) */}
            <motion.div
              className="absolute block -left-12 md:-left-24 lg:-left-28 top-20 md:top-36 lg:top-40 z-20"
              animate={floatAnimation}
              transition={floatTransition(0.5)}
            >
              <Card className="rounded-lg shadow-lg ring-1 ring-accent/20 bg-background/80 backdrop-blur-xl border border-accent/30 max-w-[150px] md:max-w-[300px]" style={{boxShadow: '0 0 20px rgba(59, 130, 246, 0.25)'}}>
                <CardHeader className="pb-1 px-2 pt-2 md:pb-2 md:px-6 md:pt-6">
                  <CardTitle className="text-[9px] md:text-xs uppercase tracking-wide text-cyan-400">Insights IA</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-2 pb-2 md:px-6 md:pb-6 text-[10px] md:text-sm text-muted-foreground">
                  <span className="md:hidden">Economizou 23% em alimentação.</span>
                  <span className="hidden md:block">Você economizou 23% em alimentação comparado ao mês passado.</span>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bottom-Right (gasto do dia) */}
            <motion.div
              className="absolute block -right-1 md:-right-3 lg:-right-6 bottom-12 md:bottom-20 lg:bottom-24 z-20"
              animate={floatAnimation}
              transition={floatTransition(0.65)}
            >
              <Card className="rounded-lg shadow-lg ring-1 ring-primary/20 bg-background/80 backdrop-blur-xl border border-primary/30 max-w-[110px] md:max-w-[220px]" style={{boxShadow: '0 0 20px rgba(99, 102, 241, 0.25)'}}>
                <CardHeader className="pb-0.5 px-2 pt-2 md:pb-1 md:px-6 md:pt-6">
                  <CardTitle className="text-[9px] md:text-xs uppercase tracking-wide text-muted-foreground">Gasto do dia</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-2 pb-2 md:px-6 md:pb-6">
                  <div className="text-[10px] md:text-sm">R$ 125,00 <span className="text-[8px] md:text-[11px] text-muted-foreground">(total)</span></div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bottom-Left (receita registrada) */}
            <motion.div
              className="absolute block -left-4 md:-left-7 lg:-left-12 bottom-2 md:bottom-5 lg:bottom-7 z-20"
              animate={floatAnimation}
              transition={floatTransition(0.75)}
            >
              <Card className="rounded-lg shadow-lg ring-1 ring-primary/20 bg-background/80 backdrop-blur-xl border border-primary/30 max-w-[120px] md:max-w-[240px]" style={{boxShadow: '0 0 20px rgba(99, 102, 241, 0.25)'}}>
                <CardHeader className="pb-0.5 px-2 pt-2 md:pb-1 md:px-6 md:pt-6">
                  <CardTitle className="text-[9px] md:text-sm">Parabéns! Receita registrada</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-2 pb-2 md:px-6 md:pb-6">
                  <div className="text-[10px] md:text-sm text-cyan-400 font-semibold">R$ 3.247,50</div>
                  <div className="text-[8px] md:text-[11px] text-muted-foreground">Crédito confirmado</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
