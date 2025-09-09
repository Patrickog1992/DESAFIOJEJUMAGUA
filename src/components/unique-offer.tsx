
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { format, addMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Check, Lock, Heart, ThumbsUp } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

type UniqueOfferProps = {
  name: string;
  currentWeight: number;
  targetWeight: number;
  height: number;
  onContinue: () => void;
};

const benefits = [
  'Plano de perda de peso à tua medida para atingires os teus objetivos da forma mais rápida e fácil segundo o teu peso, saúde e estilo de vida',
  'Mais de 600 receitas deliciosas, nutritivas e saudáveis para todas as tuas refeições diárias',
  'Temporizador de jejum intermitente para seguires os teus períodos de jejum e alimentação',
  'Muitas dicas e truques para perda de peso',
  'Orientação exclusiva e apoio ao longo da tua jornada de perda de peso pelos nossos nutricionistas certificados para garantir os melhores resultados',
];

const testimonialImages = [
  'https://i.imgur.com/R6HKKtp.jpeg',
  'https://i.imgur.com/Cdj7dbg.jpeg',
  'https://i.imgur.com/yBhptzd.jpeg',
  'https://i.imgur.com/T9AoMhE.jpeg',
  'https://i.imgur.com/a3Jcu1Z.jpeg',
  'https://i.imgur.com/YOMEZLJ.jpeg',
  'https://i.imgur.com/fogjsiC.jpeg',
  'https://i.imgur.com/Kd5Dboy.jpeg',
];

const writtenTestimonials = [
  {
    name: 'Maria',
    imageUrl: 'https://i.imgur.com/Sza1ZfT.png',
    comment: 'Estou amando os resultados! Em poucas semanas já sinto uma diferença enorme na minha energia e na balança. Super recomendo!',
    likes: 128,
    hearts: 45,
  },
  {
    name: 'Marta',
    imageUrl: 'https://i.imgur.com/NVXnmUf.jpg',
    comment: 'Nunca pensei que seria tão fácil seguir um plano. As receitas são deliciosas e o jejum é mais simples do que eu imaginava. Já perdi 6kg!',
    likes: 97,
    hearts: 32,
  },
  {
    name: 'Joelma',
    imageUrl: 'https://i.imgur.com/SPsVs9s.jpg',
    comment: 'O melhor investimento que fiz pela minha saúde. O acompanhamento dos nutricionistas faz toda a diferença!',
    likes: 215,
    hearts: 88,
  },
  {
    name: 'Geraldo',
    imageUrl: 'https://i.imgur.com/pN0xdAe.jpg',
    comment: 'Finalmente um plano que se encaixa na minha rotina corrida. Os resultados apareceram muito rápido, estou muito satisfeito.',
    likes: 76,
    hearts: 21,
  },
  {
    name: 'Pedro',
    imageUrl: 'https://i.imgur.com/W0KgtQV.png',
    comment: 'Recomendo a todos! Além de perder peso, aprendi a me alimentar melhor e ter um estilo de vida mais saudável.',
    likes: 153,
    hearts: 64,
  },
  {
    name: 'Junior',
    imageUrl: 'https://i.imgur.com/J4omSDG.jpg',
    comment: 'Funciona mesmo! Já tinha tentado de tudo, mas só com esse desafio consegui atingir meu objetivo.',
    likes: 112,
    hearts: 41,
  },
];


export function UniqueOffer({
  currentWeight,
  targetWeight,
  height,
  onContinue,
}: UniqueOfferProps) {
  const [isClient, setIsClient] = useState(false);
  const [today, setToday] = useState<Date | null>(null);
  const [oneMonthLater, setOneMonthLater] = useState<Date | null>(null);
  const [currentImc, setCurrentImc] = useState<number | null>(null);
  const [targetImc, setTargetImc] = useState<number | null>(null);

  useEffect(() => {
    setIsClient(true);
    const now = new Date();
    setToday(now);
    setOneMonthLater(addMonths(now, 1));

    if (height > 0) {
      const heightInMeters = height / 100;
      if (currentWeight > 0) {
        setCurrentImc(currentWeight / (heightInMeters * heightInMeters));
      }
      if (targetWeight > 0) {
        setTargetImc(targetWeight / (heightInMeters * heightInMeters));
      }
    }
  }, [height, currentWeight, targetWeight]);

  return (
    <div className="bg-muted/20">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-red-600 tracking-tight">
            ESSA É UMA OFERTA ÚNICA, NÃO PERCA!
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Today Card */}
          <Card className="shadow-lg border-red-500 border-2 overflow-hidden">
            <CardHeader>
              <CardTitle>
                Você hoje ({today ? format(today, 'dd/MM/yyyy', { locale: ptBR }) : <Skeleton className="h-6 w-24 inline-block" />})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src="https://i.imgur.com/V6997ol.png"
                alt="Você hoje"
                width={300}
                height={300}
                className="mx-auto"
              />
              <div className="flex justify-between">
                <span>Peso atual:</span>
                <span className="font-bold">{currentWeight} kg</span>
              </div>
              <div className="flex justify-between">
                <span>IMC atual:</span>
                <span className="font-bold">{currentImc?.toFixed(2) ?? '...'}</span>
              </div>
              <div>
                <p className="font-semibold mb-2">Eficiência metabólica</p>
                <Progress value={15} className="[&>div]:bg-red-500" />
              </div>
            </CardContent>
          </Card>
          {/* One Month Later Card */}
          <Card className="shadow-lg border-green-500 border-2 overflow-hidden">
            <CardHeader>
              <CardTitle>
                Você em ({oneMonthLater ? format(oneMonthLater, 'dd/MM/yyyy', { locale: ptBR }) : <Skeleton className="h-6 w-24 inline-block" />})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <Image
                src="https://i.imgur.com/kkc70lF.png"
                alt="Você em um mês"
                width={300}
                height={300}
                className="mx-auto"
              />
              <div className="flex justify-between">
                <span>Peso desejado:</span>
                <span className="font-bold">{targetWeight} kg</span>
              </div>
              <div className="flex justify-between">
                <span>IMC projetado:</span>
                <span className="font-bold">{targetImc?.toFixed(2) ?? '...'}</span>
              </div>
              <div>
                <p className="font-semibold mb-2">Eficiência metabólica</p>
                <Progress value={100} className="[&>div]:bg-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-md text-center">
          <CardHeader>
            <CardTitle className="text-2xl">
              Tenha o seu desafio do Jejum da Água
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              size="lg"
              className="w-full max-w-md mx-auto text-lg h-12"
              onClick={onContinue}
            >
              QUERO O MEU PLANO
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-md bg-transparent border-none text-center">
          <CardContent className="p-4">
            <Image
              src="https://i.imgur.com/0XA7W5K.png"
              alt="Garantia de 30 dias"
              width={400}
              height={100}
              className="mx-auto object-contain"
            />
            <p className="mt-2 text-sm font-semibold text-muted-foreground">
              Garantia de devolução do dinheiro em 30 dias
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl">O que está incluído?</CardTitle>
            <CardDescription className="text-center text-base">
              A combinação perfeita de refeições saudáveis, seguimento de jejum intermitente e ferramentas de apoio para resultados mais rápidos e duradouros.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Image
              src="https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/SUWnMhxrED-1068.webp"
              alt="Plano de refeições saudáveis"
              width={1068}
              height={600}
              className="rounded-lg object-cover w-full"
            />
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
          <CardFooter className="justify-center">
             <Button size="lg" className="w-full max-w-md mx-auto text-lg h-12" onClick={onContinue}>
                Obter o meu plano
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Vê mudanças reais e visíveis após a primeira semana</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <Carousel
              opts={{ loop: true, align: "start" }}
              plugins={[Autoplay({ delay: 3000 })]}
              className="w-full"
            >
              <CarouselContent>
                {testimonialImages.map((src, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <div className="p-1">
                      <Image
                        src={src}
                        alt={`Depoimento ${index + 1}`}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full h-80"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Mais pessoas que alcançaram seus objetivos</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {writtenTestimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-4 rounded-lg shadow-sm border space-y-3">
                <div className="flex items-center gap-3">
                  <Image src={testimonial.imageUrl} alt={testimonial.name} width={40} height={40} className="rounded-full" />
                  <p className="font-bold">{testimonial.name}</p>
                </div>
                <p className="text-foreground/90">{testimonial.comment}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <button className="p-1 rounded-full bg-blue-500 text-white"><ThumbsUp size={12} /></button>
                    <span>{testimonial.likes}</span>
                  </div>
                   <div className="flex items-center gap-1">
                    <button className="p-1 rounded-full bg-red-500 text-white"><Heart size={12} /></button>
                    <span>{testimonial.hearts}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
