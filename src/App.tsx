import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrandingProvider } from "@/contexts/BrandingContext";
import { useFavicon } from "@/hooks/useFavicon";
import { useSEO } from "@/hooks/useSEO";
import LandingPage from "./pages/LandingPage";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  // Configura o favicon dinamicamente
  useFavicon();
  
  // Configura as meta tags de SEO dinamicamente
  useSEO();

  // Definir tema padrão como claro
  const defaultTheme = 'light';

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem={false}>
        <BrandingProvider>
          <LandingPage />
        </BrandingProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;