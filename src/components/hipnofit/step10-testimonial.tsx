'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

type Props = {
  onContinue: () => void;
};

export function Step10_Testimonial({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-lg mx-auto text-center shadow-lg border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Veja o antes e depois da Jéssica com o HipnoFit</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Image
          src="https://i.imgur.com/SMrGKnM.png"
          alt="Antes e depois da Jéssica"
          width={500}
          height={300}
          className="mx-auto rounded-lg"
        />
        <CardDescription className="text-lg bg-gray-100 p-4 rounded-lg border">
          "Eu não acreditava que a hipnose poderia me ajudar a emagrecer, mas o HipnoFit mudou completamente minha perspectiva. Perdi 18kg sem sofrimento e, o mais importante, aprendi a ter uma relação saudável com a comida. Minha autoestima nunca esteve tão alta!"
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center mt-4">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
