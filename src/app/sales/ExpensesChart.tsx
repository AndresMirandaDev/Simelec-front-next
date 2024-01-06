'use client';
import { Card } from '@radix-ui/themes';
import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  Tooltip,
  Text,
  Line,
} from 'recharts';

const ExpensesChart = () => {
  const data = [
    { amount: 2000000, month: 'January' },
    { amount: 500000, month: 'February' },
    { amount: 1000000, month: 'March' },
    { amount: 600000, month: 'April' },
    { amount: 900000, month: 'May' },
    { amount: 1000000, month: 'June' },
    { amount: 1800000, month: 'July' },
    { amount: 1400000, month: 'August' },
    { amount: 1600000, month: 'September' },
    { amount: 1200000, month: 'October' },
    { amount: 200000, month: 'November' },
    { amount: 300000, month: 'December' },
  ];

  return (
    <Card style={{ width: '100%' }} className="shadow-lg">
      <Text className="md:text-2xl">Gastos año 2023</Text>
      <ResponsiveContainer width={'100%'} height={300}>
        <BarChart data={data}>
          <XAxis dataKey={'month'} className="hidden md:block" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar
            dataKey={'amount'}
            barSize={40}
            style={{ fill: 'var(--accent-9)' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ExpensesChart;
