import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

export default function Home() {
  return (
    <main className=' container mx-auto py-5 min-h-screen flex flex-col'>
      {/* <Navbar /> */}
      <Navbar />
      <Hero />
    </main>
  );
}
