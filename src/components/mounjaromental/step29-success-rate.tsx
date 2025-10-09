'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

type Props = {
  onContinue: () => void;
};

export function Step29_SuccessRate({ onContinue }: Props) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-xl space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-600 font-headline">Taxa de sucesso de 93%</h2>
                <p className="text-lg">Baseado em ciência, verificado por usuários</p>
            </div>

            <p>O MounjaroMental foi desenvolvido com os melhores especialistas, cada um trazendo sua própria expertise para garantir a eficácia de cada sessão.</p>
            <p>Pesquisas indicam que a mudança de mentalidade apresenta uma taxa de sucesso notável de 93%, superando tanto a abordagem comportamental quanto a psicoterapêutica.</p>
            <p>Descubra o poder transformador sem restrições ou riscos. Incontáveis pessoas já atingiram seus objetivos - convidamos você a ser uma delas!</p>
            
            <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg">
                <Image src="https://i.imgur.com/52gwXD4.png" alt="Suelen Costa" width={200} height={200} className="rounded-full w-32 h-32 border-4 border-blue-300" />
                <h4 className="font-bold text-lg mt-2">Suelen Costa</h4>
                <p className="text-sm text-gray-600">Chefe do Programa</p>
                <p className="text-sm font-semibold text-green-600">Aprovado</p>
                <p className="text-xs text-gray-500 mt-2">Desenvolvido com especialistas de alto nível</p>
            </div>
             <div className="flex justify-center">
                <Button size="lg" onClick={onContinue}>Continuar</Button>
            </div>
        </div>
    );
}
