'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardFooter } from '@/components/ui/card';

type Props = {
  onContinue: () => void;
};

export function Step7_MindBodyInfo({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-xl mx-auto text-center shadow-lg border-none bg-transparent">
      <CardHeader>
        <CardDescription className="text-lg text-gray-700">
          A maioria das dietas e treinos falham a longo prazo não por falta de esforço, mas porque ignoram a verdadeira causa: a conexão mente-corpo.
          A hipnoterapia funciona mudando sua mentalidade, desbloqueando a motivação, clareza e controle necessários para criar mudanças reais e duradouras.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src="https://hypnozio.com/hypnozio/quiz/female-with-headphones-2.jpg"
          alt="Mulher com fones de ouvido"
          width={500}
          height={350}
          className="mx-auto rounded-lg"
        />
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
