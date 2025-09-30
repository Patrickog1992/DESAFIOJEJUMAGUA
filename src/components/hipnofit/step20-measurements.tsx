'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

type Props = {
  onContinue: (data: { height: number; weight: number; targetWeight: number }) => void;
};

export function Step20_Measurements({ onContinue }: Props) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const { toast } = useToast();

  const handleContinue = () => {
    const heightNum = parseInt(height);
    const weightNum = parseInt(weight);
    const targetWeightNum = parseInt(targetWeight);

    if (isNaN(heightNum) || heightNum < 100 || heightNum > 250) {
      toast({ title: 'Altura inválida', description: 'Por favor, insira uma altura entre 100 e 250 cm.', variant: 'destructive' });
      return;
    }
    if (isNaN(weightNum) || weightNum < 30 || weightNum > 300) {
      toast({ title: 'Peso inválido', description: 'Por favor, insira um peso entre 30 e 300 kg.', variant: 'destructive' });
      return;
    }
    if (isNaN(targetWeightNum) || targetWeightNum < 30 || targetWeightNum > 300) {
      toast({ title: 'Peso desejado inválido', description: 'Por favor, insira um peso entre 30 e 300 kg.', variant: 'destructive' });
      return;
    }
    if (targetWeightNum >= weightNum) {
      toast({ title: 'Meta inválida', description: 'O peso desejado deve ser menor que o peso atual.', variant: 'destructive' });
      return;
    }

    onContinue({ height: heightNum, weight: weightNum, targetWeight: targetWeightNum });
  };

  return (
    <Card className="w-full max-w-lg mx-auto text-center shadow-lg border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Insira suas medidas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-left">
        <div className="space-y-2">
            <Label htmlFor="height">Altura (cm)</Label>
            <Input id="height" type="number" placeholder="Ex: 175" value={height} onChange={e => setHeight(e.target.value)} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="weight">Peso (kg)</Label>
            <Input id="weight" type="number" placeholder="Ex: 80" value={weight} onChange={e => setWeight(e.target.value)} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="targetWeight">Peso desejado (kg)</Label>
            <Input id="targetWeight" type="number" placeholder="Ex: 70" value={targetWeight} onChange={e => setTargetWeight(e.target.value)} />
        </div>
        <CardDescription className="text-xs pt-2">
            Seus dados pessoais estão seguros conosco. Não enviamos spam nem compartilhamos e-mails com terceiros.
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center mt-4">
        <Button onClick={handleContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
