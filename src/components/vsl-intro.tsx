'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Script from 'next/script';

type VslIntroProps = {
  onContinue: () => void;
};

export function VslIntro({ onContinue }: VslIntroProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 298000); // 4 minutos e 58 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-none border-none bg-transparent">
      <CardContent>
        <div style={{ margin: '0 auto', maxWidth: '400px' }}>
          <vturb-smartplayer
            id="vid-68e46b579fccd82203a33a37"
            style={{ display: 'block', width: '100%' }}
          ></vturb-smartplayer>
          <Script
            src="https://scripts.converteai.net/db159b27-2739-477e-a1ae-6458da34c980/players/68e46b579fccd82203a33a37/v4/player.js"
            strategy="afterInteractive"
          />
        </div>
      </CardContent>
      <CardFooter className="justify-center mt-4">
        {showButton && (
          <Button
            onClick={onContinue}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white animate-pulse-strong"
          >
            CONTINUAR
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
