import { ContactButton } from './ContactButton';

export const Hero = () => {
  return (
    <section className='flex  items-center justify-center flex-1 p-5'>
      <div className='flex flex-col gap-2 flex-1 items-center text-balance text-center'>
        <h1 className='text-7xl font-semibold'>
          Simplifica tu gestión financiera
        </h1>
        <h2 className='text-4xl font-light'>
          Soluciones contables adaptadas a tus necesidades
        </h2>
        <ContactButton className='w-fit ' />
      </div>
    </section>
  );
};
