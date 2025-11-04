'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Props = {
  onContinue: () => void;
};

export function Step29b_VSLFinal({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-none bg-transparent">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold font-headline">Você ainda tem dúvidas?</CardTitle>
        <CardDescription>Escute um pequeno exemplo! Aperte o play e escute esse áudio em um lugar tranquilo</CardDescription>
      </CardHeader>
      <CardContent>
        <video
            src="https://i.imgur.com/yf59a1N.mp4"
            controls
            autoPlay
            playsInline
            className="w-full rounded-lg"
        ></video>
      </CardContent>
      <CardFooter className="justify-center mt-4">
        <Button
            onClick={onContinue}
            size="lg"
            className="bg-green-600 hover:bg-green-700"
        >
            Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}
