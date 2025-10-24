import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";


// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const devHost = env.VITE_DEV_HOST || '::';
  const devPort = Number(env.VITE_DEV_PORT || 8080);

  return {
    server: {
      host: devHost,
      port: devPort,
    },
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_SEO_TITLE || 'Poupe Já - Controle Financeiro Inteligente',
            description: env.VITE_SEO_DESCRIPTION || 'Transforme sua vida financeira com o aplicativo mais completo e intuitivo do mercado. Controle total das suas finanças na palma da sua mão.',
            keywords: env.VITE_SEO_KEYWORDS || 'controle financeiro, app financeiro, economia, orçamento pessoal, finanças',
            author: env.VITE_SEO_AUTHOR || 'Poupe Já',
            companyName: env.VITE_COMPANY_NAME || 'Poupe Já',
            appUrl: env.VITE_APP_URL || 'https://demo-app.poupeja.com',
            logoUrl: env.VITE_LOGO_URL || '/images/logo.png',
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});