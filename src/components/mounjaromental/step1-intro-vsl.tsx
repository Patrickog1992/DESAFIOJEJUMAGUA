'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Props = {
  onContinue: () => void;
};

export function Step1_IntroVSL({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-none bg-transparent">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold font-headline">Descubra quanto peso você pode perder com MounjaroMental em casa!</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src="https://i.imgur.com/SL6CGop.jpeg"
          alt="Mulher meditando"
          width={600}
          height={400}
          className="mx-auto rounded-lg"
        />
      </CardContent>
      <CardFooter className="justify-center mt-4">
        <Button onClick={onContinue} size="lg" className="bg-green-600 hover:bg-green-700">
          QUERO SABER MAIS
        </Button>
      </CardFooter>
    </Card>
  );
}
