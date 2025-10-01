'use client';
import { Suspense, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Step1_GenderSelection } from '@/components/dietamediterranea/step1-gender-selection';
import { Step2_SocialProof } from '@/components/dietamediterranea/step2-social-proof';
import { Step3_KnowledgeLevel } from '@/components/dietamediterranea/step3-knowledge-level';
import { Step4_DietInfo } from '@/components/dietamediterranea/step4-diet-info';
import { Step4a_Report } from '@/components/dietamediterranea/step4a-report';
import { Step5_Goal } from '@/components/dietamediterranea/step5-goal';
import { Step6_BodyType } from '@/components/dietamediterranea/step6-body-type';
import { Step7_DesiredBody } from '@/components/dietamediterranea/step7-desired-body';
import { Step8_ProblemAreas } from '@/components/dietamediterranea/step8-problem-areas';
import { Step9_Testimonial } from '@/components/dietamediterranea/step9-testimonial';
import { Step10_DailyActivity } from '@/components/dietamediterranea/step10-daily-activity';
import { Step11_EnergyLevels } from '@/components/dietamediterranea/step11-energy-levels';
import { Step12_ExerciseFrequency } from '@/components/dietamediterranea/step12-exercise-frequency';
import { Step13_WeightFluctuation } from '@/components/dietamediterranea/step13-weight-fluctuation';
import { Step14_LastTimeAtGoalWeight } from '@/components/dietamediterranea/step14-last-time-at-goal-weight';
import { Step15_PastDiets } from '@/components/dietamediterranea/step15-past-diets';
import { Step16_Comparison } from '@/components/dietamediterranea/step16-comparison';
import { Step17_MainReason } from '@/components/dietamediterranea/step17-main-reason';
import { Step18_Height } from '@/components/dietamediterranea/step18-height';
import { Step19_CurrentWeight } from '@/components/dietamediterranea/step19-current-weight';
import { Step20_TargetWeight } from '@/components/dietamediterranea/step20-target-weight';
import { Step21_Age } from '@/components/dietamediterranea/step21-age';
import { Step22_Summary } from '@/components/dietamediterranea/step22-summary';
import { Step23_WeightLossTimeline } from '@/components/dietamediterranea/step23-weight-loss-timeline';
import { Step24_MealsPerDay } from '@/components/dietamediterranea/step24-meals-per-day';
import { Step25_ExcludeProducts_Protein } from '@/components/dietamediterranea/step25-exclude-protein';
import { Step26_ExcludeProducts_Veggies } from '@/components/dietamediterranea/step26-exclude-veggies';
import { Step27_ExcludeProducts_Grains } from '@/components/dietamediterranea/step27-exclude-grains';
import { Step28_Loading } from '@/components/dietamediterranea/step28-loading';
import { Step29_GoodNews } from '@/components/dietamediterranea/step29-good-news';
import { Step30_Summary2 } from '@/components/dietamediterranea/step30-summary2';
import { Step31_FatBurningRate } from '@/components/dietamediterranea/step31-fat-burning-rate';
import { Step32_PlanReady } from '@/components/dietamediterranea/step32-plan-ready';
import { Step33_WhatYouGet } from '@/components/dietamediterranea/step33-what-you-get';
import { Step34_Testimonials } from '@/components/dietamediterranea/step34-testimonials';

export type QuizData = {
    gender?: 'male' | 'female';
    knowledge?: string;
    goals?: string[];
    bodyType?: string;
    desiredBody?: string;
    problemAreas?: string[];
    dailyActivity?: string;
    energyLevels?: string;
    exerciseFrequency?: string;
    weightFluctuation?: string;
    lastTimeAtGoalWeight?: string;
    pastDiets?: string[];
    mainReason?: string;
    height?: number;
    currentWeight?: number;
    targetWeight?: number;
    age?: number;
    mealsPerDay?: string;
    excludedProteins?: string[];
    excludedVeggies?: string[];
    excludedGrains?: string[];
};

const steps = [
    'gender', 'social-proof', 'knowledge-level', 'diet-info', 'report', 'goal',
    'body-type', 'desired-body', 'problem-areas', 'testimonial', 'daily-activity',
    'energy-levels', 'exercise-frequency', 'weight-fluctuation', 'last-time-at-goal-weight',
    'past-diets', 'comparison', 'main-reason', 'height', 'current-weight', 'target-weight', 'age',
    'summary', 'weight-loss-timeline', 'meals-per-day', 'exclude-protein', 'exclude-veggies',
    'exclude-grains', 'loading', 'good-news', 'summary2', 'fat-burning-rate', 'plan-ready',
    'what-you-get', 'testimonials'
];

function DietaMediterraneaPageContent() {
  const router = useRouter();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [quizData, setQuizData] = useState<QuizData>({});

  const handleNextStep = (data: Partial<QuizData>) => {
    const updatedData = { ...quizData, ...data };
    setQuizData(updatedData);

    const nextStepIndex = currentStepIndex + 1;

    if (nextStepIndex < steps.length) {
      setCurrentStepIndex(nextStepIndex);
      window.scrollTo(0, 0);
    } else {
        // Last step was completed, navigate to final offer
        const params = new URLSearchParams();
        Object.entries(updatedData).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach(v => params.append(key, v.toString()));
            } else if (value !== undefined) {
                params.set(key, value.toString());
            }
        });
        router.push(`/dietamediterranea/final-offer?${params.toString()}`);
    }
  };

  const currentStep = steps[currentStepIndex];

  const renderStep = () => {
    switch (currentStep) {
        case 'gender':
            return <Step1_GenderSelection onContinue={handleNextStep} />;
        case 'social-proof':
            return <Step2_SocialProof onContinue={() => handleNextStep({})} />;
        case 'knowledge-level':
            return <Step3_KnowledgeLevel onContinue={handleNextStep} />;
        case 'diet-info':
            return <Step4_DietInfo onContinue={() => handleNextStep({})} />;
        case 'report':
            return <Step4a_Report onContinue={() => handleNextStep({})} />;
        case 'goal':
            return <Step5_Goal onContinue={handleNextStep} />;
        case 'body-type':
            return <Step6_BodyType onContinue={handleNextStep} />;
        case 'desired-body':
            return <Step7_DesiredBody onContinue={handleNextStep} />;
        case 'problem-areas':
            return <Step8_ProblemAreas onContinue={handleNextStep} />;
        case 'testimonial':
            return <Step9_Testimonial onContinue={() => handleNextStep({})} />;
        case 'daily-activity':
            return <Step10_DailyActivity onContinue={handleNextStep} />;
        case 'energy-levels':
            return <Step11_EnergyLevels onContinue={handleNextStep} />;
        case 'exercise-frequency':
            return <Step12_ExerciseFrequency onContinue={handleNextStep} />;
        case 'weight-fluctuation':
            return <Step13_WeightFluctuation onContinue={handleNextStep} />;
        case 'last-time-at-goal-weight':
            return <Step14_LastTimeAtGoalWeight onContinue={handleNextStep} />;
        case 'past-diets':
            return <Step15_PastDiets onContinue={handleNextStep} />;
        case 'comparison':
            return <Step16_Comparison onContinue={() => handleNextStep({})} />;
        case 'main-reason':
            return <Step17_MainReason onContinue={handleNextStep} />;
        case 'height':
            return <Step18_Height onContinue={handleNextStep} />;
        case 'current-weight':
            return <Step19_CurrentWeight onContinue={handleNextStep} height={quizData.height} />;
        case 'target-weight':
            return <Step20_TargetWeight onContinue={handleNextStep} currentWeight={quizData.currentWeight} />;
        case 'age':
            return <Step21_Age onContinue={handleNextStep} />;
        case 'summary':
            return <Step22_Summary onContinue={() => handleNextStep({})} data={quizData} />;
        case 'weight-loss-timeline':
            return <Step23_WeightLossTimeline onContinue={() => handleNextStep({})} data={quizData} />;
        case 'meals-per-day':
            return <Step24_MealsPerDay onContinue={handleNextStep} />;
        case 'exclude-protein':
            return <Step25_ExcludeProducts_Protein onContinue={handleNextStep} />;
        case 'exclude-veggies':
            return <Step26_ExcludeProducts_Veggies onContinue={handleNextStep} />;
        case 'exclude-grains':
            return <Step27_ExcludeProducts_Grains onContinue={handleNextStep} />;
        case 'loading':
            return <Step28_Loading onComplete={() => handleNextStep({})} />;
        case 'good-news':
            return <Step29_GoodNews onContinue={() => handleNextStep({})} data={quizData} />;
        case 'summary2':
            return <Step30_Summary2 onContinue={() => handleNextStep({})} data={quizData} />;
        case 'fat-burning-rate':
            return <Step31_FatBurningRate onContinue={() => handleNextStep({})} />;
        case 'plan-ready':
            return <Step32_PlanReady onContinue={() => handleNextStep({})} currentWeight={quizData.currentWeight} targetWeight={quizData.targetWeight} />;
        case 'what-you-get':
            return <Step33_WhatYouGet onContinue={() => handleNextStep({})} />;
        case 'testimonials':
            return <Step34_Testimonials onContinue={() => handleNextStep({})} />;
        default:
            return <Step1_GenderSelection onContinue={handleNextStep} />;
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
       <div className="flex flex-col items-center justify-center flex-grow w-full mb-8">
        <Image
            src="https://i.imgur.com/Ds0KCiY.png"
            alt="Logo"
            width={100}
            height={100}
            className="mb-8"
        />
        <div className="w-full max-w-4xl">
            {renderStep()}
        </div>
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Dieta mediterrânea todos os direitos reservados</p>
      </footer>
    </main>
  );
}

export default function DietaMediterraneaPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <DietaMediterraneaPageContent />
        </Suspense>
    )
}
