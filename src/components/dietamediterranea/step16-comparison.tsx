'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

type Props = {
  onContinue: () => void;
};

const chartData = [
  {
    name: 'Outras Dietas',
    perda: 1,
    fill: 'hsl(var(--destructive))',
  },
  {
    name: 'Dieta Mediterrânea',
    perda: 3,
    fill: 'hsl(var(--primary))',
  },
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
            <BarChart data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 5 }} barGap={50}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis hide={true} domain={[0, 4]} />
              <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ display: 'none' }} />
              <Bar dataKey="perda" radius={[4, 4, 0, 0]}>
                <LabelList 
                  dataKey="perda" 
                  position="top" 
                  formatter={(value: number) => value > 1 ? '3x 🎉' : '1x'}
                  className="font-bold fill-foreground"
                />
              </Bar>
            </BarChart>
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
