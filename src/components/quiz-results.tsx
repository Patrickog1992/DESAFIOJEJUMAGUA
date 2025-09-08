import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, RefreshCw } from 'lucide-react';

type QuizResultsProps = {
  score: number;
  total: number;
  onRestart: () => void;
};

export function QuizResults({ score, total, onRestart }: QuizResultsProps) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  const getFeedback = () => {
    if (percentage === 100) {
      return {
        title: 'Excelente!',
        message: 'Você é um especialista em jejum de água!',
      };
    } else if (percentage >= 75) {
      return {
        title: 'Muito bem!',
        message: 'Seu conhecimento é impressionante. Continue assim!',
      };
    } else if (percentage >= 50) {
      return {
        title: 'Bom trabalho!',
        message: 'Você está no caminho certo. Continue aprendendo!',
      };
    } else {
      return {
        title: 'Continue tentando!',
        message: 'Não desanime. Cada erro é uma oportunidade de aprendizado.',
      };
    }
  };

  const feedback = getFeedback();

  return (
    <Card className="w-full max-w-md mx-auto text-center shadow-lg">
      <CardHeader>
        <div className="flex justify-center items-center mb-4">
           <div className="bg-primary/10 p-4 rounded-full">
            <Award className="w-16 h-16 text-primary" />
          </div>
        </div>
        <CardTitle className="text-3xl font-headline">{feedback.title}</CardTitle>
        <CardDescription className="text-lg pt-2">{feedback.message}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-muted-foreground">Sua pontuação final:</p>
        <p className="text-6xl font-bold text-primary my-2">
          {score} / {total}
        </p>
        <p className="font-semibold text-muted-foreground">({percentage}%)</p>
      </CardContent>
      <CardFooter className="flex justify-center p-6">
        <Button onClick={onRestart} size="lg">
          <RefreshCw className="mr-2 h-4 w-4" />
          Tentar Novamente
        </Button>
      </CardFooter>
    </Card>
  );
}
