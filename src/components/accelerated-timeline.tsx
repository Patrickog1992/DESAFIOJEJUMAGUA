'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import { format, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Skeleton } from './ui/skeleton';

type AcceleratedTimelineProps = {
  name: string;
  currentWeight: number;
  targetWeight: number;
  onContinue: () => void;
};

type ChartInfo = {
  chartData: { date: string; weight: number }[];
  endDate: Date;
};

export function AcceleratedTimeline({
  name,
  currentWeight,
  targetWeight,
  onContinue,
}: AcceleratedTimelineProps) {
  const [chartInfo, setChartInfo] = useState<ChartInfo | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const today = new Date();
      // Fast-paced timeline, e.g., 21 days
      const endDate = addDays(today, 21);

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

      setChartInfo({ chartData: data, endDate });
    }
  }, [currentWeight, targetWeight, isClient]);

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
          O teu progresso será mais rápido do que esperava! 😲
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-center mb-4">
            O teu progresso previsto
          </h4>
          <div className="h-64 w-full">
            {!isClient || !chartInfo ? (
              <div className="flex flex-col space-y-4">
                <Skeleton className="h-[190px] w-full" />
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-4 w-12" />
                </div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartInfo.chartData}
                  margin={{ top: 20, right: 20, left: -10, bottom: 5 }}
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
                    formatter={(value: number) => [`${value} kg`, 'Peso']}
                    labelStyle={{ fontWeight: 'bold' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ r: 6 }}
                    activeDot={{ r: 8 }}
                  >
                    <LabelList
                      dataKey="weight"
                      position="top"
                      offset={10}
                      className="font-bold"
                      formatter={(value: number) => `${value}kg`}
                    />
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        <div className="text-center bg-accent/50 p-4 rounded-lg">
          <p className="text-lg">
            Você saiu na frente, vamos te ajudar a atingir seu objetivo de forma
            rápida e segura
          </p>
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
