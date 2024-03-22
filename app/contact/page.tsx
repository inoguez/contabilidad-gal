// import { Input } from '@/components/ui/input';
'use client';
import { Suspense } from 'react';
import ContactForm from '../components/ContactForm';
import { Nfc } from 'lucide-react';
import { motion } from 'framer-motion';

export default function page() {
  return (
    <main className=' container mx-auto max-w-4xl py-4 grow grid md:grid-cols-2 gap-4 justify-center items-start'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Suspense>
          <ContactForm />
        </Suspense>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className='flex flex-col space-y-5 max-w-md  w-full bg-transparent border-[1px] rounded-lg border-mountain-mist-900 p-4 h-fit items-center row-start-1 '
      >
        <div className='grid grid-cols-[1fr_auto] gap-2 items-center justify-center'>
          <h1 className='text-vermilion-400 text-3xl font-medium'>
            Cotiza algún servicio
          </h1>
          <Nfc className='size-36 text-vermilion-400' />
        </div>
        <p className='text-lg '>
          ¡Nos encantaría ayudarte a simplificar tus procesos contables y
          financieros! Cotiza algún servicio con nosotros y descubre cómo
          podemos optimizar tu gestión contable para que puedas enfocarte en
          hacer crecer tu negocio.
        </p>
      </motion.div>
    </main>
  );
}
