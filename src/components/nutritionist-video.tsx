'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

type NutritionistVideoProps = {
  onContinue: () => void;
};

export function NutritionistVideo({ onContinue }: NutritionistVideoProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl">
          Nossa especialista tem um recado para você!
        </CardTitle>
        <CardDescription className="text-lg pt-2">
          Assista ao vídeo para entender como o nosso desafio pode transformar
          sua vida.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          {/* Você pode substituir esta div pelo seu player de vídeo */}
          <div className="text-center text-muted-foreground">
            <PlayCircle className="h-16 w-16 mx-auto mb-2" />
            <p>Seu vídeo será inserido aqui.</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">
          Continuar
        </Button>
      </CardFooter>
    </Card>
  );
}
