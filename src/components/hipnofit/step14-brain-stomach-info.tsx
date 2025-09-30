'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardFooter } from '@/components/ui/card';

type Props = {
  onContinue: () => void;
};

export function Step14_BrainStomachInfo({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-xl mx-auto text-center shadow-lg border-none bg-transparent">
      <CardHeader>
        <CardDescription className="text-lg text-gray-700">
          O Método HipnoFit ajuda a gerenciar sua relação com a comida “corrigindo” a falha de comunicação entre seu cérebro e seu estômago.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Image
          src="https://hypnozio.com/hypnozio/quiz/brain-and-stomach2.jpg"
          alt="Conexão Cérebro e Estômago"
          width={500}
          height={350}
          className="mx-auto rounded-lg"
        />
        <CardDescription className="text-lg text-gray-700">
          Vamos começar aprendendo mais sobre você para avaliar se o HipnoFit também pode te ajudar.
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
