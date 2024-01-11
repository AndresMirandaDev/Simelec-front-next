'use client';
import { Box, Card } from '@radix-ui/themes';
import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { FaTruckRampBox } from 'react-icons/fa6';

const materials = [
  { month: 'Ene', reEntered: 163, outOfStock: 3 },
  { month: 'Feb', reEntered: 200, outOfStock: 5 },
  { month: 'Mar', reEntered: 180, outOfStock: 8 },
  { month: 'Abr', reEntered: 220, outOfStock: 10 },
  { month: 'May', reEntered: 250, outOfStock: 7 },
  { month: 'Jun', reEntered: 190, outOfStock: 4 },
  { month: 'Jul', reEntered: 210, outOfStock: 6 },
  { month: 'Ago', reEntered: 230, outOfStock: 9 },
  { month: 'Sep', reEntered: 170, outOfStock: 12 },
  //   { month: 'Oct', reEntered: 240, outOfStock: 15 },
  //   { month: 'Nov', reEntered: 200, outOfStock: 18 },
  //   { month: 'Dic', reEntered: 280, outOfStock: 20 },
];

const ReEnteredMaterials = () => {
  return (
    <Card style={{ width: '100%' }} className="shadow-lg p-3">
      <Box className="flex justify-center items-center">
        <Box className="mr-3 font-zinc-600 text-xl text-zinc-600">
          <FaTruckRampBox />
        </Box>
        <Text className="text-xl font-bold text-zinc-600">
          Movimiento de materiales
        </Text>
      </Box>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={materials}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="reEntered" stroke="var(--accent-9)" />
          <Line type="monotone" dataKey="outOfStock" stroke="#FF6666" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ReEnteredMaterials;
