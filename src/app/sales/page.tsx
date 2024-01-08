import { Box, Flex, Grid, Text } from '@radix-ui/themes';
import React from 'react';
import ExpensesChart from './ExpensesChart';
import MaterialsChart from './MaterialsChart';
import TotalExpenses from './TotalExpenses';

const SalesPage = () => {
  return (
    <Grid columns={{ sm: '1', md: '2' }} flow="row" gap="4">
      <ExpensesChart />
      <MaterialsChart />
      <TotalExpenses />
    </Grid>
  );
};

export default SalesPage;
