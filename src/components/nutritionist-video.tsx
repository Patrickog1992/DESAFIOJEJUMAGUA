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
          Verifique o volume para esse breve recado
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video w-full overflow-hidden rounded-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/KJjoEC6p0CQ?autoplay=1&controls=1&showinfo=0&rel=0&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
