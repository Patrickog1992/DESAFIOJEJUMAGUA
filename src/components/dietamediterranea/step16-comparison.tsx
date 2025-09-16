'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
  onContinue: () => void;
};

const otherDietsData = [
  { name: 'Semana 1', peso: 0 },
  { name: 'Semana 2', peso: -0.2 },
  { name: 'Semana 3', peso: -0.3 },
  { name: 'Semana 4', peso: -0.5 },
];

const ourPlanData = [
  { name: 'Semana 1', peso: 0 },
  { name: 'Semana 2', peso: -1.5 },
  { name: 'Semana 3', peso: -2.5 },
  { name: 'Semana 4', peso: -4 },
];

export function Step16_Comparison({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">ESSE É O ÚLTIMO PLANO QUE VOCÊ VAI FAZER</CardTitle>
        <CardDescription>VAMOS MUDAR A SUA VIDA! Perca três vezes mais peso com o nosso plano personalizado em comparação com outros planos de refeições</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-bold text-lg mb-4">Taxa de perda de peso</p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="peso" data={otherDietsData} stroke="#ef4444" name="Outras dietas" strokeWidth={2} />
              <Line type="monotone" dataKey="peso" data={ourPlanData} stroke="#22c55e" name="Dieta Mediterrânea (3x 🎉)" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-muted-foreground mt-2">Com base num estudo de 4 semanas com utilizadores da Dieta Mediterrânea</p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
