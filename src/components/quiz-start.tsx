import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type QuizStartProps = {
  onSelectGender: (gender: 'male' | 'female') => void;
};

export function QuizStart({ onSelectGender }: QuizStartProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto text-center shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-headline">
          Emagreça, desinche e renove sua energia: descubra se o Desafio Jejum
          de Água é para você
        </CardTitle>
        <CardDescription className="text-lg pt-2">
          Perca peso com pequenas mudanças
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-4">Selecione seu sexo</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            className={cn(
              'rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary hover:ring-2 hover:ring-primary'
            )}
            onClick={() => onSelectGender('female')}
          >
            <Image
              src="https://picsum.photos/400/400"
              alt="Feminino"
              width={400}
              height={400}
              className="rounded-md w-full h-auto object-cover aspect-square"
              data-ai-hint="woman"
            />
            <p className="font-semibold text-lg mt-3">Feminino</p>
          </div>
          <div
            className={cn(
              'rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary hover:ring-2 hover:ring-primary'
            )}
            onClick={() => onSelectGender('male')}
          >
            <Image
              src="https://picsum.photos/400/400"
              alt="Masculino"
              width={400}
              height={400}
              className="rounded-md w-full h-auto object-cover aspect-square"
              data-ai-hint="man"
            />
            <p className="font-semibold text-lg mt-3">Masculino</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
