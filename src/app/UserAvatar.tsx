'use client';
import {
  Box,
  Container,
  DropdownMenu,
  Flex,
  IconButton,
  Text,
} from '@radix-ui/themes';
import { useSession } from 'next-auth/react';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import Skeleton from './components/Skeleton';
import Link from 'next/link';

const UserAvatar = () => {
  const { data, status } = useSession();

  if (status === 'unauthenticated' || status === 'loading') return null;

  return (
    <nav className="hidden md:block w-screen shadow-sm mb-5">
      <Flex justify="end" mr="5">
        <Box className="text-slate-500 text-2xl flex justify-center items-center h-12 w-12 ">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Box className="cursor-pointer text-cyan-700 text-4xl">
                <FaUserCircle />
              </Box>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="p-2">
              <DropdownMenu.Label>
                <Text className="text-center capitalize" size="2">
                  {data!.user!.name}
                </Text>
              </DropdownMenu.Label>
              <DropdownMenu.Label>
                <Text className="text-center" size="2">
                  {data!.user!.email}
                </Text>
              </DropdownMenu.Label>
              <DropdownMenu.Item className="bg-slate-300">
                <Link href="/api/auth/signout">Cerrar Sesión</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>
      </Flex>
    </nav>
  );
};

export default UserAvatar;
