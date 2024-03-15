import { Logo } from '@/app/components/Logo';
import Link from 'next/link';
import { NAV_LINKS } from '../constants/constants';
import { ContactButton } from './ContactButton';

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
          <ContactButton />
        </li>
      </ul>
    </nav>
  );
};
