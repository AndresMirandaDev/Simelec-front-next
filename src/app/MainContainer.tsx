'use client';
import { Container } from '@radix-ui/themes';
import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import React, { PropsWithChildren } from 'react';

const MainContainer = ({ children }: PropsWithChildren) => {
  const { data, status } = useSession();

  return (
    <Container
      className={classNames({
        'ml-20': status === 'authenticated',
      })}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
