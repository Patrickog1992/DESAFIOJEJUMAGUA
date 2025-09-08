import { Progress } from '@/components/ui/progress';

type QuizProgressProps = {
  current: number;
  total: number;
};

export function QuizProgress({ current, total }: QuizProgressProps) {
  const progressPercentage = total > 0 ? (current / total) * 100 : 0;
  return (
    <div className="w-full max-w-2xl mx-auto">
      <p className="text-sm text-center text-muted-foreground mb-2">
        Pergunta {current} de {total}
      </p>
      <Progress value={progressPercentage} className="h-2" />
    </div>
  );
}
