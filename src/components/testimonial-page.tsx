'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type TestimonialPageProps = {
  onContinue: () => void;
};

export function TestimonialPage({ onContinue }: TestimonialPageProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg text-center">
      <CardHeader>
        <CardTitle className="text-3xl font-headline">
          Você está muito perto de alcançar seu objetivo!
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center items-center">
           <Image
            src="https://i.imgur.com/SMrGKnM.png"
            alt="Depoimento de Joana Sousa"
            width={400}
            height={300}
            className="rounded-lg border-4 border-muted"
            data-ai-hint="woman happy"
          />
        </div>
        <div className="bg-accent/50 p-4 rounded-lg">
          <CardTitle className="text-xl mb-2">
            Perdeu 12 kg em 2 meses
          </CardTitle>
          <CardDescription className="text-base text-foreground">
            "Sempre lutei com o meu peso, mas este plano tornou tudo mais fácil.
            Em apenas dois meses, perdi 12 kg e nunca me senti tão bem! Tenho
            mais energia e confiança. Recomendo a todos que querem uma mudança
            real e sustentável."
          </CardDescription>
          <p className="font-bold mt-4">- Joana Sousa</p>
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
