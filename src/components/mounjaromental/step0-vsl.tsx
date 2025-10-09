'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Script from 'next/script';

type Props = {
  onContinue: () => void;
};

export function Step0_VSL({ onContinue }: Props) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // 6 minutos e 57 segundos = 417000 milissegundos
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 417000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-none bg-transparent">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold font-headline">Veja o vídeo com o som ligado!</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ margin: '0 auto', width: '100%', maxWidth: '400px' }}>
          <vturb-smartplayer id="vid-68e811fc5b98ec13e5a742ab"></vturb-smartplayer>
          <Script
            id="vsl-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                var s=document.createElement("script");
                s.src="https://scripts.converteai.net/db159b27-2739-477e-a1ae-6458da34c980/players/68e811fc5b98ec13e5a742ab/v4/player.js";
                s.async=!0;
                document.head.appendChild(s);
              `,
            }}
          />
        </div>
      </CardContent>
      <CardFooter className="justify-center mt-4">
        {showButton && (
          <Button
            onClick={onContinue}
            size="lg"
            className="bg-green-600 hover:bg-green-700 animate-pulse-strong"
          >
            QUERO SABER MAIS
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
