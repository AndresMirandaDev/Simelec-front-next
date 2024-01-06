'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Box, Container, Flex, Text } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';
import { MdDashboard } from 'react-icons/md';
import { FaChartBar } from 'react-icons/fa';

import { GiHamburgerMenu } from 'react-icons/gi';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';

const SideBar = () => {
  const { status } = useSession();
  const [open, setOpen] = useState(false);

  if (status === 'unauthenticated' || status === 'loading') return null;

  return (
    <nav>
      <div
        className={classNames({
          'bg-cyan-500 p-5 mr-5 fixed h-full overflow-auto ease-in-out transition-all duration-300 w-44 justify-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]':
            true,
          'translate-x-0': open,
          '-translate-x-2/3': !open,
        })}
        // className={classNames({
        //   'lg:hidden': true, // Hide on large screens
        //   'bg-cyan-500 p-5 fixed top-0 left-0 w-full z-50': !open, // Bar styles for mobile
        //   'drawer lg:w-64 h-full overflow-auto ease-in-out transition-all duration-300':
        //     open, // Drawer styles for large screens
        // })}
      >
        <Container>
          <Flex direction="column">
            <Box>
              <GiHamburgerMenu
                className="float-right mb-5 cursor-pointer text-2xl text-slate-300 "
                onClick={() => {
                  setOpen(!open);
                }}
              />
            </Box>
            <NavLinks open={open} />
          </Flex>
        </Container>
      </div>
    </nav>
  );
};

export default SideBar;

interface NavlinkProps {
  open: Boolean;
}

const NavLinks = ({ open }: NavlinkProps) => {
  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/dashboard', icon: <MdDashboard /> },
    { label: 'Ventas', href: '/sales', icon: <FaChartBar /> },
  ];

  return (
    <ul>
      {links.map((link) => {
        return (
          <li key={link.href} className="flex items-center mb-4">
            <Link
              className={classNames({
                'text-zinc-600': link.href !== currentPath,
                'text-slate-200 text-2xl transition-all':
                  link.href === currentPath,
                'hover:text-slate-300 transition-colors': true,
                'flex items-center w-full mt-5': true,
                'justify-end text-2xl ': !open,
              })}
              href={link.href}
            >
              <Box>{link.icon}</Box>
              <Box
                className={classNames({
                  'ml-2': true,
                  hidden: !open,
                })}
              >
                <Text>{link.label}</Text>
              </Box>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
