import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type QuizStartProps = {
  onStart: () => void;
  loading: boolean;
  gender: 'male' | 'female' | null;
  setGender: (gender: 'male' | 'female' | null) => void;
};

export function QuizStart({
  onStart,
  loading,
  gender,
  setGender,
}: QuizStartProps) {
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
              'rounded-lg border-2 p-4 cursor-pointer transition-all',
              gender === 'female'
                ? 'border-primary ring-2 ring-primary'
                : 'border-border'
            )}
            onClick={() => setGender('female')}
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
              'rounded-lg border-2 p-4 cursor-pointer transition-all',
              gender === 'male'
                ? 'border-primary ring-2 ring-primary'
                : 'border-border'
            )}
            onClick={() => setGender('male')}
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
      <CardFooter className="flex justify-center p-6">
        <Button
          onClick={onStart}
          disabled={loading || !gender}
          size="lg"
          className="w-full sm:w-auto"
        >
          {loading ? 'Carregando...' : 'Começar o Quiz'}
        </Button>
      </CardFooter>
    </Card>
  );
}
