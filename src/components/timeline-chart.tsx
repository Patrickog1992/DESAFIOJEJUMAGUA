'use client';

import { useState, useMemo } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { format, addDays, addMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type Pace = 'accelerated' | 'normal' | 'slow';

type TimelineChartProps = {
  name: string;
  currentWeight: number;
  targetWeight: number;
  onContinue: () => void;
};

export function TimelineChart({
  name,
  currentWeight,
  targetWeight,
  onContinue,
}: TimelineChartProps) {
  const [pace, setPace] = useState<Pace>('normal');

  const { chartData, endDate, weeklyLoss } = useMemo(() => {
    const today = new Date();
    let endDate: Date;
    let totalDays: number;

    switch (pace) {
      case 'accelerated':
        endDate = addDays(today, 15);
        totalDays = 15;
        break;
      case 'slow':
        endDate = addMonths(today, 2);
        totalDays = (endDate.getTime() - today.getTime()) / (1000 * 3600 * 24);
        break;
      default: // normal
        endDate = addMonths(today, 1);
        totalDays = (endDate.getTime() - today.getTime()) / (1000 * 3600 * 24);
        break;
    }

    const totalWeightLoss = currentWeight - targetWeight;
    const dailyLoss = totalWeightLoss / totalDays;
    const weeklyLoss = (dailyLoss * 7).toFixed(1);

    const data = [
      {
        date: 'Hoje',
        weight: currentWeight,
      },
      {
        date: format(endDate, 'dd/MM/yyyy', { locale: ptBR }),
        weight: targetWeight,
      },
    ];

    return { chartData: data, endDate, weeklyLoss };
  }, [pace, currentWeight, targetWeight]);

  if (!currentWeight || !targetWeight) {
    return (
      <Card className="w-full max-w-3xl mx-auto shadow-lg text-center">
        <CardHeader>
          <CardTitle>Dados insuficientes</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Não foi possível carregar os dados de peso. Por favor, volte e
            preencha as etapas anteriores.
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => window.history.back()}>Voltar</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-headline">
          {name}, aqui está a tua linha temporal de perda de peso prevista.
        </CardTitle>
        <CardDescription className="text-base pt-2">
          Ajusta o teu ritmo abaixo para ver se podes atingir o teu objetivo
          ainda mais rápido! 😉
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-center mb-4">
            O teu progresso previsto
          </h4>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis
                  domain={[targetWeight - 5, currentWeight + 5]}
                  tick={{ fontSize: 12 }}
                  label={{
                    value: 'Peso (kg)',
                    angle: -90,
                    position: 'insideLeft',
                    style: { textAnchor: 'middle', fontSize: 14 },
                  }}
                />
                <Tooltip
                  formatter={(value) => [`${value} kg`, 'Peso']}
                  labelStyle={{ fontWeight: 'bold' }}
                />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="text-center bg-accent/50 p-4 rounded-lg">
          <p className="text-lg">
            Para atingir o seu objetivo em{' '}
            <strong className="text-primary">
              {format(endDate, 'dd/MM/yyyy')}
            </strong>
            , você precisa perder cerca de{' '}
            <strong className="text-primary">{weeklyLoss} kg</strong> por
            semana.
          </p>
        </div>

        <div>
          <RadioGroup
            value={pace}
            onValueChange={(value: string) => setPace(value as Pace)}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { value: 'slow', label: 'Ritmo Lento' },
              { value: 'normal', label: 'Ritmo Normal' },
              { value: 'accelerated', label: 'Ritmo Acelerado' },
            ].map(({ value, label }) => (
              <Label
                key={value}
                htmlFor={value}
                className="rounded-lg border-2 p-4 cursor-pointer transition-all has-[:checked]:ring-2 has-[:checked]:ring-primary has-[:checked]:border-primary text-center font-semibold"
              >
                <RadioGroupItem value={value} id={value} className="sr-only" />
                {label}
              </Label>
            ))}
          </RadioGroup>
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
