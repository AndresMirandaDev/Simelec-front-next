import { Box, Card, Text } from '@radix-ui/themes';
import React from 'react';

const months: { [key: string]: string } = {
  0: 'Enero',
  1: 'Febrero',
  2: 'Marzo',
  3: 'Abril',
  4: 'Mayo',
  5: 'Junio',
  6: 'Julio',
  7: 'Agosto',
  8: 'Septiembre',
  9: 'Octubre',
  10: 'Noviembre',
  11: 'Diciembre',
};

const weekDays: { [key: string]: string } = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado',
};

const DateVisualizer = () => {
  const currentDate = new Date();

  return (
    <Card>
      <Box className="flex-col justify-center items-center">
        <Text className="block text-2xl text-center mb-5 text-zinc-600">
          {weekDays[currentDate.getDay()]}
        </Text>
        <Text className="text-6xl font-bold block text-center mb-5 text-zinc-600">
          {currentDate.getDate()}
        </Text>
        <Text className="block text-2xl text-center text-zinc-600">
          {months[currentDate.getMonth()]}
        </Text>
      </Box>
    </Card>
  );
};

export default DateVisualizer;
