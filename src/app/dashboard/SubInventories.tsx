import { Box, Card, Text } from '@radix-ui/themes';
import React from 'react';
import { FaBoxes } from 'react-icons/fa';

const SubInventories = () => {
  return (
    <Card className="w-full " variant="ghost">
      <Box className="flex">
        <Box className="text-4xl text-slate-100 bg-[var(--accent-9)] w-2/5 flex items-center justify-center rounded-lg">
          <FaBoxes />
        </Box>
        <Box className="w-3/5">
          <Box className="w-full flex justify-center">
            <Text className="text-center">Sub-bodegas</Text>
          </Box>
          <Box className="w-full flex justify-center">
            <Text className="text-4xl font-bold text-[var(--accent-9)]">8</Text>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default SubInventories;
