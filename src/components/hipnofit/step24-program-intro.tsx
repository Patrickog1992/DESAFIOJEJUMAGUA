'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';

type Props = {
  onContinue: () => void;
};

export function Step24_ProgramIntro({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-xl mx-auto text-center shadow-lg border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600 font-headline">
          O Hypnozio pode te ajudar a controlar seu peso em apenas 15 minutos por dia.
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-lg text-gray-700">
          Você receberá um programa personalizado de hipnoterapia, criado por nossa equipe de hipnoterapeutas experientes, projetado para melhorar sua relação com a comida e te ajudar a alcançar seu peso desejado.
        </CardDescription>
        <Image
          src="https://i.imgur.com/52gwXD4.png"
          alt="Especialista em Hipnoterapia"
          width={150}
          height={150}
          className="mx-auto rounded-full border-4 border-blue-200"
        />
        <CardDescription className="text-lg text-gray-700">
          A melhor parte? Não há necessidade de medidas drásticas, como terapia presencial ou grupos de apoio, se você não estiver pronto. Basta relaxar e aproveitar suas sessões em casa.
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
