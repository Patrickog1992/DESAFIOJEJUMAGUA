'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Script from 'next/script';

type Props = {
  onContinue: () => void;
};

export function Step1_IntroVSL({ onContinue }: Props) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 90000); // 90 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-none bg-transparent">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold font-headline">Descubra quanto peso você pode perder com auto-hipnose em casa!</CardTitle>
        <CardDescription className="text-lg mt-2">(Veja o vídeo abaixo com o som ligado e depois clique em QUERO SABER MAIS)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full mx-auto aspect-[4/3]">
             <vturb-smartplayer
                id="vid-68dbf93c2980edbc297eb86d"
                class="w-full h-full"
            ></vturb-smartplayer>
        </div>
        <Script
            src="https://scripts.converteai.net/db159b27-2739-477e-a1ae-6458da34c980/players/68dbf93c2980edbc297eb86d/v4/player.js"
            strategy="afterInteractive"
        />
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
