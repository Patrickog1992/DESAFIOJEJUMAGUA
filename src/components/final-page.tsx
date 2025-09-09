'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from './ui/button';

type FinalPageProps = {
  onContinue: () => void;
  gender: 'male' | 'female' | null;
};

const images = {
  female: {
    src: 'https://i.imgur.com/Bljsc8Q.jpeg',
    hint: 'woman celebrating',
  },
  male: {
    src: 'https://i.imgur.com/PIHuZrw.jpg',
    hint: 'man celebrating',
  },
};

export function FinalPage({ onContinue, gender }: FinalPageProps) {
  const { src, hint } =
    gender === 'male' ? images.male : images.female;

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-headline">
          VOCÊ VAI TER UM ÓTIMO RESULTADO !
        </CardTitle>
        <CardDescription className="text-lg pt-2">
          Já ajudámos 497.565 pessoas a perder peso! Vamos alcançar também o teu
          corpo ideal!
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Image
          src={src}
          alt="Success"
          width={800}
          height={600}
          className="w-full h-auto object-contain"
          data-ai-hint={hint}
        />
      </CardContent>
      <CardFooter className="justify-center p-6">
        <Button onClick={onContinue} size="lg">
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}
