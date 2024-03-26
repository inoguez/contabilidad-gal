'use client';
import { Logo } from '@/app/components/Logo';
import Link from 'next/link';
import { NAV_LINKS } from '../constants/constants';
import { ContactButton } from './ContactButton';
import { Divide, Menu } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToggleTheme } from './ToggleTheme';
const variants = {
  open: { x: 0 },
  closed: { x: '100%' },
};
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='flex items-center justify-between   sticky top-0 p-4'>
      <Logo />
      <ul className=' gap-4 grow items-center justify-end hidden md:flex'>
        {NAV_LINKS?.map((e) => (
          <li key={e.name}>
            <Link
              href={e.to}
              className='hover:text-vermilion-500 transition-colors duration-200 ease-in-out font-bold'
            >
              {e.name}
            </Link>
          </li>
        ))}
        <li>
          <ContactButton />
        </li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex md:hidden z-50'
      >
        <Menu className='hover:text-vermilion-500' />
      </button>
      {/* <AnimatePresence> */}
      {/* {isOpen && ( */}
      <motion.ul
        className='bg-mountain-mist-950 flex flex-col gap-2 p-4 items-center justify-center text-2xl'
        initial={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          x: '100%',
        }}
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ ease: 'easeInOut', duration: 0.2 }}
        // className='absolute top-0 bottom-0 left-0 right-0 bg-mountain-mist-950 translate-x-full'
      >
        {NAV_LINKS.map((e) => (
          <li key={e.name}>
            <Link onClick={() => setIsOpen(!isOpen)} href={e.to}>
              {e.name}
            </Link>
          </li>
        ))}
        <li>
          <ContactButton />
        </li>
      </motion.ul>
      {/* )} */}
      {/* </AnimatePresence> */}
    </nav>
  );
};
