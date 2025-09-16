'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

type Props = {
  onContinue: () => void;
};

const testimonials = [
  { name: 'Jenifer L.', text: '“Há 2 meses pesava 89 kg. Agora peso 64 Me sinto melhor, pareço melhor e finalmente sinto-me confiante no meu corpo.”', img: 'https://i.imgur.com/Kd5Dboy.jpg' },
  { name: 'Ana Paula.', text: '“Estou no dia 15. Perdi 12 kg. Adoro a forma como me vejo ao espelho. Durmo melhor e sinto-me com mais energia também!”', img: 'https://i.imgur.com/YOMEZLJ.jpg' },
  { name: 'Bruna Alves.', text: '“O médico disse-me que eu era pré-diabético e que tinha de mudar alguma coisa. Este plano salvou-me literalmente a vida, perdi 34 kg em 6 semanas.”', img: 'https://i.imgur.com/fogjsiC.jpg' },
  { name: 'Paula Nunes.', text: '“O plano é fantástico! Posso comer o que quiser e toda a comida é deliciosa. Perdi 24 kg em 7 semanas e a minha saúde intestinal melhorou!”', img: 'https://i.imgur.com/R6HKKtp.jpg' },
];

export function Step34_Testimonials({ onContinue }: Props) {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Mas não acredite somente na nossa palavra. Ouça o que os outros dizem sobre a Dieta Mediterrânea</CardTitle>
        <CardDescription>Já ajudámos milhões de pessoas a atingir os seus objetivos corporais. Também o podemos te ajudar</CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="flex justify-center">
                        <Card className="w-full max-w-sm overflow-hidden">
                            <CardContent className="p-0 text-center">
                                <Image 
                                    src={testimonial.img} 
                                    alt={testimonial.name} 
                                    width={400} 
                                    height={400} 
                                    className="object-cover w-full h-[400px]" 
                                />
                                <div className="p-4 space-y-2">
                                    <p className="italic text-muted-foreground">{testimonial.text}</p>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <div className="flex items-center justify-center gap-1 text-xs text-green-600">
                                        <Check className="h-3 w-3"/>
                                        <span>Verificado</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
      </CardContent>
      <CardFooter className="justify-center mt-4">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
