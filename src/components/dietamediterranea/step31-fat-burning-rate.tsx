'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';

const RateBar = () => {
    return (
        <div className="w-full">
            <div className="relative w-full h-4 bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 rounded-full">
                <div style={{ left: `18%` }} className="absolute top-[-8px] transform -translate-x-1/2 flex flex-col items-center">
                    <span className="text-xs font-bold">VOCÊ - 18%</span>
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-primary"></div>
                </div>
            </div>
            <div className="flex justify-between text-xs mt-1">
                <span>Lenta</span>
                <span>Média</span>
                <span>Rápida</span>
            </div>
        </div>
    );
};

const Comparison = () => (
    <div className="grid grid-cols-2 gap-4 mt-6 text-left">
        <div className="p-4 border rounded-lg">
            <h4 className="font-bold mb-2">ATUALMENTE</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />Taxa de queima de gordura lenta</li>
                <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />Ganho de peso fácil</li>
                <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />Aumento da fome e dos desejos de doce</li>
                <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />Problemas digestivos</li>
                <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />Problemas de sono e fadiga</li>
            </ul>
        </div>
        <div className="p-4 border rounded-lg bg-green-50 border-green-200">
            <h4 className="font-bold mb-2 text-green-800">COM A DIETA MEDITERRÂNEA</h4>
            <ul className="space-y-1 text-sm text-green-700">
                <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />Taxa de queima de gordura rápida</li>
                <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />Você vai perder peso rapidamente</li>
                <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />Melhor controle do apetite</li>
                <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />Intestino saudável</li>
                <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />Energia alta</li>
            </ul>
        </div>
    </div>
);


type Props = {
  onContinue: () => void;
};

export function Step31_FatBurningRate({ onContinue }: Props) {
  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">A sua taxa de queima de gordura é: Lenta</CardTitle>
        <CardDescription>Uma taxa de queima de gordura lenta torna mais difícil para perder peso e mantê-lo</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
            <h3 className="font-semibold mb-2">Taxa de Queima de Gordura</h3>
            <RateBar />
        </div>
        <Comparison />
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
