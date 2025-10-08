'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Props = {
  onContinue: () => void;
};

export function Step1_IntroVSL({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-none bg-transparent">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold font-headline">Descubra quanto peso você pode perder com auto-hipnose em casa!</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full mx-auto aspect-video relative">
            <Image
                src="https://i.imgur.com/SL6CGop.jpeg"
                alt="HipnoFit"
                fill
                className="object-contain rounded-lg"
            />
        </div>
      </CardContent>
      <CardFooter className="justify-center mt-4">
          <Button onClick={onContinue} size="lg" className="bg-green-600 hover:bg-green-700 animate-pulse">
            QUERO SABER MAIS
          </Button>
      </CardFooter>
    </Card>
  );
}
