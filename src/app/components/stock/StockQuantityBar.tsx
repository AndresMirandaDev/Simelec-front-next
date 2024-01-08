import { Box, Text } from '@radix-ui/themes';
import classNames from 'classnames';
import React from 'react';

interface Props {
  stock: number;
  max: number;
  name: string;
}

const StockQuantityBar = ({ stock, max, name }: Props) => {
  return (
    <Box className="m-2 md:m-5 flex justify-between items-center">
      <Text className="pr-3 font-semibold text-zinc-500 sm:block md:inline">
        {name}
      </Text>
      <progress
        className={classNames({
          'progress w-10 md:w-56 ': true,
          'progress-success': stock > max / 2,
          'progress-warning': stock <= max / 2 && stock > 20,
          'progress-error': stock <= 20,
        })}
        value={stock}
        max={max}
      ></progress>
      <Text className="pl-3 font-semibold sm:block md:inline">{stock}</Text>
    </Box>
  );
};

export default StockQuantityBar;
