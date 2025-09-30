'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardFooter } from '@/components/ui/card';

type Props = {
  onContinue: () => void;
};

export function Step17_BrainBodyDisconnectInfo({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-xl mx-auto text-center shadow-lg border-none bg-transparent">
      <CardHeader>
        <CardDescription className="text-lg text-gray-700 space-y-4">
          <p>O ganho de peso vai além da força de vontade. Para muitos, o verdadeiro problema é a desconexão entre o cérebro e o corpo - uma falha de comunicação que confunde fome, desejos e saciedade.</p>
          <p>Essa falha de comunicação entre estômago e cérebro é um fator importante no excesso de peso. Entender e curar essa conexão é fundamental para uma perda de peso duradoura e para melhorias físicas e mentais.</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Image
          src="https://hypnozio.com/hypnozio/quiz/brain-and-guts.jpg"
          alt="Conexão Cérebro e Intestino"
          width={500}
          height={300}
          className="mx-auto rounded-lg"
        />
        <CardDescription className="text-lg text-gray-700 italic">
          Se você já sentiu “frio na barriga” ao ficar nervoso, então já percebeu os efeitos dessa conexão.
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
