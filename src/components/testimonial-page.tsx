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
        <div className="flex justify-center items-center gap-2 sm:gap-4">
          <Image
            src="https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/0lTIBNHU7R-734.webp"
            alt="Depoimento de Roberto Alves antes"
            width={150}
            height={150}
            className="rounded-lg border-4 border-muted object-cover w-[140px] h-[140px] sm:w-[200px] sm:h-[200px]"
            data-ai-hint="man before weight loss"
          />
          <Image
            src="https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/GF1sQ1rSir-734.webp"
            alt="Depoimento de Roberto Alves depois"
            width={150}
            height={150}
            className="rounded-lg border-4 border-primary object-cover w-[140px] h-[140px] sm:w-[200px] sm:h-[200px]"
            data-ai-hint="man after weight loss"
          />
        </div>
        <div className="bg-accent/50 p-4 rounded-lg">
          <CardTitle className="text-xl mb-2">
            Perdeu 15 kg em 2 meses
          </CardTitle>
          <CardDescription className="text-base text-foreground">
            "Sempre lutei com o meu peso, mas este plano tornou tudo mais fácil.
            Em apenas dois meses, perdi 15 kg e nunca me senti tão bem! Tenho
            mais energia e confiança. Recomendo a todos que querem uma mudança
            real e sustentável."
          </CardDescription>
          <p className="font-bold mt-4">- Roberto Alves</p>
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
