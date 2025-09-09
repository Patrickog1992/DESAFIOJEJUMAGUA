
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
import { Check, Heart, ThumbsUp, Lock } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

type UniqueOfferProps = {
  name: string;
  currentWeight: number;
  targetWeight: number;
  height: number;
  onContinue: () => void;
  gender: 'male' | 'female' | null;
};

const benefits = [
  'Plano de perda de peso à tua medida para atingires os teus objetivos da forma mais rápida e fácil segundo o teu peso, saúde e estilo de vida',
  'Mais de 600 receitas deliciosas, nutritivas e saudáveis para todas as tuas refeições diárias',
  'Temporizador de jejum intermitente para seguires os teus períodos de jejum e alimentação',
  'Muitas dicas e truques para perda de peso',
  'Orientação exclusiva e apoio ao longo da tua jornada de perda de peso pelos nossos nutricionistas certificados para garantir os melhores resultados',
];

const maleImages = {
  today: 'https://i.imgur.com/xOmKpfH.jpg',
  after: 'https://i.imgur.com/TggWJmh.jpg',
  testimonials: [
    'https://i.imgur.com/4fc5yDb.jpeg',
    'https://i.imgur.com/WJJuAy9.jpeg',
    'https://i.imgur.com/QWy9aD8.jpeg',
    'https://i.imgur.com/jJ7RuKK.jpeg',
    'https://i.imgur.com/thHqvuZ.jpeg',
  ],
};

const femaleImages = {
  today: 'https://i.imgur.com/V6997ol.png',
  after: 'https://i.imgur.com/kkc70lF.png',
  testimonials: [
    'https://i.imgur.com/Yd4f0L0.jpg',
    'https://i.imgur.com/3FMNC9a.jpg',
    'https://i.imgur.com/noSDgeA.jpg',
    'https://i.imgur.com/Kd5Dboy.jpg',
    'https://i.imgur.com/YOMEZLJ.jpg',
    'https://i.imgur.com/fogjsiC.jpg',
  ],
};

const writtenTestimonials = [
  {
    name: 'Maria',
    imageUrl: 'https://i.imgur.com/Sza1ZfT.png',
    comment:
      'Estou amando os resultados! Em poucas semanas já sinto uma diferença enorme na minha energia e na balança. Super recomendo!',
    likes: 128,
    hearts: 45,
  },
  {
    name: 'Marta',
    imageUrl: 'https://i.imgur.com/NVXnmUf.jpg',
    comment:
      'Nunca pensei que seria tão fácil seguir um plano. As receitas são deliciosas e o jejum é mais simples do que eu imaginava. Já perdi 6kg!',
    likes: 97,
    hearts: 32,
  },
  {
    name: 'Joelma',
    imageUrl: 'https://i.imgur.com/SPsVs9s.jpg',
    comment:
      'O melhor investimento que fiz pela minha saúde. O acompanhamento dos nutricionistas faz toda a diferença!',
    likes: 215,
    hearts: 88,
  },
  {
    name: 'Geraldo',
    imageUrl: 'https://i.imgur.com/pN0xdAe.jpg',
    comment:
      'Finalmente um plano que se encaixa na minha rotina corrida. Os resultados apareceram muito rápido, estou muito satisfeito.',
    likes: 76,
    hearts: 21,
  },
  {
    name: 'Pedro',
    imageUrl: 'https://i.imgur.com/W0KgtQV.png',
    comment:
      'Recomendo a todos! Além de perder peso, aprendi a me alimentar melhor e ter um estilo de vida mais saudável.',
    likes: 153,
    hearts: 64,
  },
  {
    name: 'Junior',
    imageUrl: 'https://i.imgur.com/J4omSDG.jpg',
    comment:
      'Funciona mesmo! Já tinha tentado de tudo, mas só com esse desafio consegui atingir meu objetivo.',
    likes: 112,
    hearts: 41,
  },
];

const checkoutUrl = 'https://pay.kirvano.com/2d175ad5-fb2b-4da3-92f2-21ac781ca8be';

export function UniqueOffer({
  currentWeight,
  targetWeight,
  height,
  onContinue,
  gender,
}: UniqueOfferProps) {
  const [isClient, setIsClient] = useState(false);
  const [today, setToday] = useState<Date | null>(null);
  const [oneMonthLater, setOneMonthLater] = useState<Date | null>(null);
  const [currentImc, setCurrentImc] = useState<number | null>(null);
  const [targetImc, setTargetImc] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  const images = gender === 'female' ? femaleImages : maleImages;

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

    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [height, currentWeight, targetWeight]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className="bg-muted/20">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        <header className="text-center space-y-4">
          <div className="text-center mb-2">
            <p className="font-bold text-lg bg-red-600 text-white rounded-md p-2">
              60% DESCONTO ativo por{' '}
              <span className="text-yellow-300">
                {isClient ? formatTime(timeLeft) : '10:00'}
              </span>
            </p>
          </div>
          <h1 className="text-3xl font-extrabold text-red-600 tracking-tight">
            ESSA É UMA OFERTA ÚNICA, NÃO PERCA!
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Today Card */}
          <Card className="shadow-lg border-red-500 border-2 overflow-hidden">
            <CardHeader>
              <CardTitle>
                Você hoje (
                {today ? (
                  format(today, 'dd/MM/yyyy', { locale: ptBR })
                ) : (
                  <Skeleton className="h-6 w-24 inline-block" />
                )}
                )
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src={images.today}
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
                <span className="font-bold">
                  {currentImc?.toFixed(2) ?? '...'}
                </span>
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
                Você em (
                {oneMonthLater ? (
                  format(oneMonthLater, 'dd/MM/yyyy', { locale: ptBR })
                ) : (
                  <Skeleton className="h-6 w-24 inline-block" />
                )}
                )
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src={images.after}
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
                <span className="font-bold">
                  {targetImc?.toFixed(2) ?? '...'}
                </span>
              </div>
              <div>
                <p className="font-semibold mb-2">Eficiência metabólica</p>
                <Progress value={100} className="[&>div]:bg-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center my-6">
          <Image
            src="https://i.imgur.com/RwRWGDz.jpeg"
            alt="Oferta Especial"
            width={800}
            height={150}
            className="mx-auto"
          />
        </div>

        <Card className="shadow-lg border-2 border-primary bg-white overflow-hidden text-center">
          <CardHeader className="bg-primary/10 p-4">
            <CardTitle className="text-2xl text-primary font-bold">
              OFERTA EXCLUSIVA
            </CardTitle>
            <CardDescription>
              Tenha acesso completo ao Desafio do Jejum da Água
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div>
              <p className="text-lg text-muted-foreground">
                De{' '}
                <span className="line-through text-red-600 font-semibold">
                  R$99,90
                </span>{' '}
                por apenas:
              </p>
              <p className="text-6xl font-extrabold text-green-600 my-2">
                R$37,00
              </p>
              <p className="text-lg font-semibold">Pagamento Único</p>
              <p className="text-sm text-muted-foreground mt-1">
                Acesso vitalício, sem mensalidades
              </p>
            </div>
            
            <a href={checkoutUrl} className="block w-full max-w-md mx-auto">
              <Button
                size="lg"
                className="w-full text-lg h-14 animate-pulse-strong"
                asChild={false} 
              >
                QUERO APROVEITAR A OFERTA
              </Button>
            </a>


            <div className="text-xs text-muted-foreground flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Pagamento 100% seguro</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md bg-transparent border-none text-center">
          <CardContent className="p-4">
            <Image
              src="https://i.imgur.com/0XA7W5K.png"
              alt="Garantia de 30 dias"
              width={200}
              height={50}
              className="mx-auto object-contain"
            />
            <p className="mt-2 text-sm font-semibold text-muted-foreground">
              Garantia de devolução do dinheiro em 30 dias
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              O que está incluído?
            </CardTitle>
            <CardDescription className="text-center text-base">
              A combinação perfeita de refeições saudáveis, seguimento de jejum
              intermitente e ferramentas de apoio para resultados mais rápidos
              e duradouros.
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
            <a href={checkoutUrl} className="block w-full max-w-md mx-auto">
              <Button
                size="lg"
                className="w-full text-lg h-12 animate-pulse-strong"
                asChild={false} 
              >
                Obter o meu plano
              </Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Vê mudanças reais e visíveis após a primeira semana
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <Carousel
              opts={{ loop: true, align: 'start' }}
              plugins={[Autoplay({ delay: 3000 })]}
              className="w-full"
            >
              <CarouselContent>
                {images.testimonials.map((src, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/2"
                  >
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
            <CardTitle className="text-center text-2xl">
              Mais pessoas que alcançaram seus objetivos
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {writtenTestimonials.map(testimonial => (
              <div
                key={testimonial.name}
                className="bg-white p-4 rounded-lg shadow-sm border space-y-3"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <p className="font-bold">{testimonial.name}</p>
                </div>
                <p className="text-foreground/90">{testimonial.comment}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <button className="p-1 rounded-full bg-blue-500 text-white">
                      <ThumbsUp size={12} />
                    </button>
                    <span>{testimonial.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-1 rounded-full bg-red-500 text-white">
                      <Heart size={12} />
                    </button>
                    <span>{testimonial.hearts}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-md text-center">
          <CardContent className="p-6 space-y-4">
            <p className="text-5xl font-extrabold text-primary">400.000+</p>
            <p className="text-lg text-foreground max-w-md mx-auto">
              Novos utilizadores atingiram o seu objetivo de peso conosco e
              adotaram um estilo de vida mais saudável
            </p>
            <a href={checkoutUrl} className="block w-full max-w-sm mx-auto">
              <Button
                size="lg"
                className="w-full text-lg h-12 animate-pulse-strong"
                asChild={false} 
              >
                Quero o meu plano
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
