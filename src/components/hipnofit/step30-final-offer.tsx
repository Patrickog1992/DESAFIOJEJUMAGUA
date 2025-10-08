'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Lock } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Autoplay from "embla-carousel-autoplay";
import React, { useState, useEffect, useRef } from 'react';
import type { HipnoFitQuizData } from '@/app/hipnofit/page';

type Props = {
  data: Partial<HipnoFitQuizData>;
};

const checkoutUrl = 'https://pay.kirvano.com/15697d4d-6002-4797-a350-f70c9f4cdf91'; 

const testimonialsImages = [
    "https://i.imgur.com/ipOh27y.jpg",
    "https://i.imgur.com/AJCfcXk.jpg",
    "https://i.imgur.com/BTYdqvQ.jpg",
    "https://i.imgur.com/TAUXKtX.jpg",
    "https://i.imgur.com/e64XRjq.jpg",
    "https://i.imgur.com/S5Aj7OJ.jpg",
];

const writtenTestimonials = [
    { name: 'Carla S.', comment: 'Perdi 8kg em um mês sem sentir que estava de dieta. A hipnose me ajudou a controlar a ansiedade e a comer com mais consciência. Incrível!' },
    { name: 'Marcos P.', comment: 'Finalmente entendi meus gatilhos emocionais com a comida. O HipnoFit foi um divisor de águas. Recomendo demais!' },
    { name: 'Juliana A.', comment: 'As sessões são tão relaxantes e os resultados apareceram muito rápido. Minha digestão melhorou e estou com muito mais energia.'},
];

const faqItems = [
    { question: "A hipnoterapia é segura?", answer: "Sim, a hipnoterapia é um processo completamente seguro e natural. Você permanece no controle o tempo todo, em um estado de relaxamento focado, semelhante à meditação." },
    { question: "Vou me lembrar das sessões?", answer: "Sim. Ao contrário dos mitos populares, você estará consciente e se lembrará de tudo o que aconteceu durante a sessão." },
    { question: "Quanto tempo até ver os resultados?", answer: "Muitos usuários relatam sentir uma mudança em sua mentalidade e hábitos após as primeiras sessões. Resultados visíveis na balança geralmente aparecem nos primeiros 7 dias e se intensificam nas semanas seguintes." },
    { question: "E se não funcionar para mim?", answer: "Oferecemos uma garantia de satisfação de 7 dias. Se você não estiver satisfeito com o programa por qualquer motivo, basta nos contatar para um reembolso total." },
];

export function Step30_FinalOffer({ data }: Props) {
    const imageCarouselPlugin = React.useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));
    const commentCarouselPlugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
    const [timeLeft, setTimeLeft] = useState(15 * 60);

    useEffect(() => {
        if (timeLeft === 0) return;
    
        const timerId = setInterval(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
    
        return () => clearInterval(timerId);
      }, [timeLeft]);
    
      const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
      };

    return (
        <div className="space-y-8 font-body overflow-x-hidden">
            <div className="bg-red-600 text-white text-center p-3 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold">VOCÊ ACABA DE GANHAR 60% DE DESCONTO VÁLIDO SOMENTE EM: <span className="text-yellow-300">{formatTime(timeLeft)}</span></h2>
            </div>
            
            <Card className="shadow-lg border-none bg-transparent text-center">
                <CardContent className="p-0 space-y-4">
                    <div className="grid grid-cols-2 gap-4 items-start">
                        <div>
                            <h3 className="font-bold text-lg mb-2">Antes do HIPNOFIT</h3>
                            <Image src="https://i.imgur.com/2vjQaB0.jpeg" alt="Antes do HipnoFit" width={300} height={300} className="mx-auto rounded-lg" />
                            <ul className="text-sm text-left mt-2 space-y-1 list-disc list-inside">
                                <li>Ela vivia no efeito sanfona e sem motivação</li>
                                <li>Ansiedade e compulsão atrapalhavam todo o processo</li>
                                <li>Mente confusa, corpo fora de controle</li>
                                <li>Comia por emoção, não por fome</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Depois do HIPNOFIT</h3>
                            <Image src="https://i.imgur.com/TYvuBmJ.jpeg" alt="Depois do HipnoFit" width={300} height={300} className="mx-auto rounded-lg" />
                            <ul className="text-sm text-left mt-2 space-y-1 list-disc list-inside">
                                <li>Peso se mantém estável sinta-se no controle</li>
                                <li>Reprograme a mente e o corpo acompanha</li>
                                <li>Coma com consciência, não com ansiedade</li>
                                <li>A mente não tem mais compulsão por doce</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="font-headline">Você ainda tem dúvidas ?<br/>Escute um pequeno exemplo !</CardTitle>
                    <CardDescription>Aperte o play e escute esse aúdio em um lugar tranquilo</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                   <iframe src="https://whyp.it/embeds/track/315732?token=BS023" width="100%" height="80" scrolling="no" frameBorder="0" loading="lazy"></iframe>
                </CardContent>
            </Card>


            <Card className="shadow-2xl border-4 border-green-500">
                <CardHeader className="text-center bg-gray-50">
                    <CardTitle className="text-2xl font-bold font-headline">O QUE VOCÊ VAI RECEBER</CardTitle>
                    <CardDescription className="text-lg text-green-600 font-semibold">Oferta especial personalizada</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    <div>
                        <h3 className="font-bold text-lg">Método HipnoFit – Acesso Vitalício</h3>
                        <ul className="list-none space-y-2 mt-2">
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Sessões de hipnoterapia transformadora</li>
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Reprogramação dos gatilhos emocionais</li>
                            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Resultados duradouros e sustentáveis</li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-bold text-lg">Bônus Exclusivos (por tempo limitado):</h3>
                        <ul className="list-none space-y-2 mt-2">
                            <li className="flex items-center gap-2">🎁 E-book “Alimentação Consciente”</li>
                            <li className="flex items-center gap-2">🎁 Áudio Hipnótico Extra</li>
                            <li className="flex items-center gap-2">🎁 Suporte em Grupo VIP</li>
                        </ul>
                    </div>
                    <div className="text-center pt-4">
                        <p className="text-xl text-gray-500">
                            de <span className="line-through">R$ 197,00</span> por apenas
                        </p>
                        <p className="text-5xl font-extrabold text-green-600 my-2">R$ 47,00</p>
                         <p className="font-semibold">Pagamento Único</p>
                         <a href={checkoutUrl} className="block w-full mt-4">
                            <Button size="lg" className="w-full text-lg h-14 bg-green-600 hover:bg-green-700 text-white animate-pulse-strong">
                                QUERO MEU PLANO AGORA
                            </Button>
                        </a>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-center font-headline">ALGUMAS TRANSFORMAÇÕES COM A HIPNOFIT</CardTitle>
                </CardHeader>
                <CardContent>
                    <Carousel plugins={[imageCarouselPlugin.current]} className="w-full" opts={{ loop: true, align: "start" }}>
                        <CarouselContent>
                            {testimonialsImages.map((src, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <Image src={src} alt={`Transformação ${index + 1}`} width={300} height={400} className="rounded-lg object-cover w-full h-80" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </CardContent>
            </Card>
            
             <Card>
                <CardHeader>
                    <CardTitle className="text-center font-headline">E mais alguns comentários...</CardTitle>
                </CardHeader>
                <CardContent>
                    <Carousel plugins={[commentCarouselPlugin.current]} className="w-full" opts={{ loop: true, align: "start" }}>
                        <CarouselContent>
                            {writtenTestimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                                    <div className="bg-white p-4 rounded-lg shadow h-full">
                                        <p className="italic">"{testimonial.comment}"</p>
                                        <p className="font-bold text-right mt-2">- {testimonial.name}</p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </CardContent>
            </Card>

            <Card>
                 <CardHeader>
                    <CardTitle className="text-center font-headline">Como funciona?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p>1. Encontre um lugar tranquilo onde você possa relaxar</p>
                    <p>2. Acesse a gravação de hipnoterapia na nossa área de membros</p>
                    <p>3. Ouça uma sessão de 20 minutos por dia</p>
                    <p>4. Comece a aproveitar os primeiros resultados em apenas uma semana</p>
                </CardContent>
                <div className="flex justify-center p-6">
                    <a href={checkoutUrl} className="block w-full max-w-md">
                        <Button size="lg" className="w-full text-lg h-12 bg-green-600 hover:bg-green-700 text-white animate-pulse-strong">QUERO O HIPNOFIT</Button>
                    </a>
                </div>
            </Card>

            <Card>
                <CardContent className="p-6 text-center space-y-4">
                    <div className="flex justify-center items-center gap-2">
                        <Lock className="h-8 w-8 text-gray-500" />
                        <h3 className="text-xl font-bold font-headline">GARANTIA DE 7 DIAS</h3>
                    </div>
                    <p>Sua satisfação é nossa prioridade. Se por qualquer motivo você não estiver 100% satisfeito com o Método HipnoFit nos primeiros 7 dias, basta nos enviar um e-mail. Devolveremos todo o seu dinheiro, sem perguntas.</p>
                </CardContent>
            </Card>
            <Card>
                 <CardHeader>
                    <CardTitle className="text-center font-headline">Perguntas Frequentes</CardTitle>
                </CardHeader>
                <CardContent>
                     <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>

                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>

        </div>
    );
}
