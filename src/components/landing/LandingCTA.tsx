
import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useBrandingConfig } from '@/hooks/useBrandingConfig';
import BrandText from '@/components/ui/BrandText';
import { Check } from 'lucide-react';

// Branding dinâmico restaurado

const LandingCTA = () => {
  const { companyName } = useBrandingConfig();
  const resolvedName = (companyName && companyName.trim().length > 0) ? companyName : (import.meta.env.VITE_COMPANY_NAME || 'Poupe Já');

  const scrollToPlans = useCallback(() => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 w-full bg-[#F8FAFC]">
      <div className="w-full px-4">
        <motion.div
          className="bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center text-white max-w-6xl mx-auto shadow-2xl relative overflow-hidden" style={{ boxShadow: '0px 20px 60px #4ECDC4' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{boxShadow: '0 20px 60px #4ECDC4'}}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Pronto para organizar seu dinheiro e sua agenda?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-95 leading-relaxed px-2">
          Começe grátis por 7 dias.<br />
          A Inteligência Artificial do <BrandText name={resolvedName} className="font-bold bg-white/20 px-2 py-1 rounded-lg border border-white/40" /> cuida de resto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-sm sm:text-base md:text-lg px-8 sm:px-10 py-4 sm:py-6 font-semibold w-64 sm:w-auto mx-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white text-primary hover:bg-gray-50 border-0 text-center"
              onClick={scrollToPlans}
            >
              <span className="md:hidden">Começar agora</span>
              <span className="hidden md:inline">Quero começar agora</span>
            </Button>
          </div>
          
          <div className="mt-8 text-sm opacity-90">
            <span className="inline-flex items-center gap-1"><Check className="h-5 w-5 text-white" /> Simples</span>{" "}
            <span className="inline-flex items-center gap-1"><Check className="h-5 w-5 text-white" /> Prático</span>{" "}
            <span className="inline-flex items-center gap-1"><Check className="h-5 w-5 text-white" /> 100% no WhatsApp</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingCTA;
