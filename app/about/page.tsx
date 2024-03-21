'use client';
import HandShake from '../components/icons/HandShake';
import { motion } from 'framer-motion';
import { ABOUT_CHARACTERISTICS, SPEECH_ABOUT } from '../constants/constants';

export default function page() {
  return (
    <main className=' container mx-auto py-5 grow grid md:grid-cols-[70%_30%] gap-4 items-start'>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className='h-full flex flex-col gap-4 border-[1px] border-mountain-mist-900 p-10 rounded-lg text-xl font-normal'
      >
        <h1 className='font-semibold text-4xl'>Nosotros</h1>
        <p className='whitespace-pre-line'>{SPEECH_ABOUT}</p>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className='grid grid-rows-[auto_1fr]  gap-4 row-start-1 md:col-start-2 h-full'
      >
        <div className='grid place-content-center border-[1px] border-mountain-mist-900 p-4 rounded-lg aspect-square'>
          <HandShake />
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {ABOUT_CHARACTERISTICS.map((e) => (
            <div
              key={e.text}
              className='flex flex-col justify-center items-center gap-2 border-[1px] border-mountain-mist-900 p-4 rounded-lg'
            >
              <e.icon
                width={'5rem'}
                height={'5rem'}
                className=' hover:text-vermilion-400 transition-all duration-150 ease-in-out hover:animate-pulse'
              />
              <span className='text-center font-thin '>{e.text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
