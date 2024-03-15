import { Logo } from '@/app/components/Logo';
import Link from 'next/link';
import { NAV_LINKS } from '../constants/constants';

export const Navbar = () => {
  return (
    <nav className='flex items-center'>
      <Logo />
      <ul className='flex gap-4 grow items-center justify-end'>
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
          <button className=' bg-vermilion-500 text-vermilion-100 px-4 py-2 rounded-lg hover:bg-mountain-mist-950 transition-colors duration-200 ease-in-out font-bold'>
            Contactar
          </button>
        </li>
      </ul>
    </nav>
  );
};
