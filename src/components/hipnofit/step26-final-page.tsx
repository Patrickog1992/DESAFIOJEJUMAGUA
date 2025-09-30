'use client';

import type { HipnoFitQuizData } from '@/app/hipnofit/page';
import { useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check, Lock } from 'lucide-react';
import { format, addDays, addMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

type Props = {
  data: Partial<HipnoFitQuizData>;
};

const checkoutUrl = 'https://pay.kirvano.com/CHECKOUT_URL_HERE'; // Replace with actual checkout URL

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

export function Step26_FinalPage({ data }: Props) {
    const { age, height, weight, targetWeight } = data;

    const { metabolicAge, imc } = useMemo(() => {
        const ageNum = age ? parseInt(age.split('-')[0]) : 30;
        const metaAge = ageNum + 10;

        let imcValue = 0;
        if (height && weight) {
            const heightInMeters = height / 100;
            imcValue = weight / (heightInMeters * heightInMeters);
        }
        return { metabolicAge: metaAge, imc: imcValue };
    }, [age, height, weight]);

    const chartData = useMemo(() => {
        const today = new Date();
        const endDate = addDays(today, 45);
        return [
            { date: format(today, 'dd/MM'), weight: weight || 0 },
            { date: format(endDate, 'dd/MM'), weight: targetWeight || 0 }
        ];
    }, [weight, targetWeight]);

    const targetDate = useMemo(() => {
        return format(addMonths(new Date(), 2), 'dd/MM/yyyy', { locale: ptBR });
    }, []);

    const imageCarouselPlugin = React.useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));
    const commentCarouselPlugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

    return (
        <div className="space-y-8 font-body">
            {/* Section 1: Result & Vitals */}
            <Card className="shadow-lg border-blue-200">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-blue-600 font-headline">O Método HipnoFit provavelmente vai funcionar para você!</CardTitle>
                    <CardDescription className="text-lg">A hipnoterapia é segura para você?</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                    <div className="bg-green-100 text-green-800 p-3 rounded-lg flex items-center justify-center gap-2">
                        <Check className="h-5 w-5" />
                        <span className="font-semibold">Você é um ótimo candidato para hipnoterapia voltada ao controle de peso.</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                        <div className="bg-red-100 text-red-800 p-4 rounded-lg">
                            <p className="font-semibold">Sua idade metabólica:</p>
                            <p className="font-bold text-2xl">{metabolicAge} anos</p>
                            <p className="text-sm">Seu corpo está envelhecendo mais rápido do que deveria.</p>
                        </div>
                        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg">
                            <p className="font-semibold">Índice de Massa Corporal (IMC):</p>
                            <p className="font-bold text-2xl">{imc.toFixed(1)}</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button size="lg">Continuar</Button>
                </CardFooter>
            </Card>

            {/* Section 2: Weight Loss Projection */}
            <Card className="shadow-lg border-green-200">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-green-600 font-headline">Você vai perder {((weight || 0) - (targetWeight || 0))} kg em até 45 dias!</CardTitle>
                    <CardDescription className="text-lg">Comece a ver resultados nos primeiros 7 dias!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="font-semibold text-center text-xl">Gráfico de perda de peso:</p>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                                <Tooltip />
                                <Line type="monotone" dataKey="weight" stroke="#22c55e" strokeWidth={3}>
                                    <LabelList dataKey="weight" position="top" formatter={(value: number) => `${value}kg`} />
                                </Line>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-center text-lg">Com base em suas respostas, prevemos que você atingirá sua meta antes de <span className="font-bold">{targetDate}</span></p>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button size="lg">Continuar</Button>
                </CardFooter>
            </Card>

            {/* Section 3: Beyond Weight Loss */}
            <Card className="shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold font-headline">Além da perda de peso</CardTitle>
                    <CardDescription>Você verá melhorias nestas áreas:</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <h3 className="font-bold">Comer por emoção</h3>
                        <p>9 em cada 10 usuários reduziram a alimentação emocional após as 5 primeiras sessões de hipnoterapia.</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <h3 className="font-bold">Má digestão</h3>
                        <p>8 em cada 10 usuários relataram menos estresse e melhor digestão após tratar fatores emocionais com hipnoterapia.</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <h3 className="font-bold">Força de vontade</h3>
                        <p>9 em cada 10 usuários dizem que reduziram desejos e formaram hábitos saudáveis com hipnoterapia.</p>
                    </div>
                </CardContent>
                 <CardFooter className="justify-center">
                    <Button size="lg">Continuar</Button>
                </CardFooter>
            </Card>

             {/* Section 4: Success Rate & Final Offer */}
            <div className="bg-white p-6 rounded-lg shadow-xl space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-blue-600 font-headline">Taxa de sucesso de 93%</h2>
                    <p className="text-lg">Baseado em ciência, verificado por usuários</p>
                </div>

                <p>O HipnoFit foi desenvolvido com os melhores especialistas em hipnoterapia, cada um trazendo sua própria expertise para garantir a eficácia de cada sessão.</p>
                <p>Pesquisas indicam que a hipnose apresenta uma taxa de sucesso notável de 93%, superando tanto a abordagem comportamental quanto a psicoterapêutica.</p>
                <p>Descubra o poder transformador da hipnoterapia sem restrições ou riscos. Incontáveis pessoas já atingiram seus objetivos com a hipnoterapia - convidamos você a ser uma delas!</p>
                
                <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg">
                    <Image src="https://i.imgur.com/52gwXD4.png" alt="Suelen Costa" width={200} height={200} className="rounded-full w-32 h-32 border-4 border-blue-300" />
                    <h4 className="font-bold text-lg mt-2">Suelen Costa</h4>
                    <p className="text-sm text-gray-600">Chefe do Programa</p>
                    <p className="text-sm font-semibold text-green-600">Aprovado</p>
                    <p className="text-xs text-gray-500 mt-2">Desenvolvido com especialistas de hipnoterapia de alto nível</p>
                </div>
                 <div className="flex justify-center">
                    <Button size="lg">Continuar</Button>
                </div>
            </div>

            {/* Offer Section */}
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
                         <a href={checkoutUrl} className="block w-full mt-4">
                            <Button size="lg" className="w-full text-lg h-14 bg-green-600 hover:bg-green-700 text-white animate-pulse">
                                QUERO MEU PLANO AGORA
                            </Button>
                        </a>
                    </div>
                </CardContent>
            </Card>

            {/* Transformations Carousel */}
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
            
            {/* Written Comments Carousel */}
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

            {/* How it works */}
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
                 <CardFooter className="justify-center">
                    <a href={checkoutUrl} className="block w-full max-w-md">
                        <Button size="lg" className="w-full text-lg h-12 bg-blue-600 hover:bg-blue-700 text-white">QUERO O HIPNOFIT</Button>
                    </a>
                </CardFooter>
            </Card>

            {/* Example Audio */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-center font-headline">Ainda com dúvidas? Veja um exemplo!</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <div style={{ background: '#DCF8C6', padding: '10px 15px', borderRadius: '20px 20px 0 20px', maxWidth: '320px' }}>
                        <iframe width="300" height="60" src="https://vocaroo.com/embed/1lJUNQ7OS18y?autoplay=0" frameBorder="0" allow="autoplay"></iframe>
                    </div>
                </CardContent>
            </Card>

            {/* Guarantee and FAQ */}
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
