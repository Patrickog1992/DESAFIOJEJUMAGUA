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
    <Card className="w-full max-w-2xl mx-auto shadow-lg text-center">
      <CardHeader>
        <CardTitle className="text-3xl font-headline">
          Você está muito perto de alcançar seu objetivo!
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <Image
            src="https://i.imgur.com/SMrGKnM.png"
            alt="Depoimento de Andreia Silva"
            width={200}
            height={200}
            className="rounded-full border-4 border-primary"
            data-ai-hint="woman smiling"
          />
        </div>
        <div className="bg-accent/50 p-4 rounded-lg">
          <CardTitle className="text-xl mb-2">
            Perdeu 19 kg em 2 meses
          </CardTitle>
          <CardDescription className="text-base text-foreground">
            Fiquei maravilhada que, após a minha primeira semana com este plano
            de perda de peso, já tinha perdido 4 kg! Agora, após 2 meses, perdi
            19 kg! É uma grande quantidade de gordura que já não tenho de
            carregar. A minha saúde melhorou e sinto-me melhor do que nunca! E
            disseram-me que agora pareço 10 anos mais jovem.
          </CardDescription>
          <p className="font-bold mt-4">- Andreia Silva</p>
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
