'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, ThumbsUp, Heart } from 'lucide-react';
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

const checkoutUrl = 'https://pay.kirvano.com/66b7ab2a-9fac-43a3-bdd7-c65522aa5a56';

const features = [
    { title: 'Mais de 500 Receitas Mediterrânicas', description: 'Plano personalizado perfeito para si e que o ajudará a perder peso da forma mais agradável.' },
    { title: 'Mais de 100 Treinos e Exercícios', description: 'Treinos simples, exercícios de ioga, guias de meditação e muito mais para o ajudar a perder peso mais rapidamente e a ver resultados mais cedo.' },
    { title: 'Desafios Motivacionais', description: 'Desafios saudáveis concebidos para o manter consistente e motivado, levando a sua jornada de perda de peso e bem-estar para o próximo nível.' },
    { title: 'Guias de Nutrição e Saúde', description: 'Guias aprofundados sobre nutrição, treinos, estilo de vida saudável e outras dicas úteis escritas pelos melhores especialistas em nutrição, treinadores pessoais e psicólogos.' },
    { title: 'Acompanhamento e visualização do progresso', description: 'Todas as ferramentas no seu bolso para acompanhar e visualizar o seu progresso incrível e atingir os seus objetivos de peso a tempo.' },
]

const testimonialsImages = [
    "https://i.imgur.com/AJCfcXk.jpeg",
    "https://i.imgur.com/BTYdqvQ.jpeg",
    "https://i.imgur.com/TAUXKtX.jpeg",
    "https://i.imgur.com/ipOh27y.jpeg",
    "https://i.imgur.com/S5Aj7OJ.jpeg",
];

const writtenTestimonials = [
    { name: 'Maria', imageUrl: 'https://i.imgur.com/Sza1ZfT.png', comment: 'Estou amando os resultados! Em poucas semanas já sinto uma diferença enorme na minha energia e na balança. Super recomendo!', likes: 128, hearts: 45 },
    { name: 'Marta', imageUrl: 'https://i.imgur.com/NVXnmUf.jpg', comment: 'Nunca pensei que seria tão fácil seguir um plano. As receitas são deliciosas e o jejum é mais simples do que eu imaginava. Já perdi 6kg!', likes: 97, hearts: 32 },
    { name: 'Joelma', imageUrl: 'https://i.imgur.com/SPsVs9s.jpg', comment: 'O melhor investimento que fiz pela minha saúde. O acompanhamento dos nutricionistas faz toda a diferença!', likes: 215, hearts: 88 },
    { name: 'Geraldo', imageUrl: 'https://i.imgur.com/pN0xdAe.jpg', comment: 'Finalmente um plano que se encaixa na minha rotina corrida. Os resultados apareceram muito rápido, estou muito satisfeito.', likes: 76, hearts: 21 },
    { name: 'Pedro', imageUrl: 'https://i.imgur.com/W0KgtQV.png', comment: 'Recomendo a todos! Além de perder peso, aprendi a me alimentar melhor e ter um estilo de vida mais saudável.', likes: 153, hearts: 64 },
    { name: 'Junior', imageUrl: 'https://i.imgur.com/J4omSDG.jpg', comment: 'Funciona mesmo! Já tinha tentado de tudo, mas só com esse desafio consegui atingir meu objetivo.', likes: 112, hearts: 41 },
];

const faqItems = [
    {
        question: "O plano é realmente personalizado?",
        answer: "Sim! O plano é criado com base nas suas respostas ao questionário, levando em conta seus objetivos, tipo de corpo, nível de atividade e preferências alimentares. É um plano feito sob medida para você."
    },
    {
        question: "E se eu não gostar das receitas?",
        answer: "Com mais de 500 receitas disponíveis, você terá muitas opções para escolher. O plano é flexível e permite que você substitua refeições por outras que agradem mais o seu paladar, mantendo o balanço calórico e nutricional."
    },
    {
        question: "Preciso comprar equipamentos de ginástica?",
        answer: "Não! Os mais de 100 treinos e exercícios foram desenvolvidos para serem feitos em casa, utilizando apenas o peso do corpo. Você não precisa de nenhum equipamento especial."
    },
    {
        question: "O pagamento é único?",
        answer: "Sim, o pagamento de R$ 37,00 é único e você terá acesso vitalício a todo o material, incluindo futuras atualizações. Não há mensalidades ou taxas escondidas."
    },
    {
        question: "Como funciona a garantia de reembolso?",
        answer: "Se por qualquer motivo você não estiver satisfeito com o plano nos primeiros 30 dias, basta enviar um e-mail para dietamediterranea@dieta.com.br e nós reembolsaremos 100% do valor pago, sem burocracia."
    }
];

export function Step35_FinalOffer({ data }: Props) {
  const { currentWeight, targetWeight, height, goal, age } = data;
  
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  const imageCarouselPlugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const commentCarouselPlugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
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
    <div className="space-y-6 overflow-x-hidden">
        <Card className="w-full max-w-4xl mx-auto text-center border-red-500 border-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-600">VOCÊ GANHOU 60% DE DESCONTO SOMENTE HOJE</CardTitle>
            <p className="font-bold text-lg bg-red-600 text-white rounded-md p-2">
                Oferta acaba em: <span className="text-yellow-300">{formatTime(timeLeft)}</span>
            </p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-2 text-red-600">
                <h3 className="font-bold text-lg">AGORA</h3>
                <Image src="https://i.imgur.com/V6997ol.png" alt="Agora" width={200} height={300} className="mx-auto" />
                <p className="font-bold text-lg">Gordura corporal: ~{currentBodyFat.toFixed(1)}%</p>
                <p className="font-bold text-lg">IMC: {currentImc.toFixed(1)}</p>
                <p className="font-bold text-lg">Metabolismo: Lento</p>
            </div>
            <div className="space-y-2 text-green-600">
                <h3 className="font-bold text-lg">COM A DIETA MEDITERRÂNEA</h3>
                 <Image src="https://i.imgur.com/kkc70lF.png" alt="Depois" width={200} height={300} className="mx-auto" />
                 <p className="font-bold text-lg">Gordura corporal: ~{targetBodyFat.toFixed(1)}%</p>
                 <p className="font-bold text-lg">IMC: {targetImc.toFixed(1)}</p>
                 <p className="font-bold text-lg">Metabolismo: Acelerado</p>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-4">
              <p className="text-lg font-semibold">O seu plano de perda de peso personalizado está pronto!</p>
              <div className="flex justify-around w-full">
                  <p><strong>Objetivo:</strong> {goal}</p>
                  <p><strong>Peso alvo:</strong> <span className="text-green-600 font-bold">{targetWeight} kg</span></p>
              </div>
              <a href={checkoutUrl} className='w-full'>
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 animate-pulse">Obter o meu plano</Button>
              </a>
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
                <a href={checkoutUrl} className='w-full'>
                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 animate-pulse">OBTER O MEU PLANO</Button>
                </a>
            </CardFooter>
        </Card>
        
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-center">Veja o antes e depois dos nossos clientes</CardTitle>
            </CardHeader>
            <CardContent>
                <Carousel 
                  plugins={[imageCarouselPlugin.current]}
                  className="w-full"
                  opts={{ loop: true }}
                  >
                    <CarouselContent>
                        {testimonialsImages.map((src, index) => (
                             <CarouselItem key={index}>
                                <Image src={src} alt={`Depoimento ${index + 1}`} width={300} height={400} className="rounded-lg object-contain w-full h-96" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </CardContent>
        </Card>

        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-center">Mais pessoas que alcançaram seus objetivos</CardTitle>
            </CardHeader>
            <CardContent>
                <Carousel
                    opts={{ loop: true, align: "start" }}
                    plugins={[commentCarouselPlugin.current]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {writtenTestimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <div className="bg-white p-4 rounded-lg shadow-sm border space-y-3 h-full">
                                        <div className="flex items-center gap-3">
                                            <Image src={testimonial.imageUrl} alt={testimonial.name} width={40} height={40} className="rounded-full" />
                                            <p className="font-bold">{testimonial.name}</p>
                                        </div>
                                        <p className="text-black">{testimonial.comment}</p>
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                                            <div className="flex items-center gap-1">
                                                <div className="p-1 rounded-full bg-blue-500 text-white flex items-center justify-center w-5 h-5">
                                                    <ThumbsUp size={12} />
                                                </div>
                                                <span>{testimonial.likes}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <div className="p-1 rounded-full bg-red-500 text-white flex items-center justify-center w-5 h-5">
                                                    <Heart size={12} />
                                                </div>
                                                <span>{testimonial.hearts}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </CardContent>
        </Card>

        <Card className="w-full max-w-2xl mx-auto text-center">
          <CardContent className="p-6 space-y-4">
            <Image
              src="https://i.imgur.com/0XA7W5K.png"
              alt="Garantia de Reembolso"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="text-xl font-bold">Garantia de reembolso</h3>
            <p className="text-muted-foreground">
              A compra deste material é totalmente sem risco para você.
            </p>
            <p className="text-muted-foreground">
              Se ele não atender às suas expectativas nos primeiros 30 dias após a compra, nós reembolsaremos todo o valor que você pagou, sem fazer perguntas.
            </p>
            <p className="text-muted-foreground">
              Basta enviar um e-mail para o suporte em <span className="font-semibold text-primary">dietamediterranea@dieta.com.br</span>
            </p>
          </CardContent>
        </Card>

        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">Perguntas Frequentes (FAQ)</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="font-semibold text-left">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    </div>
  );
}
