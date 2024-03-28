'use client';
import { Logo } from '@/app/components/Logo';
import Link from 'next/link';
import { NAV_LINKS } from '../constants/constants';
import { ContactButton } from './ContactButton';
import { Divide, Menu } from 'lucide-react';
import { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ToggleTheme } from './ToggleTheme';
const variants = {
  open: { width: '100%' },
  closed: { width: 0 },
};
export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  const scrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [isOpen, setIsOpen] = useState(false);
  const backdropFilter = useTransform(scrollYProgress, (v) => {
    console.log(v.toFixed());
    if (document.body.scrollHeight > document.body.clientWidth)
      return `blur(${12 * Number(v.toFixed())}px)`;
    // `blur(${12 * v * 10}px)`;
  });
  const backgroundColor = useTransform(scrollYProgress, (v) => {
    console.log(v.toFixed());
    if (document.body.scrollHeight > document.body.clientWidth) {
      console.log('aaa');
      return `rgba(18, 27, 34, 0.10)`;
    }
    // `blur(${12 * v * 10}px)`;
  });
  const elementStyles = {
    backgroundColor, // Color de fondo con transparencia
    backdropFilter,
    transition: 'backdrop-filter 75 easeInOut', // Transición suave del filtro de desenfoque
  };

  return (
    <motion.nav
      style={elementStyles}
      className='flex items-center justify-between   sticky top-0 p-4 '
    >
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
        className='absolute h-screen bg-mountain-mist-950 flex flex-col gap-2 items-center justify-center text-2xl overflow-hidden'
        initial={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          width: 0,
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
    </motion.nav>
  );
};
