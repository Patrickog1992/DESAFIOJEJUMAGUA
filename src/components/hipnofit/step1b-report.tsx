'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {
  onContinue: () => void;
};

export function Step1b_Report({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline text-center">
          Entenda mais sobre o método com essa reportagem!
        </CardTitle>
      </CardHeader>
      <CardContent>
        <video
          src="https://i.imgur.com/R4qyStp.mp4"
          controls
          autoPlay
          playsInline
          className="w-full rounded-lg"
        ></video>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}
