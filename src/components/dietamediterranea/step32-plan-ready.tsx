'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type Props = {
  onContinue: () => void;
  currentWeight?: number;
};

export function Step32_PlanReady({ onContinue, currentWeight }: Props) {

  const weeklyLoss = (currentWeight || 80) > 80 ? 3 : 2;
  const week2 = (currentWeight || 80) - weeklyLoss;
  const week3 = week2 - weeklyLoss;
  const week4 = week3 - weeklyLoss;


  return (
    <Card className="w-full max-w-2xl mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">O seu plano personalizado está pronto!</CardTitle>
        <CardDescription>Obtenha resultados visíveis em 4 semanas</CardDescription>
      </CardHeader>
      <CardContent>
          <Table>
              <TableHeader>
                  <TableRow>
                      <TableHead>O seu peso</TableHead>
                      <TableHead>Agora</TableHead>
                      <TableHead>Após 4 semanas</TableHead>
                  </TableRow>
              </TableHeader>
              <TableBody>
                  <TableRow>
                      <TableCell>Semana 1</TableCell>
                      <TableCell>{currentWeight || 80} kg</TableCell>
                      <TableCell>{(currentWeight || 80) - weeklyLoss} kg</TableCell>
                  </TableRow>
                   <TableRow>
                      <TableCell>Semana 2</TableCell>
                      <TableCell></TableCell>
                      <TableCell>{week2 - weeklyLoss} kg</TableCell>
                  </TableRow>
                   <TableRow>
                      <TableCell>Semana 3</TableCell>
                       <TableCell></TableCell>
                      <TableCell>{week3 - weeklyLoss} kg</TableCell>
                  </TableRow>
                   <TableRow>
                      <TableCell>Semana 4</TableCell>
                       <TableCell></TableCell>
                      <TableCell>{week4 - weeklyLoss} kg</TableCell>
                  </TableRow>
              </TableBody>
          </Table>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={onContinue} size="lg">Continuar</Button>
      </CardFooter>
    </Card>
  );
}
