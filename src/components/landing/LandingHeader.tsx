
import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const LandingHeader = () => {
  const resolvedName = import.meta.env.VITE_COMPANY_NAME || 'Poupe Já';
  const logoUrl = import.meta.env.VITE_LOGO_URL;
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

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-background/70 backdrop-blur-xl border-b border-primary/20 w-full overflow-x-hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'}}
    >
      <div className="w-full px-4 py-3 sm:py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {logoUrl && logoUrl.trim() !== '' && (
            <img 
              src={logoUrl} 
              alt={`Logo ${resolvedName}`}
              className="h-8 w-auto object-contain"
              onError={(e) => {
                // Se a imagem falhar ao carregar, esconde o elemento
                e.currentTarget.style.display = 'none';
              }}
            />
          )}
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button variant="ghost" onClick={handleLoginClick}>
            Entrar
          </Button>
          <Button 
            asChild={false} 
            onClick={scrollToPlans}
            className="hidden sm:inline-flex text-xs sm:text-sm md:text-base"
            size="sm"
          >
            Teste agora grátis
          </Button>
          <Button 
            asChild={false} 
            onClick={scrollToPlans}
            className="inline-flex sm:hidden"
            size="sm"
          >
            Teste grátis
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default LandingHeader;
