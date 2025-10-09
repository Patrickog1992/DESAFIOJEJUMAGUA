'use client';
import { Suspense, useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Step1_IntroVSL } from '@/components/mounjaromental/step1-intro-vsl';
import { Step2_GenderSelection } from '@/components/mounjaromental/step2-gender-selection';
import { Step3_AgeSelection } from '@/components/mounjaromental/step3-age-selection';
import { Step4_SocialProof } from '@/components/mounjaromental/step4-social-proof';
import { Step5_WeightLossReason } from '@/components/mounjaromental/step5-weight-loss-reason';
import { Step6_KnowledgeCheck } from '@/components/mounjaromental/step6-knowledge-check';
import { Step7_MindBodyInfo } from '@/components/mounjaromental/step7-mind-body-info';
import { Step8_NutritionistRecommendation } from '@/components/mounjaromental/step8-nutritionist-recommendation';
import { Step9_PersonalStruggles } from '@/components/mounjaromental/step9-personal-struggles';
import { Step10_Testimonial } from '@/components/mounjaromental/step10-testimonial';
import { Step11_TimeWithProblem } from '@/components/mounjaromental/step11-time-with-problem';
import { Step12_PhysicalDifficulties } from '@/components/mounjaromental/step12-physical-difficulties';
import { Step13_LifeImpact } from '@/components/mounjaromental/step13-life-impact';
import { Step14_BrainStomachInfo } from '@/components/mounjaromental/step14-brain-stomach-info';
import { Step15_EatingHabits } from '@/components/mounjaromental/step15-eating-habits';
import { Step16_Cravings } from '@/components/mounjaromental/step16-cravings';
import { Step17_BrainBodyDisconnectInfo } from '@/components/mounjaromental/step17-brain-body-disconnect-info';
import { Step18_ActivityLevel } from '@/components/mounjaromental/step18-activity-level';
import { Step19_FutureSelf } from '@/components/mounjaromental/step19-future-self';
import { Step20_Measurements } from '@/components/mounjaromental/step20-measurements';
import { Step21_ProgramTimeline } from '@/components/mounjaromental/step21-program-timeline';
import { Step22_DesiredActivity } from '@/components/mounjaromental/step22-desired-activity';
import { Step23_TimeDedication } from '@/components/mounjaromental/step23-time-dedication';
import { Step24_ProgramIntro } from '@/components/mounjaromental/step24-program-intro';
import { Step25_Loading } from '@/components/mounjaromental/step25-loading';
import { Step26_VitalsResult } from '@/components/mounjaromental/step26-vitals-result';
import { Step27_WeightLossProjection } from '@/components/mounjaromental/step27-weightloss-projection';
import { Step28_BeyondWeightLoss } from '@/components/mounjaromental/step28-beyond-weightloss';
import { Step29_SuccessRate } from '@/components/mounjaromental/step29-success-rate';
import { Step30_FinalOffer } from '@/components/mounjaromental/step30-final-offer';


export type MounjaroMentalQuizData = {
    gender?: 'male' | 'female';
    age?: string;
    weightLossReason?: string[];
    knowledge?: string;
    recommendedByNutritionist?: 'Sim' | 'Não';
    personalStruggles?: string[];
    timeWithProblem?: string;
    physicalDifficulties?: string[];
    lifeImpact?: string[];
    eatingHabits?: string[];
    cravings?: string[];
    activityLevel?: string;
    futureSelf?: string[];
    height?: number;
    weight?: number;
    targetWeight?: number;
    desiredActivity?: string[];
    timeDedication?: string;
};

const steps = [
    'intro-vsl', 'gender-selection', 'age-selection', 'social-proof', 'weight-loss-reason',
    'knowledge-check', 'mind-body-info', 'nutritionist-recommendation', 'personal-struggles',
    'testimonial', 'time-with-problem', 'physical-difficulties', 'life-impact',
    'brain-stomach-info', 'eating-habits', 'cravings', 'brain-body-disconnect-info',
    'activity-level', 'future-self', 'measurements', 'program-timeline', 'desired-activity',
    'time-dedication', 'program-intro', 'loading', 
    'vitals-result', 'weightloss-projection', 'beyond-weightloss', 'success-rate', 'final-offer'
];

function MounjaroMentalPageContent() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [quizData, setQuizData] = useState<MounjaroMentalQuizData>({});

  const handleNextStep = (data: Partial<MounjaroMentalQuizData>) => {
    const updatedData = { ...quizData, ...data };
    setQuizData(updatedData);

    const nextStepIndex = currentStepIndex + 1;

    if (nextStepIndex < steps.length) {
      setCurrentStepIndex(nextStepIndex);
      window.scrollTo(0, 0);
    }
  };

  const currentStep = steps[currentStepIndex];

  const renderStep = () => {
    switch (currentStep) {
        case 'intro-vsl':
            return <Step1_IntroVSL onContinue={() => handleNextStep({})} />;
        case 'gender-selection':
            return <Step2_GenderSelection onContinue={handleNextStep} />;
        case 'age-selection':
            return <Step3_AgeSelection onContinue={handleNextStep} />;
        case 'social-proof':
            return <Step4_SocialProof onContinue={() => handleNextStep({})} />;
        case 'weight-loss-reason':
            return <Step5_WeightLossReason onContinue={handleNextStep} />;
        case 'knowledge-check':
            return <Step6_KnowledgeCheck onContinue={handleNextStep} />;
        case 'mind-body-info':
            return <Step7_MindBodyInfo onContinue={() => handleNextStep({})} />;
        case 'nutritionist-recommendation':
            return <Step8_NutritionistRecommendation onContinue={handleNextStep} />;
        case 'personal-struggles':
            return <Step9_PersonalStruggles onContinue={handleNextStep} />;
        case 'testimonial':
            return <Step10_Testimonial onContinue={() => handleNextStep({})} />;
        case 'time-with-problem':
            return <Step11_TimeWithProblem onContinue={handleNextStep} />;
        case 'physical-difficulties':
            return <Step12_PhysicalDifficulties onContinue={handleNextStep} />;
        case 'life-impact':
            return <Step13_LifeImpact onContinue={handleNextStep} />;
        case 'brain-stomach-info':
            return <Step14_BrainStomachInfo onContinue={() => handleNextStep({})} />;
        case 'eating-habits':
            return <Step15_EatingHabits onContinue={handleNextStep} />;
        case 'cravings':
            return <Step16_Cravings onContinue={handleNextStep} />;
        case 'brain-body-disconnect-info':
            return <Step17_BrainBodyDisconnectInfo onContinue={() => handleNextStep({})} />;
        case 'activity-level':
            return <Step18_ActivityLevel onContinue={handleNextStep} />;
        case 'future-self':
            return <Step19_FutureSelf onContinue={handleNextStep} />;
        case 'measurements':
            return <Step20_Measurements onContinue={handleNextStep} />;
        case 'program-timeline':
            return <Step21_ProgramTimeline onContinue={() => handleNextStep({})} />;
        case 'desired-activity':
            return <Step22_DesiredActivity onContinue={handleNextStep} />;
        case 'time-dedication':
            return <Step23_TimeDedication onContinue={handleNextStep} />;
        case 'program-intro':
            return <Step24_ProgramIntro onContinue={() => handleNextStep({})} />;
        case 'loading':
            return <Step25_Loading onComplete={() => handleNextStep({})} />;
        case 'vitals-result':
            return <Step26_VitalsResult data={quizData} onContinue={() => handleNextStep({})} />;
        case 'weightloss-projection':
            return <Step27_WeightLossProjection data={quizData} onContinue={() => handleNextStep({})} />;
        case 'beyond-weightloss':
            return <Step28_BeyondWeightLoss onContinue={() => handleNextStep({})} />;
        case 'success-rate':
            return <Step29_SuccessRate onContinue={() => handleNextStep({})} />;
        case 'final-offer':
            return <Step30_FinalOffer data={quizData} />;
        default:
            return <Step1_IntroVSL onContinue={() => handleNextStep({})} />;
    }
  };
  
  const isFinalPage = currentStep === 'final-offer';

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-50 font-body">
       <div className={`flex flex-col items-center justify-center flex-grow w-full ${isFinalPage ? 'max-w-7xl' : 'mb-8'}`}>
        {!isFinalPage && (
            <Image
                src="https://i.imgur.com/i9a6B8R.png"
                alt="MounjaroMental Logo"
                width={100}
                height={100}
                className="mb-4"
            />
        )}
        <div className={isFinalPage ? "w-full" : "w-full max-w-2xl"}>
            {renderStep()}
        </div>
      </div>
      {!isFinalPage && (
        <footer className="w-full text-center text-sm text-muted-foreground mt-8">
            <p>MounjaroMental &copy; {new Date().getFullYear()} Todos os direitos reservados</p>
        </footer>
      )}
    </main>
  );
}

export default function MounjaroMentalPage() {
    return (
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Carregando...</div>}>
            <MounjaroMentalPageContent />
        </Suspense>
    )
}
