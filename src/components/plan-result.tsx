'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { format, addMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Clock, Scale, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type PlanResultProps = {
  name: string;
  currentWeight: number;
  targetWeight: number;
  height: number;
  walkingTime: string;
  waterIntake: string;
};

const benefits = [
  'Perde peso depressa',
  'Plano de refeições adaptado às tuas necessidades e perfil de perda de peso',
  'Lista de compras inteligente para compras práticas de alimentos',
  'Alcança o corpo que pretende de forma rápida, segura e sem comprimidos',
  'Sem dietas restritivas, come o que gosta',
  'Desfrute de uma vida mais saudável e equilibrada',
  'Sem precisar de academia e exercícios pesados com peso',
  'Aprende novos hábitos alimentares e vai controlar o desejo por comida gordurosa toda hora',
];

const testimonialImages = [
  'https://i.imgur.com/aY0P64q.jpg',
  'https://i.imgur.com/yyU45hE.jpg',
  'https://i.imgur.com/qb8KJZq.jpg',
];

export function PlanResult({
  name,
  currentWeight,
  targetWeight,
  height,
  walkingTime,
  waterIntake,
}: PlanResultProps) {
  const [isClient, setIsClient] = useState(false);
  const [imc, setImc] = useState<number>(0);
  const [imcStatus, setImcStatus] = useState<string>('');
  const [imcPosition, setImcPosition] = useState(0);

  useEffect(() => {
    setIsClient(true);
    if (height > 0 && currentWeight > 0) {
      const heightInMeters = height / 100;
      const calculatedImc = currentWeight / (heightInMeters * heightInMeters);
      setImc(calculatedImc);

      if (calculatedImc < 18.5) {
        setImcStatus('Abaixo do peso');
        setImcPosition(12.5);
      } else if (calculatedImc < 25) {
        setImcStatus('Normal');
        setImcPosition(37.5);
      } else if (calculatedImc < 30) {
        setImcStatus('Excesso de peso');
        setImcPosition(62.5);
      } else {
        setImcStatus('Obesidade');
        setImcPosition(87.5);
      }
    }
  }, [height, currentWeight]);

  const chartData = [
    {
      date: 'Hoje',
      weight: currentWeight,
    },
    {
      date: format(addMonths(new Date(), 1), 'dd/MM/yyyy', { locale: ptBR }),
      weight: targetWeight,
    },
  ];
  
  const getWaterIntakeInLiters = () => {
    switch (waterIntake) {
      case '1 copo ou menos': return 1.0;
      case '2–3 copos': return 1.5;
      case '4–5 copos': return 2.0;
      case '6–7 copos': return 2.5;
      case '8+ copos': return 3.0;
      default: return 1.0;
    }
  };

  return (
    <div className="bg-muted/20">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-primary tracking-tight">
            ISTO É INCRÍVEL
          </h1>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            <span className="font-bold">{name}</span>, com base nos seus
            resultados, você pode perder <strong>11 kg no 1.º mês</strong>.
            Alcança o seu objetivo com um plano personalizado, fácil de seguir e
            saudável criado só para você.
          </p>
        </header>

        {isClient && currentWeight > 0 && targetWeight > 0 && (
           <Card className="shadow-lg">
            <CardContent className="p-4 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
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
                  />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ r: 6 }}
                  >
                    <LabelList
                      dataKey="weight"
                      position="top"
                      offset={10}
                      formatter={(value: number) => `${value}kg`}
                    />
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-md flex flex-col items-center justify-center text-center p-6">
            <Clock className="h-12 w-12 text-primary mb-3" />
            <CardTitle className="text-lg">
              O esperado é perder peso 89% mais rápido que o nosso utilizador médio
            </CardTitle>
            <CardDescription>(com base nas tuas respostas)</CardDescription>
          </Card>
          <Card className="shadow-md flex flex-col items-center justify-center text-center p-6">
            <Scale className="h-12 w-12 text-primary mb-3" />
            <CardTitle className="text-lg">
              Pode perder 5 kg durante a primeira semana
            </CardTitle>
          </Card>
        </div>

        <div className="text-center">
             <Button size="lg" className="w-full max-w-md mx-auto text-lg h-12">
                QUERO MEU PLANO PERSONALIZADO
              </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Resumo pessoal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Peso Atual:</span>
                <span className="font-bold">{currentWeight} kg</span>
              </div>
              <div className="flex justify-between">
                <span>Objetivo de Peso:</span>
                <span className="font-bold">{targetWeight} kg</span>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>IMC: {imc.toFixed(1)}</span>
                  <span className="font-bold">{imcStatus}</span>
                </div>
                <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1/4 bg-blue-400"></div>
                  <div className="absolute top-0 left-1/4 h-full w-1/4 bg-green-400"></div>
                  <div className="absolute top-0 left-2/4 h-full w-1/4 bg-yellow-400"></div>
                  <div className="absolute top-0 left-3/4 h-full w-1/4 bg-red-400"></div>
                  <div
                    className="absolute top-0 h-full w-1 rounded-full bg-black transition-all duration-500"
                    style={{ left: `calc(${imcPosition}% - 2px)` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>Abaixo</span>
                  <span>Normal</span>
                  <span>Excesso</span>
                  <span>Obesidade</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Sugestões diárias</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                 <span className="text-sm">Calorias:</span>
                 <span className="font-bold text-lg">1600-1400</span>
              </div>
               <div className="flex justify-between items-center">
                 <span className="text-sm">Caminhar:</span>
                 <span className="font-bold text-lg">{walkingTime}</span>
              </div>
               <div className="flex justify-between items-center">
                 <span className="text-sm">Atividade que gosta:</span>
                 <span className="font-bold text-lg">30 min</span>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-sm">Consumo mínimo diário de água:</span>
                 <span className="font-bold text-lg">{getWaterIntakeInLiters().toFixed(1)} litros</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-center">
              O que você vai receber com o Desafio do Jejum de Água
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <div className="text-center">
             <Button size="lg" className="w-full max-w-md mx-auto text-lg h-12">
                OBTER O DESAFIO DO JEJUM DE ÁGUA
              </Button>
        </div>


        <Card className="shadow-md">
          <CardContent className="p-4">
            <p className="text-center font-semibold mb-4">
              Ajudamos mais de 412.876 pessoas com corpos como o teu a atingir
              os seus objetivos de perda de peso
            </p>
            <Carousel
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 3000 })]}
            >
              <CarouselContent>
                {testimonialImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={src}
                      alt={`Depoimento ${index + 1}`}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </CardContent>
        </Card>
        
        <Card className="shadow-md overflow-hidden">
          <CardContent className="p-6 md:flex md:items-center md:gap-6">
            <div className="mb-4 md:mb-0 md:shrink-0">
              <Image src="https://i.imgur.com/52gwXD4.png" alt="Nutri. Amanda Nunes" width={150} height={150} className="rounded-full mx-auto border-4 border-primary" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold">Nutri. Amanda Nunes</h3>
              <p className="mt-2">
               Transforme a sua saúde com o poder do jejum intermitente. Perder peso pode ser um desafio, mas com a orientação certa é possível alcançar resultados duradouros. O nosso programa certificado já ajudou mais de 500.000 pessoas a transformar a sua relação com a alimentação através do jejum intermitente. Com um plano personalizado, vai aprender a controlar os seus hábitos alimentares e a conquistar resultados incríveis.
              </p>
              <ul className="mt-4 space-y-2 text-left">
                <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /> Regular a pressão arterial</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /> Melhorar os níveis de colesterol</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /> Aumentar a sensibilidade à insulina</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
           <p className="text-lg">
             Lembre-se: pequenas escolhas diárias podem gerar grandes mudanças ao longo do tempo. O seu objetivo está mais perto do que imagina e nós estamos aqui para o ajudar a alcançá-lo.
           </p>
            <p className="text-lg font-bold">
              Estamos aqui para garantir que atinges o teu objetivo de {targetWeight} kg!
            </p>
            <div className="flex justify-center">
                <Button size="lg" className="w-full max-w-md text-lg h-12">
                  QUERO O MEU PLANO DE JEJUM INTERMITENTE
                </Button>
            </div>
        </div>

      </div>
    </div>
  );
}
