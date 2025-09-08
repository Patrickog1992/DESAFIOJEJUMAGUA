'use client';

import type { Question } from '@/types/quiz';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type QuizQuestionProps = {
  question: Question;
  onNext: (selectedAnswerIndex: number) => void;
};

export function QuizQuestion({ question, onNext }: QuizQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleConfirmAnswer = () => {
    if (selectedOption !== null) {
      setIsAnswered(true);
      setTimeout(() => {
        onNext(selectedOption);
        setIsAnswered(false);
        setSelectedOption(null);
      }, 1500);
    }
  };

  const getOptionClass = (index: number) => {
    if (!isAnswered) return '';
    if (index === question.correctAnswerIndex)
      return 'border-accent bg-accent/10 border-2';
    if (index === selectedOption)
      return 'border-destructive bg-destructive/10 border-2';
    return 'opacity-50';
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl leading-snug">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedOption?.toString()}
          onValueChange={(value) => !isAnswered && setSelectedOption(parseInt(value))}
          disabled={isAnswered}
        >
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <Label
                key={index}
                htmlFor={`option-${index}`}
                className={cn(
                  'flex items-center space-x-4 rounded-lg border p-4 text-base transition-all duration-300',
                  isAnswered ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-primary/5',
                  {
                    'ring-2 ring-primary border-primary':
                      selectedOption === index && !isAnswered,
                  },
                  getOptionClass(index)
                )}
              >
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <span>{option}</span>
              </Label>
            ))}
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter className="justify-end">
        <Button
          onClick={handleConfirmAnswer}
          disabled={selectedOption === null || isAnswered}
        >
          {isAnswered
            ? 'Próxima...'
            : 'Confirmar Resposta'}
        </Button>
      </CardFooter>
    </Card>
  );
}
