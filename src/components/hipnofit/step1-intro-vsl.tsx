'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Script from 'next/script';

type Props = {
  onContinue: () => void;
};

export function Step1_IntroVSL({ onContinue }: Props) {
  const [showButton, setShowButton] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures the component only renders on the client side, avoiding hydration errors.
    setIsClient(true);
    
    // The video is approximately 4min 47s, so we'll use that time.
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 287000); // 287 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-none bg-transparent">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold font-headline">Descubra quanto peso você pode perder com auto-hipnose em casa!</CardTitle>
      </CardHeader>
      <CardContent>
        {isClient && (
            <div style={{ margin: '0 auto', maxWidth: '400px' }}>
                <vturb-smartplayer
                    id="vid-68d1a91313a017c11def1ee3"
                    style={{ display: 'block', width: '100%' }}
                ></vturb-smartplayer>
                <Script
                    src="https://scripts.converteai.net/b45e4a12-72fd-43f2-a7e4-73d6b242d5d9/players/68d1a91313a017c11def1ee3/player.js"
                    strategy="afterInteractive"
                    id="vsl-script"
                />
            </div>
        )}
      </CardContent>
      <CardFooter className="justify-center mt-4">
          {showButton && (
            <Button onClick={onContinue} size="lg" className="bg-green-600 hover:bg-green-700 animate-pulse">
              QUERO SABER MAIS
            </Button>
          )}
      </CardFooter>
    </Card>
  );
}
