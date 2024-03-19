'use client';
import HandShake from '../components/icons/HandShake';
import { motion } from 'framer-motion';

export default function page() {
  return (
    <main className=' container mx-auto py-5 grow grid md:grid-cols-[1fr_auto] gap-4 items-start'>
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
        <span>
          En Contabilidad GAL, nos enorgullece ofrecer soluciones integrales en
          el ámbito contable, fiscal, humano y financiero. Con más de 30 años de
          experiencia en el sector. Nuestro equipo está compuesto por
          profesionales altamente calificados y comprometidos, que se esfuerzan
          por proporcionar un servicio excepcional a cada uno de nuestros
          clientes.
        </span>
        <span>
          Nos dedicamos a entender las necesidades específicas de tu empresa
          para brindarte soluciones personalizadas que impulsen tu crecimiento y
          éxito. En un entorno empresarial cada vez más complejo, entendemos la
          importancia de contar con asesoramiento experto y confiable.
        </span>
        <span>
          Es por eso que nos esforzamos por mantenernos actualizados con las
          últimas regulaciones y tendencias del mercado, para poder ofrecerte
          las mejores estrategias y recomendaciones. En Contabilidad GAL, no
          solo nos dedicamos a cumplir con tus expectativas, sino que nos
          esforzamos por superarlas en cada interacción. Nos comprometemos a
          proporcionarte un servicio excepcional, transparente y orientado a
          resultados que te permita alcanzar tus metas comerciales con confianza
          y tranquilidad. Ya sea que estés buscando optimizar tus procesos
          contables, maximizar tus beneficios fiscales, gestionar tu capital
          humano o planificar tus finanzas corporativas, estamos aquí para
          ayudarte en cada paso del camino.
        </span>
        <span>
          Gracias por considerar a Contabilidad GAL como tu socio confiable en
          el éxito empresarial. Esperamos tener la oportunidad de trabajar
          contigo y demostrarte el valor que podemos agregar a tu negocio.
          ¡Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus
          objetivos financieros!
        </span>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className='grid  gap-4 row-start-1 md:col-start-2 h-full'
      >
        <div className='grid place-content-center border-[1px] border-mountain-mist-900 p-4 rounded-lg'>
          <HandShake width='400px' height='400px' />
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='border-[1px] border-mountain-mist-900 p-4 rounded-lg'></div>
          <div className='border-[1px] border-mountain-mist-900 p-4 rounded-lg'></div>
          <div className='border-[1px] border-mountain-mist-900 p-4 rounded-lg'></div>
          <div className='border-[1px] border-mountain-mist-900 p-4 rounded-lg'></div>
        </div>
      </motion.div>
    </main>
  );
}
