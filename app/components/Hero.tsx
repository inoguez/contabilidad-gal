'use client';
import Image from 'next/image';
import { ContactButton } from './ContactButton';
import { motion } from 'framer-motion';
import Jacs from '../../public/img/jacs.svg';
import Reyit from '../../public/img/reyit.svg';
import Link from 'next/link';
import { HandCoins } from 'lucide-react';

export const Hero = () => {
  return (
    <section className='w-full flex flex-col  lg:flex-row gap-10 flex-1 align-middle'>
      <div className='flex flex-col gap-6 items-center lg:items-start justify-center text-balance text-center lg:text-left p-4'>
        <div className='flex flex-col gap-6'>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className='text-7xl font-thin text-balance'
          >
            <span className='font-semibold text-vermilion-400'>Potencia</span>{' '}
            tu éxito{' '}
            <span className='font-semibold text-vermilion-400'>Financiero</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className='text-2xl font-light'
          >
            Soluciones contables adaptadas a tus necesidades
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className='flex gap-4 items-center justify-center lg:justify-start'
          >
            <ContactButton className='w-fit text-xl' />
            <Link
              href={'/services'}
              className='w-fit text-lg text-vermilion-400 hover:text-vermilion-200'
            >
              Servicios
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='flex flex-col gap-4'
        >
          <h2 className='font-semibold text-2xl'>Nuestros clientes</h2>
          <div className='flex gap-4'>
            <Link
              href={'https://di-jacs.com.mx/'}
              target='_blank'
              className='p-4 border-[1px] border-mountain-mist-500 rounded-md grid place-content-center hover:scale-105 transition-transform ease-in-out'
            >
              <Image src={Jacs} alt='jacslogo' width={130} height={130} />
            </Link>
            <Link
              href={'https://reyit.com.mx/'}
              target='_blank'
              className='p-4 border-[1px] border-mountain-mist-500 rounded-md grid place-content-center hover:scale-105 transition-transform ease-in-out'
            >
              <Image src={Reyit} alt='reyitlogo' width={130} height={130} />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className='self-center justify-self-center '>
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          strokeLinejoin='round'
          className='lucide lucide-circle-dollar-sign text-vermilion-400 size-80 lg:size-[500px]'
        >
          <motion.circle
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
            cx='12'
            cy='12'
            r='10'
          />
          <motion.path
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
            d='M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8'
          />
          <motion.path
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
            d='M12 18V6'
          />
        </motion.svg>
        {/* <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          strokeLinejoin='round'
          className='lucide lucide-dollar-sign text-vermilion-400 size-80 lg:size-[500px]'
        >
          <motion.line
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
            x1='12'
            x2='12'
            y1='2'
            y2='22'
          />
          <motion.path
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
            d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
          />
        </motion.svg> */}
        {/* <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='1.25'
          stroke-linecap='round'
          strokeLinejoin='round'
          className='lucide lucide-vault  text-vermilion-400 size-80 lg:size-[500px]'
        >
          <motion.rect
            width='18'
            height='18'
            x='3'
            y='3'
            rx='2'
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
          />
          <motion.circle
            cx='7.5'
            cy='7.5'
            r='.5'
            fill='currentColor'
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
          />
          <motion.path
            d='m7.9 7.9 2.7 2.7'
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
          />
          <motion.circle
            cx='16.5'
            cy='7.5'
            r='.5'
            fill='currentColor'
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
          />
          <motion.path
            d='m13.4 10.6 2.7-2.7'
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
          />
          <motion.circle
            cx='7.5'
            cy='16.5'
            r='.5'
            fill='currentColor'
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
          />
          <motion.path
            d='m7.9 16.1 2.7-2.7'
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
          />
          <motion.circle
            cx='16.5'
            cy='16.5'
            r='.5'
            fill='currentColor'
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
          />
          <motion.path
            d='m13.4 13.4 2.7 2.7'
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
          />
          <motion.circle
            cx='12'
            cy='12'
            r='2'
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1.5, strokeWidth: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1,
            }}
          />
        </motion.svg> */}
      </div>
    </section>
  );
};
