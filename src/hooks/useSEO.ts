import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  author: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export const useSEO = (customConfig?: Partial<SEOConfig>) => {
  // Configurações padrão do .env
  const defaultConfig: SEOConfig = {
    title: import.meta.env.VITE_SEO_TITLE || 'Poupeja - Controle Financeiro Inteligente',
    description: import.meta.env.VITE_SEO_DESCRIPTION || 'Transforme sua vida financeira com o aplicativo mais completo e intuitivo do mercado. Controle total das suas finanças na palma da sua mão.',
    keywords: import.meta.env.VITE_SEO_KEYWORDS || 'controle financeiro, app financeiro, economia, orçamento pessoal, finanças',
    author: import.meta.env.VITE_SEO_AUTHOR || 'Poupeja',
  };

  // Mescla configurações customizadas com as padrão
  const config = { ...defaultConfig, ...customConfig };

  useEffect(() => {
    // Atualiza o título da página
    document.title = config.title;

    // Função para atualizar ou criar meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    };

    // Atualiza meta tags básicas
    updateMetaTag('description', config.description);
    updateMetaTag('keywords', config.keywords);
    updateMetaTag('author', config.author);

    // Atualiza Open Graph tags
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:title', config.ogTitle || config.title, true);
    updateMetaTag('og:description', config.ogDescription || config.description, true);
    updateMetaTag('og:url', config.ogUrl || window.location.href, true);
    
    if (config.ogImage) {
      updateMetaTag('og:image', config.ogImage, true);
    }

    // Atualiza Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', config.twitterTitle || config.title, true);
    updateMetaTag('twitter:description', config.twitterDescription || config.description, true);
    updateMetaTag('twitter:url', config.ogUrl || window.location.href, true);
    
    if (config.twitterImage || config.ogImage) {
      updateMetaTag('twitter:image', config.twitterImage || config.ogImage || '', true);
    }

  }, [config]);

  return {
    config,
    updateSEO: (newConfig: Partial<SEOConfig>) => {
      // Esta função pode ser usada para atualizar SEO dinamicamente
      const updatedConfig = { ...config, ...newConfig };
      return updatedConfig;
    }
  };
};

// Hook específico para compartilhamento
export const useShareConfig = () => {
  const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL;
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL;
  
  // Valores padrão do .env para compartilhamento
  const defaultTitle = import.meta.env.VITE_SEO_TITLE || 'Poupeja - Controle Financeiro Inteligente';
  const defaultDescription = import.meta.env.VITE_SEO_DESCRIPTION || 'Transforme sua vida financeira com o aplicativo mais completo e intuitivo do mercado.';
  const companyName = import.meta.env.VITE_COMPANY_NAME || 'Poupeja';
  
  const shareOnWhatsApp = (text?: string, url?: string) => {
    // Usa o texto fornecido ou o título do .env
    const shareText = text || defaultTitle;
    const shareUrl = url || window.location.href;
    const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`;
    window.open(whatsappShareUrl, '_blank');
  };

  const shareOnSocial = (platform: 'facebook' | 'twitter' | 'linkedin', url?: string, text?: string) => {
    const shareUrl = url || window.location.href;
    // Usa o texto fornecido ou o título do .env
    const shareText = text || defaultTitle;
    
    let socialUrl = '';
    
    switch (platform) {
      case 'facebook':
        socialUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        socialUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case 'linkedin':
        socialUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }
    
    if (socialUrl) {
      window.open(socialUrl, '_blank', 'width=600,height=400');
    }
  };

  return {
    whatsappUrl,
    instagramUrl,
    shareOnWhatsApp,
    shareOnSocial,
    defaultTitle,
    defaultDescription,
    companyName
  };
};