import { Box, Card, Text } from '@radix-ui/themes';
import React from 'react';
import { LuConstruction } from 'react-icons/lu';

const ActiveProjects = () => {
  return (
    <Card className="w-full " variant="ghost">
      <Box className="flex">
        <Box className="text-4xl text-slate-100 bg-[var(--accent-9)] w-2/5 flex items-center justify-center rounded-lg">
          <LuConstruction />
        </Box>
        <Box className="w-3/5">
          <Box className="w-full flex justify-center">
            <Text className="text-center">Proyectos activos</Text>
          </Box>
          <Box className="w-full flex justify-center">
            <Text className="text-4xl font-bold text-[var(--accent-9)]">
              11
            </Text>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ActiveProjects;
