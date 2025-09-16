'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Check } from 'lucide-react';
import { useMemo, useState, useEffect, useRef } from 'react';
import Autoplay from "embla-carousel-autoplay";

type QuizData = {
  gender?: 'male' | 'female';
  goal?: string;
  height?: number;
  currentWeight?: number;
  targetWeight?: number;
  age?: number;
};

type Props = {
  data: Partial<QuizData>;
};

const features = [
    { title: 'Mais de 500 Receitas Mediterrânicas', description: 'Plano personalizado perfeito para si e que o ajudará a perder peso da forma mais agradável.' },
    { title: 'Mais de 100 Treinos e Exercícios', description: 'Treinos simples, exercícios de ioga, guias de meditação e muito mais para o ajudar a perder peso mais rapidamente e a ver resultados mais cedo.' },
    { title: 'Desafios Motivacionais', description: 'Desafios saudáveis concebidos para o manter consistente e motivado, levando a sua jornada de perda de peso e bem-estar para o próximo nível.' },
    { title: 'Guias de Nutrição e Saúde', description: 'Guias aprofundados sobre nutrição, treinos, estilo de vida saudável e outras dicas úteis escritas pelos melhores especialistas em nutrição, treinadores pessoais e psicólogos.' },
    { title: 'Acompanhamento e visualização do progresso', description: 'Todas as ferramentas no seu bolso para acompanhar e visualizar o seu progresso incrível e atingir os seus objetivos de peso a tempo.' },
]

const testimonialsImages = [
    "https://i.imgur.com/Yd4f0L0.jpg",
    "https://i.imgur.com/3FMNC9a.jpg",
    "https://i.imgur.com/noSDgeA.jpg",
    "https://i.imgur.com/Kd5Dboy.jpg",
    "https://i.imgur.com/YOMEZLJ.jpg",
    "https://i.imgur.com/fogjsiC.jpg",
]

export function Step35_FinalOffer({ data }: Props) {
  const { currentWeight, targetWeight, height, goal, age } = data;
  
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (timeLeft === 0) return;
    const timerId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const { currentImc, currentBodyFat, targetImc, targetBodyFat } = useMemo(() => {
    if (!height || !currentWeight || !targetWeight || !age) return { currentImc: 0, currentBodyFat: 0, targetImc: 0, targetBodyFat: 0 };
    const heightM = height / 100;
    const genderFactor = data.gender === 'male' ? 1 : 0;
    
    const calcImc = (weight: number) => weight / (heightM * heightM);
    const calcBodyFat = (imc: number) => (1.20 * imc) + (0.23 * age) - (10.8 * genderFactor) - 5.4;

    const cImc = calcImc(currentWeight);
    const tImc = calcImc(targetWeight);
    const cBf = calcBodyFat(cImc);
    const tBf = calcBodyFat(tImc);

    return { 
      currentImc: cImc, 
      currentBodyFat: Math.max(0, cBf),
      targetImc: tImc,
      targetBodyFat: Math.max(0, tBf),
    };
  }, [height, currentWeight, targetWeight, age, data.gender]);

  return (
    <div className="space-y-6">
        <Card className="w-full max-w-4xl mx-auto text-center border-red-500 border-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-red-600">VOCÊ GANHOU 60% DE DESCONTO SOMENTE HOJE</CardTitle>
            <p className="font-bold text-lg bg-red-600 text-white rounded-md p-2">
                Oferta acaba em: <span className="text-yellow-300">{formatTime(timeLeft)}</span>
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-2 text-red-600">
                <h3 className="font-bold text-lg">AGORA</h3>
                <Image src="https://i.imgur.com/V6997ol.png" alt="Agora" width={200} height={300} className="mx-auto" />
                <p>Gordura corporal: ~{currentBodyFat.toFixed(1)}%</p>
                <p>IMC: {currentImc.toFixed(1)}</p>
                <p>Metabolismo: Lento</p>
            </div>
            <div className="space-y-2 text-green-600">
                <h3 className="font-bold text-lg">COM A DIETA MEDITERRÂNEA</h3>
                 <Image src="https://i.imgur.com/kkc70lF.png" alt="Depois" width={200} height={300} className="mx-auto" />
                 <p>Gordura corporal: ~{targetBodyFat.toFixed(1)}%</p>
                 <p>IMC: {targetImc.toFixed(1)}</p>
                 <p>Metabolismo: Acelerado</p>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-4">
              <p className="text-lg font-semibold">O seu plano de perda de peso personalizado está pronto!</p>
              <div className="flex justify-around w-full">
                  <p><strong>Objetivo:</strong> {goal}</p>
                  <p><strong>Peso alvo:</strong> <span className="text-green-600 font-bold">{targetWeight} kg</span></p>
              </div>
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 animate-pulse">Obter o meu plano</Button>
          </CardFooter>
        </Card>

        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-center">Destaques do seu plano</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {features.map(feature => (
                    <div key={feature.title} className="flex gap-4 items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mt-1">
                            <Check className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="font-bold">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
             <CardFooter className="flex-col items-center gap-4">
                <div className="text-center">
                    <p className="text-lg text-muted-foreground">
                        De <span className="line-through text-red-600 font-semibold">R$ 97,00</span> por apenas:
                    </p>
                    <p className="text-4xl font-extrabold text-green-600">
                        R$ 37,00
                    </p>
                    <p className="font-semibold">Pagamento Único</p>
                </div>
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 animate-pulse">OBTER O MEU PLANO</Button>
            </CardFooter>
        </Card>
        
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-center">Veja o antes e depois dos nossos clientes</CardTitle>
            </CardHeader>
            <CardContent>
                <Carousel 
                  plugins={[plugin.current]}
                  className="w-full"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}>
                    <CarouselContent>
                        {testimonialsImages.map((src, index) => (
                             <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <Image src={src} alt={`Depoimento ${index + 1}`} width={300} height={400} className="rounded-lg object-contain w-full h-96" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </CardContent>
        </Card>

        <div className="text-center">
            {/* Garantia de 7 dias image should be here */}
            <p className="font-bold">Garantia de 7 dias de devolução do dinheiro</p>
        </div>
    </div>
  );
}
