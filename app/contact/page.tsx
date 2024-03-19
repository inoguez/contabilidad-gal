// import { Input } from '@/components/ui/input';

import { Suspense } from 'react';
import ContactForm from '../components/ContactForm';

export default function page() {
  return (
    <main className=' container mx-auto py-5 grow flex flex-col gap-4 items-center'>
      <Suspense>
        <ContactForm />
      </Suspense>
    </main>
  );
}
