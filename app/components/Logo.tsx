import Image from 'next/image';
import Logotype from '../../public/img/LOGO.svg';
import Link from 'next/link';
export const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={Logotype} alt='Logotipo de gal' width={100} height={100} />
    </Link>
  );
};
