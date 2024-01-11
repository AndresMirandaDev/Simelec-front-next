'use client';
import { Box, Card, Section, Text } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';

import { BiSolidUpArrow } from 'react-icons/bi';
import { BiSolidDownArrow } from 'react-icons/bi';

const data = [
  { amount: 2000000, month: 'Ene' },
  { amount: 500000, month: 'Feb' },
  { amount: 1000000, month: 'Mar' },
  { amount: 600000, month: 'Abr' },
  { amount: 900000, month: 'May' },
  { amount: 1000000, month: 'Jun' },
  { amount: 1800000, month: 'Jul' },
  { amount: 1400000, month: 'Ago' },
  { amount: 1600000, month: 'Sep' },
  { amount: 1200000, month: 'Oct' },
  { amount: 200000, month: 'Nov' },
  { amount: 300000, month: 'Dic' },
];

const TotalExpenses = () => {
  const [totalAmount, setTotal] = useState(0);

  useEffect(() => {
    setupData();
  }, []);

  const setupData = () => {
    const total = data.reduce((acc, month) => {
      return acc + month.amount;
    }, 0);
    setTotal(total);
  };
  return (
    <Card
      style={{ backgroundColor: 'rgb(46,110,130)' }}
      className="shadow-lg p-3"
    >
      <Text className="text-xl text-zinc-100 ">Gastos totales</Text>
      <Section size="1" className=" justify-start p-5 flex">
        <Text className="text-4xl font-bold text-zinc-100 text-center">
          ${totalAmount}
        </Text>
      </Section>
      <Text className="text-xl text-zinc-100">Ingresos totales</Text>
      <Section size="1" className=" justify-start p-5 flex">
        <Text className="text-4xl font-bold text-zinc-100 text-center">
          ${totalAmount + 2000000}
        </Text>
      </Section>
      <Text className="text-xl text-zinc-100">Balance</Text>
      <Section size="1" className=" justify-start p-5 flex items-center ">
        {totalAmount + 200000 - totalAmount > 0 && (
          <Box className="mr-5 text-green-500 text-2xl">
            <BiSolidUpArrow />{' '}
          </Box>
        )}
        {totalAmount + 200000 - totalAmount < 0 && (
          <Box className="mr-5 text-red-500 text-2xl">
            <BiSolidDownArrow />{' '}
          </Box>
        )}

        <Text className="text-4xl font-bold text-zinc-100 text-center">
          ${totalAmount + 2000000 - totalAmount}
        </Text>
      </Section>
    </Card>
  );
};

export default TotalExpenses;
