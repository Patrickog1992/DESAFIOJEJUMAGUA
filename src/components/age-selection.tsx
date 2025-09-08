import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type AgeSelectionProps = {
  onSelectAge: (ageRange: string) => void;
};

const ageOptions = [
  {
    range: '18 - 26',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/plBUBd3x9H-734.webp',
  },
  {
    range: '27 - 38',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/B6rsyI0Q5b-734.webp',
  },
  {
    range: '39 - 50',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/v_d79rax5a-734.webp',
  },
  {
    range: '51 +',
    imageUrl:
      'https://v3.certifiedfasting.com/pt-pt/g-22m-eur/img/jkzsicYwBF-734.webp',
  },
];

export function AgeSelection({ onSelectAge }: AgeSelectionProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto text-center shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-headline">
          Vamos ajustar o seu Jejum de acordo com sua idade
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ageOptions.map((option) => (
            <div
              key={option.range}
              className={cn(
                'rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary hover:ring-2 hover:ring-primary'
              )}
              onClick={() => onSelectAge(option.range)}
            >
              <Image
                src={option.imageUrl}
                alt={`Idade ${option.range}`}
                width={200}
                height={200}
                className="rounded-md w-full h-auto object-contain aspect-square bg-muted"
                data-ai-hint="person portrait"
              />
              <p className="font-semibold text-lg mt-3">{option.range}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
