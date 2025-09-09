'use client';

import { QuizStart } from '@/components/quiz-start';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function GenderSelectionPage() {
  const router = useRouter();

  const handleSelectGender = (selectedGender: 'male' | 'female') => {
    router.push(`/desafio?gender=${selectedGender}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col items-center justify-center flex-grow w-full">
        <Image
          src="https://i.imgur.com/OIEU6Mk.png"
          alt="Logo"
          width={100}
          height={100}
          className="mb-8"
        />
        <QuizStart onSelectGender={handleSelectGender} />
      </div>
      <footer className="w-full text-center text-sm text-muted-foreground mt-8">
        <p>Desafio do Jejum de Água todos os direitos reservados</p>
      </footer>
    </main>
  );
}
