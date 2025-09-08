'use client';

import { useState, useEffect, Suspense } from 'react';
import type { Question } from '@/types/quiz';
import { getQuizQuestions } from '@/app/actions';
import { QuizQuestion } from '@/components/quiz-question';
import { QuizProgress } from '@/components/quiz-progress';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useRouter, useSearchParams } from 'next/navigation';

const SCORE_STORAGE_KEY = 'waterFastQuiz_userScores';
const NUM_QUESTIONS = 5;

function QuizPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchQuestions = async () => {
      let userScores: number[] = [];
      try {
        const storedScores = localStorage.getItem(SCORE_STORAGE_KEY);
        if (storedScores) {
          userScores = JSON.parse(storedScores);
        }
      } catch (error) {
        console.error('Could not access localStorage', error);
      }

      try {
        const averageScore =
          userScores.length > 0
            ? userScores.reduce((a, b) => a + b, 0) / userScores.length
            : null;
        const avgScoreNormalized =
          averageScore !== null ? averageScore / 100 : null;

        const newQuestions = await getQuizQuestions(
          NUM_QUESTIONS,
          avgScoreNormalized
        );
        if (newQuestions.length === 0) {
          throw new Error('No questions were generated.');
        }
        setQuestions(newQuestions);
      } catch (error) {
        console.error(error);
        toast({
          title: 'Erro ao gerar quiz',
          description:
            'Não foi possível carregar as perguntas. Por favor, tente novamente mais tarde.',
          variant: 'destructive',
        });
        router.push('/');
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, [router, toast]);

  const calculateAndSetScore = (finalAnswers: number[]) => {
    let correctAnswers = 0;
    questions.forEach((q, index) => {
      if (q.correctAnswerIndex === finalAnswers[index]) {
        correctAnswers++;
      }
    });

    try {
      let userScores: number[] = [];
      const storedScores = localStorage.getItem(SCORE_STORAGE_KEY);
      if (storedScores) {
        userScores = JSON.parse(storedScores);
      }
      const newScorePercentage = (correctAnswers / questions.length) * 100;
      const newScores = [...userScores, newScorePercentage].slice(-10);
      localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(newScores));
    } catch (error) {
      console.error('Could not write to localStorage', error);
    }
    return correctAnswers;
  };

  const handleNextQuestion = (selectedAnswerIndex: number) => {
    const newAnswers = [...userAnswers, selectedAnswerIndex];
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const finalScore = calculateAndSetScore(newAnswers);
      router.push(`/resultado?score=${finalScore}&total=${questions.length}`);
    }
  };

  if (isLoading) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <Skeleton className="h-4 w-1/4 mb-4" />
          <Skeleton className="h-8 w-3/4" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-full" />
        </CardContent>
      </Card>
    );
  }

  if (!questions[currentQuestionIndex]) return null;

  return (
    <div className="w-full space-y-8">
      <QuizProgress
        current={currentQuestionIndex + 1}
        total={questions.length}
      />
      <QuizQuestion
        key={currentQuestionIndex}
        question={questions[currentQuestionIndex]}
        onNext={handleNextQuestion}
      />
    </div>
  );
}

export default function QuizPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <Suspense fallback={<div>Carregando...</div>}>
        <QuizPageContent />
      </Suspense>
    </main>
  );
}
