import { Box, Flex, Text } from '@radix-ui/themes';
import React from 'react';
import ExpensesChart from './ExpensesChart';
import MaterialsChart from './MaterialsChart';

const SalesPage = () => {
  return (
    <Flex className="flex-col lg:flex-row " gap="4">
      <ExpensesChart />
      <MaterialsChart />
    </Flex>
  );
};

export default SalesPage;
