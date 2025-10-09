'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

type Props = {
  onContinue: () => void;
};

export function Step28_BeyondWeightLoss({ onContinue }: Props) {
    return (
        <Card className="shadow-lg">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold font-headline">Além da perda de peso</CardTitle>
                <CardDescription>Você verá melhorias nestas áreas:</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-gray-100 rounded-lg">
                    <h3 className="font-bold">Comer por emoção</h3>
                    <p>9 em cada 10 usuários reduziram a alimentação emocional após as 5 primeiras sessões.</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                    <h3 className="font-bold">Má digestão</h3>
                    <p>8 em cada 10 usuários relataram menos estresse e melhor digestão após tratar fatores emocionais.</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                    <h3 className="font-bold">Força de vontade</h3>
                    <p>9 em cada 10 usuários dizem que reduziram desejos e formaram hábitos saudáveis.</p>
                </div>
            </CardContent>
             <CardFooter className="justify-center">
                <Button size="lg" onClick={onContinue}>Continuar</Button>
            </CardFooter>
        </Card>
    );
}
