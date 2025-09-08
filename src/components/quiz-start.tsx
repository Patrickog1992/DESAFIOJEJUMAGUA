import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplet } from 'lucide-react';

type QuizStartProps = {
  onStart: () => void;
  loading: boolean;
};

export function QuizStart({ onStart, loading }: QuizStartProps) {
  return (
    <Card className="w-full max-w-md mx-auto text-center shadow-lg">
      <CardHeader>
        <div className="flex justify-center items-center mb-4">
          <div className="bg-primary/10 p-4 rounded-full">
            <Droplet className="w-12 h-12 text-primary" />
          </div>
        </div>
        <CardTitle className="text-3xl font-headline">
          Quiz de Jejum de Água
        </CardTitle>
        <CardDescription className="text-lg pt-2">
          Teste seus conhecimentos e aprenda mais sobre o jejum de água.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center p-6">
        <Button onClick={onStart} disabled={loading} size="lg">
          {loading ? 'Carregando...' : 'Começar o Quiz'}
        </Button>
      </CardContent>
    </Card>
  );
}
