
'use client';
import { Suspense, useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { VslIntro } from '@/components/vsl-intro';
import { QuizStart } from '@/components/quiz-start';
import { AgeRangeSelection } from '@/components/age-range-selection';
import { GoalSelection } from '@/components/goal-selection';
import { BodyShapeSelection } from '@/components/body-shape-selection';
import { IntermittentFastingExperience } from '@/components/intermittent-fasting-experience';
import { ChallengeIntro } from '@/components/challenge-intro';
import { ReportPage } from '@/components/report-page';
import { HungerTimeSelection } from '@/components/hunger-time-selection';
import { BreakfastTimeSelection } from '@/components/breakfast-time-selection';
import { LunchTimeSelection } from '@/components/lunch-time-selection';
import { DinnerTimeSelection } from '@/components/dinner-time-selection';
import { MealPreparationSelection } from '@/components/meal-preparation-selection';
import { HabitChangeSelection } from '@/components/habit-change-selection';
import { ActivityLevelSelection } from '@/components/activity-level-selection';
import { WorkScheduleSelection } from '@/components/work-schedule-selection';
import { DailyRoutineSelection } from '@/components/daily-routine-selection';
import { ChallengeGoalSelection } from '@/components/challenge-goal-selection';
import { FinalPage } from '@/components/final-page';
import { AgeInput } from '@/components/age-input';
import { HeightSelection } from '@/components/height-selection';
import { WeightSelection } from '@/components/weight-selection';
import { TargetWeightSelection } from '@/components/target-weight-selection';
import { NameSelection } from '@/components/name-selection';
import { TimelineChart } from '@/components/timeline-chart';
import { TestimonialPage } from '@/components/testimonial-page';
import { WalkingTimeSelection } from '@/components/walking-time-selection';
import { SleepDurationSelection } from '@/components/sleep-duration-selection';
import { CurrentDietSelection } from '@/components/current-diet-selection';
import { WaterIntakeSelection } from '@/components/water-intake-selection';
import { MedicationSelection } from '@/components/medication-selection';
import { HealthProblemsSelection } from '@/components/health-problems-selection';
import { AcceleratedTimeline } from '@/components/accelerated-timeline';
import { LoadingPlan } from '@/components/loading-plan';
import { VslFinal } from '@/components/vsl-final';
import { UniqueOffer } from '@/components/unique-offer';

export type QuizData = {
  gender?: 'male' | 'female';
  ageRange?: string;
  goal?: string;
  bodyShape?: string;
  fastingExperience?: string;
  hungerTimes?: string;
  breakfastTime?: string;
  lunchTime?: string;
  dinnerTime?: string;
  mealPreparation?: string;
  habitChange?: string;
  activityLevel?: string;
  workSchedule?: string;
  dailyRoutine?: string;
  challengeGoal?: string;
  age?: string;
  height?: string;
  weight?: string;
  targetWeight?: string;
  name?: string;
  walkingTime?: string;
  sleepDuration?: string;
  currentDiet?: string;
  waterIntake?: string;
  medication?: string;
  healthProblems?: string;
};

const steps = [
  'gender',
  'age-range',
  'objetivo',
  'formato-corpo',
  'jejum-intermitente',
  'desafio',
  'reportagem',
  'horario-fome',
  'cafe-da-manha',
  'almoco',
  'jantar',
  'preparo-refeicoes',
  'habito-alimentar',
  'nivel-atividade',
  'horario-trabalho',
  'rotina-diaria',
  'objetivo-desafio',
  'final',
  'idade',
  'altura',
  'peso',
  'objetivo-peso',
  'nome',
  'cronograma',
  'depoimento',
  'tempo-caminhada',
  'horas-sono',
  'dieta-atual',
  'consumo-agua',
  'medicacao',
  'problemas-saude',
  'progresso-acelerado',
  'plano-carregando',
  'vsl-final',
  'oferta-unica',
];

function HomePageContent() {
  const router = useRouter();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [quizData, setQuizData] = useState<QuizData>({});

  const currentStep = steps[currentStepIndex];

  useEffect(() => {
    const params = new URLSearchParams();
      Object.entries(quizData).forEach(([key, value]) => {
        if (value !== undefined) {
          params.set(key, value.toString());
        }
      });

    if (currentStep === 'plano-carregando') {
      router.push(`/plano-carregando?${params.toString()}`);
    } else if (currentStep === 'vsl-final') {
      router.push(`/vsl-final?${params.toString()}`);
    } else if (currentStep === 'oferta-unica') {
      router.push(`/oferta-unica?${params.toString()}`);
    }
  }, [currentStepIndex, quizData, router, currentStep]);

  const handleNextStep = (data: Partial<QuizData>) => {
    const updatedData = { ...quizData, ...data };
    setQuizData(updatedData);
    setCurrentStepIndex(prevIndex => prevIndex + 1);
    window.scrollTo(0, 0);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'gender':
        return <QuizStart onSelectGender={(gender) => handleNextStep({ gender })} />;
      case 'age-range':
        return <AgeRangeSelection onContinue={(ageRange) => handleNextStep({ ageRange })} gender={quizData.gender} />;
      case 'objetivo':
        return <GoalSelection onContinue={(goal) => handleNextStep({ goal })} gender={quizData.gender} />;
      case 'formato-corpo':
        return <BodyShapeSelection onContinue={(bodyShape) => handleNextStep({ bodyShape })} />;
      case 'jejum-intermitente':
        return <IntermittentFastingExperience onContinue={(fastingExperience) => handleNextStep({ fastingExperience })} />;
      case 'desafio':
        return <ChallengeIntro onContinue={() => handleNextStep({})} />;
      case 'reportagem':
        return <ReportPage onContinue={() => handleNextStep({})} />;
      case 'horario-fome':
        return <HungerTimeSelection onContinue={(hungerTimes) => handleNextStep({ hungerTimes })} />;
      case 'cafe-da-manha':
        return <BreakfastTimeSelection onContinue={(breakfastTime) => handleNextStep({ breakfastTime })} />;
      case 'almoco':
        return <LunchTimeSelection onContinue={(lunchTime) => handleNextStep({ lunchTime })} />;
      case 'jantar':
        return <DinnerTimeSelection onContinue={(dinnerTime) => handleNextStep({ dinnerTime })} />;
      case 'preparo-refeicoes':
        return <MealPreparationSelection onContinue={(mealPreparation) => handleNextStep({ mealPreparation })} />;
      case 'habito-alimentar':
        return <HabitChangeSelection onContinue={(habitChange) => handleNextStep({ habitChange })} />;
      case 'nivel-atividade':
        return <ActivityLevelSelection onContinue={(activityLevel) => handleNextStep({ activityLevel })} />;
      case 'horario-trabalho':
        return <WorkScheduleSelection onContinue={(workSchedule) => handleNextStep({ workSchedule })} />;
      case 'rotina-diaria':
        return <DailyRoutineSelection onContinue={(dailyRoutine) => handleNextStep({ dailyRoutine })} />;
      case 'objetivo-desafio':
        return <ChallengeGoalSelection onContinue={(challengeGoal) => handleNextStep({ challengeGoal })} />;
      case 'final':
        return <FinalPage onContinue={() => handleNextStep({})} gender={quizData.gender} />;
      case 'idade':
        return <AgeInput onContinue={(age) => handleNextStep({ age })} />;
      case 'altura':
        return <HeightSelection onContinue={(height) => handleNextStep({ height })} />;
      case 'peso':
        return <WeightSelection onContinue={(weight) => handleNextStep({ weight })} height={quizData.height ? parseInt(quizData.height) : null} />;
      case 'objetivo-peso':
        return <TargetWeightSelection onContinue={(targetWeight) => handleNextStep({ targetWeight })} height={quizData.height ? parseInt(quizData.height) : null} gender={quizData.gender} />;
      case 'nome':
        return <NameSelection onContinue={(name) => handleNextStep({ name })} />;
      case 'cronograma':
        return <TimelineChart onContinue={() => handleNextStep({})} name={quizData.name || ''} currentWeight={Number(quizData.weight)} targetWeight={Number(quizData.targetWeight)} />;
      case 'depoimento':
        return <TestimonialPage onContinue={() => handleNextStep({})} gender={quizData.gender} />;
      case 'tempo-caminhada':
        return <WalkingTimeSelection onContinue={(walkingTime) => handleNextStep({ walkingTime })} />;
      case 'horas-sono':
        return <SleepDurationSelection onContinue={(sleepDuration) => handleNextStep({ sleepDuration })} />;
      case 'dieta-atual':
        return <CurrentDietSelection onContinue={(currentDiet) => handleNextStep({ currentDiet })} />;
      case 'consumo-agua':
        return <WaterIntakeSelection onContinue={(waterIntake) => handleNextStep({ waterIntake })} />;
      case 'medicacao':
        return <MedicationSelection onContinue={(medication) => handleNextStep({ medication })} />;
      case 'problemas-saude':
        return <HealthProblemsSelection onContinue={(healthProblems) => handleNextStep({ healthProblems })} />;
      case 'progresso-acelerado':
        return <AcceleratedTimeline onContinue={() => handleNextStep({})} name={quizData.name || ''} currentWeight={Number(quizData.weight)} targetWeight={Number(quizData.targetWeight)} />;
      case 'plano-carregando':
        return <LoadingPlan onComplete={() => handleNextStep({})} />;
      case 'vsl-final':
         return <VslFinal />;
      case 'oferta-unica':
        return <UniqueOffer onContinue={() => {}} name={quizData.name || ''} currentWeight={Number(quizData.weight)} targetWeight={Number(quizData.targetWeight)} height={Number(quizData.height)} gender={quizData.gender}/>;
      default:
        return <QuizStart onSelectGender={(gender) => handleNextStep({ gender })} />;
    }
  };

  const shouldShowLogo = currentStep !== 'vsl-intro' && currentStep !== 'oferta-unica' && currentStep !== 'vsl-final' && currentStep !== 'plano-carregando';

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col items-center justify-center flex-grow w-full mb-8">
        {shouldShowLogo && (
            <Image
            src="https://i.imgur.com/OIEU6Mk.png"
            alt="Logo"
            width={100}
            height={100}
            className="mb-8"
            />
        )}
        <div className="w-full max-w-5xl">
            {renderStep()}
        </div>
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Desafio do Jejum de Água todos os direitos reservados</p>
      </footer>
    </main>
  );
}

export default function HomePage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <HomePageContent />
        </Suspense>
    )
}
