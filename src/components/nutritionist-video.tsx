'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Script from 'next/script';

type NutritionistVideoProps = {
  onContinue: () => void;
};

export function NutritionistVideo({ onContinue }: NutritionistVideoProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl">
          Nossa especialista tem um recado para você!
        </CardTitle>
        <CardDescription className="text-lg pt-2">
          Aperte o play e verifique o volume para esse breve recado
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ margin: '0 auto', maxWidth: '400px' }}>
          <div
            id="vid_68d1a91313a017c11def1ee3"
            style={{ display: 'block', width: '100%' }}
          ></div>
          <Script
            src="https://scripts.converteai.net/b45e4a12-72fd-43f2-a7e4-73d6b242d5d9/players/68d1a91313a017c11def1ee3/player.js"
            strategy="afterInteractive"
          />
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}

    