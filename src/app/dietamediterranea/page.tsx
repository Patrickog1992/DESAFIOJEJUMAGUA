'use client';
import { useState } from 'react';
import { Step1_GenderSelection } from '@/components/dietamediterranea/step1-gender-selection';
import { Step2_SocialProof } from '@/components/dietamediterranea/step2-social-proof';
import { Step3_KnowledgeLevel } from '@/components/dietamediterranea/step3-knowledge-level';
import { Step4_DietInfo } from '@/components/dietamediterranea/step4-diet-info';
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
import { Step35_FinalOffer } from '@/components/dietamediterranea/step35-final-offer';

export type QuizData = {
  gender?: 'male' | 'female';
  knowledge?: string;
  goal?: string;
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

export default function DietaMediterraneaPage() {
  const [step, setStep] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>({});

  const nextStep = () => setStep(prev => prev + 1);

  const updateData = (data: Partial<QuizData>) => {
    setQuizData(prev => ({ ...prev, ...data }));
    nextStep();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1_GenderSelection onContinue={updateData} />;
      case 2:
        return <Step2_SocialProof onContinue={nextStep} />;
      case 3:
        return <Step3_KnowledgeLevel onContinue={updateData} />;
      case 4:
        return <Step4_DietInfo onContinue={nextStep} />;
      case 5:
        return <Step5_Goal onContinue={updateData} />;
      case 6:
        return <Step6_BodyType onContinue={updateData} />;
      case 7:
        return <Step7_DesiredBody onContinue={updateData} />;
      case 8:
        return <Step8_ProblemAreas onContinue={updateData} />;
      case 9:
        return <Step9_Testimonial onContinue={nextStep} />;
      case 10:
        return <Step10_DailyActivity onContinue={updateData} />;
      case 11:
        return <Step11_EnergyLevels onContinue={updateData} />;
      case 12:
        return <Step12_ExerciseFrequency onContinue={updateData} />;
      case 13:
        return <Step13_WeightFluctuation onContinue={updateData} />;
      case 14:
        return <Step14_LastTimeAtGoalWeight onContinue={updateData} />;
      case 15:
        return <Step15_PastDiets onContinue={updateData} />;
      case 16:
        return <Step16_Comparison onContinue={nextStep} />;
      case 17:
        return <Step17_MainReason onContinue={updateData} />;
      case 18:
        return <Step18_Height onContinue={updateData} />;
      case 19:
        return <Step19_CurrentWeight onContinue={updateData} height={quizData.height} />;
      case 20:
        return <Step20_TargetWeight onContinue={updateData} currentWeight={quizData.currentWeight} />;
      case 21:
        return <Step21_Age onContinue={updateData} />;
      case 22:
        return <Step22_Summary onContinue={nextStep} data={quizData} />;
      case 23:
        return <Step23_WeightLossTimeline onContinue={nextStep} data={quizData} />;
      case 24:
        return <Step24_MealsPerDay onContinue={updateData} />;
      case 25:
        return <Step25_ExcludeProducts_Protein onContinue={updateData} />;
      case 26:
        return <Step26_ExcludeProducts_Veggies onContinue={updateData} />;
      case 27:
        return <Step27_ExcludeProducts_Grains onContinue={updateData} />;
      case 28:
        return <Step28_Loading onComplete={nextStep} />;
      case 29:
        return <Step29_GoodNews onContinue={nextStep} />;
      case 30:
        return <Step30_Summary2 onContinue={nextStep} data={quizData} />;
      case 31:
        return <Step31_FatBurningRate onContinue={nextStep} />;
      case 32:
        return <Step32_PlanReady onContinue={nextStep} />;
      case 33:
        return <Step33_WhatYouGet onContinue={nextStep} />;
      case 34:
        return <Step34_Testimonials onContinue={nextStep} />;
      case 35:
        return <Step35_FinalOffer data={quizData} />;
      default:
        return <div>Fim do Quiz</div>;
    }
  };

  return (
    <div className="dietamediterranea-bg min-h-screen w-full">
        <main className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-4xl">
                {renderStep()}
            </div>
        </main>
    </div>
  );
}
