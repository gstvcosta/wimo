
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
      <div className="w-full px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-28 max-w-7xl mx-auto items-center">
          {/* Lado Esquerdo – Texto principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6" style={{letterSpacing: '-0.02em', lineHeight: '1.3'}}>
              <span className="block dv-brand-text">{productName}</span>
              <span className="block text-foreground">Gerencie suas finanças com clareza direto pelo WhatsApp</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-6 md:mb-8 leading-relaxed mx-auto md:mx-0">
              Monitore despesas, alcance metas e visualize relatórios sem complicação. Controle financeiro descomplicado no seu dia a dia.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-[1.02]"
                onClick={scrollToPlans}
              >
                Começar agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5"
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
          <div className="relative order-1 md:order-2 h-[420px] md:h-[520px] lg:h-[600px] xl:h-[640px] pointer-events-none select-none" aria-hidden>
            {/* Mockup do iPhone */}
            <img
              src="/mockup-topo.png"
              alt="Preview do app"
              className="absolute left-1/2 -translate-x-1/2 top-6 md:top-10 w-[15rem] md:w-[18rem] lg:w-[19.5rem] xl:w-[20rem] h-auto object-contain z-10"
            />

            {/* Cards flutuantes */}
            {/* Top-Right (pequeno) */}
            <motion.div
              className="absolute block right-0 md:-right-2 lg:-right-6 xl:-right-10 top-3 md:top-8 lg:top-10 z-20"
              animate={floatAnimation}
              transition={floatTransition(0.2)}
            >
              <Card className="rounded-lg shadow-lg ring-1 ring-primary/20 bg-background/80 backdrop-blur-xl border border-primary/30 w-[6rem] md:w-[9rem] lg:w-[11rem] xl:w-[12.5rem]" style={{boxShadow: '0 0 1.25rem rgba(99, 102, 241, 0.25)'}}>
                <CardHeader className="pb-1 px-2 pt-2 md:pb-2 md:px-3 lg:px-4 xl:px-6 md:pt-3 lg:pt-4 xl:pt-6">
                  <CardTitle className="text-[0.625rem] md:text-xs lg:text-sm leading-tight">Gastei R$ 45 no almoço hoje</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Top-Left (meta mensal) */}
            <motion.div
              className="absolute block left-0 md:-left-2 lg:-left-6 xl:-left-10 top-0 md:top-4 lg:top-6 z-20"
              animate={floatAnimation}
              transition={floatTransition(0.35)}
            >
              <Card className="rounded-lg shadow-lg ring-1 ring-primary/20 bg-background/80 backdrop-blur-xl border border-primary/30 w-[7rem] md:w-[10.5rem] lg:w-[13rem] xl:w-[15rem]" style={{boxShadow: '0 0 1.25rem rgba(99, 102, 241, 0.25)'}}>
                <CardHeader className="pb-0 px-2 pt-1.5 md:pb-1 md:px-3 lg:px-4 xl:px-6 md:pt-3 lg:pt-4 xl:pt-6">
                  <CardTitle className="text-[0.5625rem] md:text-[0.625rem] lg:text-xs uppercase tracking-wide text-muted-foreground">Meta mensal</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-2 pb-2 md:px-3 lg:px-4 xl:px-6 md:pb-3 lg:pb-4 xl:pb-6">
                  <div className="text-[0.625rem] md:text-xs lg:text-sm font-semibold dv-text-accent mb-0.5 md:mb-1">R$ 3.247,50</div>
                  <div className="h-1 md:h-1.5 lg:h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-primary to-secondary"></div>
                  </div>
                  <div className="mt-0.5 md:mt-1 text-[0.5rem] md:text-[0.625rem] lg:text-[0.6875rem] text-muted-foreground">85% atingida</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Middle-Left (insights) */}
            <motion.div
              className="absolute block -left-8 md:-left-12 lg:-left-20 xl:-left-28 top-20 md:top-32 lg:top-36 xl:top-40 z-20"
              animate={floatAnimation}
              transition={floatTransition(0.5)}
            >
              <Card className="rounded-lg shadow-lg ring-1 ring-accent/20 bg-background/80 backdrop-blur-xl border border-accent/30 w-[9rem] md:w-[13rem] lg:w-[16.5rem] xl:w-[18.75rem]" style={{boxShadow: '0 0 1.25rem rgba(59, 130, 246, 0.25)'}}>
                <CardHeader className="pb-1 px-2 pt-2 md:pb-2 md:px-3 lg:px-4 xl:px-6 md:pt-3 lg:pt-4 xl:pt-6">
                  <CardTitle className="text-[0.5625rem] md:text-[0.625rem] lg:text-xs uppercase tracking-wide text-cyan-400">Insights IA</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-2 pb-2 md:px-3 lg:px-4 xl:px-6 md:pb-3 lg:pb-4 xl:pb-6 text-[0.625rem] md:text-xs lg:text-sm text-muted-foreground">
                  <span className="md:hidden">Economizou 23% em alimentação.</span>
                  <span className="hidden md:block">Você economizou 23% em alimentação comparado ao mês passado.</span>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bottom-Right (gasto do dia) */}
            <motion.div
              className="absolute block right-0 md:-right-1 lg:-right-4 xl:-right-6 bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-24 z-20"
              animate={floatAnimation}
              transition={floatTransition(0.65)}
            >
              <Card className="rounded-lg shadow-lg ring-1 ring-primary/20 bg-background/80 backdrop-blur-xl border border-primary/30 w-[6.875rem] md:w-[9.5rem] lg:w-[12rem] xl:w-[13.75rem]" style={{boxShadow: '0 0 1.25rem rgba(99, 102, 241, 0.25)'}}>
                <CardHeader className="pb-0.5 px-2 pt-2 md:pb-1 md:px-3 lg:px-4 xl:px-6 md:pt-3 lg:pt-4 xl:pt-6">
                  <CardTitle className="text-[0.5625rem] md:text-[0.625rem] lg:text-xs uppercase tracking-wide text-muted-foreground">Gasto do dia</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-2 pb-2 md:px-3 lg:px-4 xl:px-6 md:pb-3 lg:pb-4 xl:pb-6">
                  <div className="text-[0.625rem] md:text-xs lg:text-sm">R$ 125,00 <span className="text-[0.5rem] md:text-[0.625rem] lg:text-[0.6875rem] text-muted-foreground">(total)</span></div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bottom-Left (receita registrada) */}
            <motion.div
              className="absolute block left-0 md:-left-1 lg:-left-6 xl:-left-12 bottom-2 md:bottom-4 lg:bottom-5 xl:bottom-7 z-20"
              animate={floatAnimation}
              transition={floatTransition(0.75)}
            >
              <Card className="rounded-lg shadow-lg ring-1 ring-primary/20 bg-background/80 backdrop-blur-xl border border-primary/30 w-[7.5rem] md:w-[10.5rem] lg:w-[13.5rem] xl:w-[15rem]" style={{boxShadow: '0 0 1.25rem rgba(99, 102, 241, 0.25)'}}>
                <CardHeader className="pb-0.5 px-2 pt-2 md:pb-1 md:px-3 lg:px-4 xl:px-6 md:pt-3 lg:pt-4 xl:pt-6">
                  <CardTitle className="text-[0.5625rem] md:text-xs lg:text-sm">Parabéns! Receita registrada</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-2 pb-2 md:px-3 lg:px-4 xl:px-6 md:pb-3 lg:pb-4 xl:pb-6">
                  <div className="text-[0.625rem] md:text-xs lg:text-sm text-cyan-400 font-semibold">R$ 3.247,50</div>
                  <div className="text-[0.5rem] md:text-[0.625rem] lg:text-[0.6875rem] text-muted-foreground">Crédito confirmado</div>
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
