'use client';
import { ContactButton } from './ContactButton';
import { motion } from 'framer-motion';
export const Hero = () => {
  return (
    <section className='flex  items-center justify-center flex-1 '>
      <div className='flex flex-col gap-2 flex-1 items-center text-balance text-center'>
        <div className='p-1 overflow-hidden'>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className='text-7xl font-semibold'
          >
            Simplifica tu gestión financiera
          </motion.h1>
        </div>

        <div className='p-1 overflow-hidden'>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className='text-4xl font-light'
          >
            Soluciones contables adaptadas a tus necesidades
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <ContactButton className='w-fit ' />
        </motion.div>
      </div>
    </section>
  );
};
