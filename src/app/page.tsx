'use client';

import { useState, useEffect } from 'react';
import type { Question } from '@/types/quiz';
import { getQuizQuestions } from '@/app/actions';
import { QuizStart } from '@/components/quiz-start';
import { QuizQuestion } from '@/components/quiz-question';
import { QuizResults } from '@/components/quiz-results';
import { QuizProgress } from '@/components/quiz-progress';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

type QuizState = 'not-started' | 'in-progress' | 'loading' | 'finished';
const SCORE_STORAGE_KEY = 'waterFastQuiz_userScores';
const NUM_QUESTIONS = 5;

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>('not-started');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const { toast } = useToast();

  const [userScores, setUserScores] = useState<number[]>([]);
  const [gender, setGender] = useState<'male' | 'female' | null>(null);

  useEffect(() => {
    try {
      const storedScores = localStorage.getItem(SCORE_STORAGE_KEY);
      if (storedScores) {
        setUserScores(JSON.parse(storedScores));
      }
    } catch (error) {
      console.error('Could not access localStorage', error);
    }
  }, []);

  const handleStartQuiz = async () => {
    if (!gender) {
      toast({
        title: 'Selecione um sexo',
        description: 'Você precisa selecionar um sexo para começar o quiz.',
        variant: 'destructive',
      });
      return;
    }

    setQuizState('loading');
    try {
      const averageScore =
        userScores.length > 0
          ? userScores.reduce((a, b) => a + b, 0) / userScores.length
          : null;
      const avgScoreNormalized = averageScore !== null ? averageScore / 100 : null;

      const newQuestions = await getQuizQuestions(
        NUM_QUESTIONS,
        avgScoreNormalized
      );
      if (newQuestions.length === 0) {
        throw new Error('No questions were generated.');
      }
      setQuestions(newQuestions);
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setScore(0);
      setQuizState('in-progress');
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro ao gerar quiz',
        description:
          'Não foi possível carregar as perguntas. Por favor, tente novamente mais tarde.',
        variant: 'destructive',
      });
      setQuizState('not-started');
    }
  };

  const handleNextQuestion = (selectedAnswerIndex: number) => {
    const newAnswers = [...userAnswers, selectedAnswerIndex];
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateAndSetScore(newAnswers);
      setQuizState('finished');
    }
  };

  const calculateAndSetScore = (finalAnswers: number[]) => {
    let correctAnswers = 0;
    questions.forEach((q, index) => {
      if (q.correctAnswerIndex === finalAnswers[index]) {
        correctAnswers++;
      }
    });
    const finalScore = correctAnswers;
    setScore(finalScore);

    const newScorePercentage = (finalScore / questions.length) * 100;
    const newScores = [...userScores, newScorePercentage].slice(-10);
    setUserScores(newScores);
    try {
      localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(newScores));
    } catch (error) {
      console.error('Could not write to localStorage', error);
    }
  };

  const handleRestart = () => {
    setGender(null);
    setQuizState('not-started');
  };

  const renderContent = () => {
    switch (quizState) {
      case 'in-progress':
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
      case 'finished':
        return (
          <QuizResults
            score={score}
            total={questions.length}
            onRestart={handleRestart}
          />
        );
      case 'loading':
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
      case 'not-started':
      default:
        return (
          <QuizStart
            onStart={handleStartQuiz}
            loading={quizState === 'loading'}
            gender={gender}
            setGender={setGender}
          />
        );
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      {renderContent()}
    </main>
  );
}
