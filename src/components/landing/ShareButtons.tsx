import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2, MessageCircle, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useShareConfig } from '@/hooks/useSEO';

interface ShareButtonsProps {
  title?: string;
  description?: string;
  url?: string;
  showWhatsApp?: boolean;
  showSocialMedia?: boolean;
  variant?: 'default' | 'compact' | 'floating';
  className?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({
  title,
  description,
  url,
  showWhatsApp = true,
  showSocialMedia = true,
  variant = 'default',
  className = ''
}) => {
  const { shareOnWhatsApp, shareOnSocial } = useShareConfig();

  const handleWhatsAppShare = () => {
    const shareText = title || document.title;
    const shareDescription = description ? ` - ${description}` : '';
    shareOnWhatsApp(`${shareText}${shareDescription}`, url);
  };

  const handleSocialShare = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    shareOnSocial(platform, url, title);
  };

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Share2 className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground mr-2">Compartilhar:</span>
        
        {showWhatsApp && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleWhatsAppShare}
            className="h-8 w-8 p-0 hover:bg-green-500/10"
          >
            <MessageCircle className="h-4 w-4 text-green-500" />
          </Button>
        )}
        
        {showSocialMedia && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSocialShare('facebook')}
              className="h-8 w-8 p-0 hover:bg-blue-500/10"
            >
              <Facebook className="h-4 w-4 text-blue-500" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSocialShare('twitter')}
              className="h-8 w-8 p-0 hover:bg-sky-500/10"
            >
              <Twitter className="h-4 w-4 text-sky-500" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSocialShare('linkedin')}
              className="h-8 w-8 p-0 hover:bg-blue-600/10"
            >
              <Linkedin className="h-4 w-4 text-blue-600" />
            </Button>
          </>
        )}
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <div className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 ${className}`}>
        {showWhatsApp && (
          <Button
            variant="default"
            size="sm"
            onClick={handleWhatsAppShare}
            className="h-10 w-10 p-0 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        )}
        
        {showSocialMedia && (
          <>
            <Button
              variant="default"
              size="sm"
              onClick={() => handleSocialShare('facebook')}
              className="h-10 w-10 p-0 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
            >
              <Facebook className="h-5 w-5" />
            </Button>
            
            <Button
              variant="default"
              size="sm"
              onClick={() => handleSocialShare('twitter')}
              className="h-10 w-10 p-0 rounded-full bg-sky-500 hover:bg-sky-600 shadow-lg"
            >
              <Twitter className="h-5 w-5" />
            </Button>
          </>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`flex flex-col sm:flex-row gap-3 items-center justify-center text-center w-full px-2 ${className}`}>
      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-0 flex-wrap justify-center">
        <Share2 className="h-4 w-4" />
        <span>Compartilhe esta página:</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 w-full">
        {showWhatsApp && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleWhatsAppShare}
            className="flex items-center gap-2 h-8 text-xs sm:text-sm px-2"
          >
            <MessageCircle className="h-4 w-4 text-green-500" />
            WhatsApp
          </Button>
        )}
        
        {showSocialMedia && (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSocialShare('facebook')}
              className="flex items-center gap-2 h-8 text-xs sm:text-sm px-2"
            >
              <Facebook className="h-4 w-4 text-blue-500" />
              Facebook
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSocialShare('twitter')}
              className="flex items-center gap-2 h-8 text-xs sm:text-sm px-2"
            >
              <Twitter className="h-4 w-4 text-sky-500" />
              Twitter
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSocialShare('linkedin')}
              className="flex items-center gap-2 h-8 text-xs sm:text-sm px-2"
            >
              <Linkedin className="h-4 w-4 text-blue-600" />
              LinkedIn
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShareButtons;