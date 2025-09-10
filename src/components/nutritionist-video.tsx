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
          Aperte o play e verifique o volume para esse breve recado
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{position: 'relative', width: '100%', height: 0, paddingBottom: '177.78%'}}>
          <iframe
            src="https://www.youtube.com/embed/KJjoEC6p0CQ?rel=0&controls=1&modestbranding=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
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
