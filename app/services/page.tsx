'use client';
import Link from 'next/link';
import { SERVICES } from '../constants/constants';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Human from '../components/icons/human';
const container = {
  hidden: { opacity: 0, overflow: 'hidden' },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
export default function page() {
  return (
    <main className=' container mx-auto py-5 grow flex flex-col gap-4 items-center'>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className='text-4xl '
      >
        Servicios
      </motion.h1>
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='grid md:grid-cols-2 lg:grid-cols-4   gap-4  py-1'
      >
        {SERVICES.map((e) => (
          <motion.article
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            variants={item}
            key={e.id}
            className=' grid  gap-2 items-start grid-rows-[auto_auto_auto_1fr_auto]   justify-center border-[1px] p-4 rounded-lg border-mountain-mist-500'
          >
            <e.Icon size={128} className='self-center place-self-center ' />
            {/* <Human /> */}
            <h3 className='text-3xl font-semibold self-center place-self-center text-vermilion-400'>
              {e.title}
            </h3>
            <p className='font-normal overflow-hidden'>{e.description}</p>
            <ul className='list-outside px-2 self-start'>
              <h4 className='text-center font-semibold text-lg my-2'>
                Características
              </h4>
              {e.characteristics.map((k) => (
                <li
                  key={k}
                  className=' grid grid-cols-[auto_1fr] gap-1 items-start'
                >
                  <Check className='w-4 h-4' />
                  <span>{k}</span>
                </li>
              ))}
            </ul>
            <Link
              className=' bg-vermilion-500 text-vermilion-100 px-4 py-2 rounded-lg hover:bg-mountain-mist-950 transition-colors duration-200 ease-in-out font-bold h-fit self-end'
              href={`/contact?service=${e.id}`}
            >
              Cotizar
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </main>
  );
}
