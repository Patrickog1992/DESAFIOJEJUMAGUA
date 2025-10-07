'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Script from 'next/script';
import { useRouter, useSearchParams } from 'next/navigation';

export function VslFinal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // 5 minutos e 14 segundos = 314000 milissegundos
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 314000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    const params = new URLSearchParams(searchParams.toString());
    router.push(`/oferta-unica?${params.toString()}`);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-none border-none bg-transparent">
      <CardContent>
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://scripts.converteai.net/db159b27-2739-477e-a1ae-6458da34c980/players/68e45a03f2f5978b2e24eebe/embed.html"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Script
          src="https://scripts.converteai.net/db159b27-2739-477e-a1ae-6458da34c980/players/68e45a03f2f5978b2e24eebe/player.js"
          strategy="afterInteractive"
        />
      </CardContent>
      <CardFooter className="justify-center mt-4">
        {showButton && (
          <Button
            onClick={handleContinue}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white animate-pulse-strong"
          >
            QUERO MEU PLANO!
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
