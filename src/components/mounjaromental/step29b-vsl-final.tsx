'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Script from 'next/script';

type Props = {
  onContinue: () => void;
};

export function Step29b_VSLFinal({ onContinue }: Props) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // 5 minutos e 34 segundos = 334000 milissegundos
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 334000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-none bg-transparent">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold font-headline">Parabéns! Temos um recado para você</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ margin: '0 auto', width: '100%', maxWidth: '400px' }}>
          <vturb-smartplayer id="vid-68e80cbe4108b88d948b344e"></vturb-smartplayer>
          <Script
            id="vsl-script-final"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                var s=document.createElement("script");
                s.src="https://scripts.converteai.net/db159b27-2739-477e-a1ae-6458da34c980/players/68e80cbe4108b88d948b344e/v4/player.js";
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
            QUERO AGORA
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
