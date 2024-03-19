import Link from 'next/link';
import { cn } from './lib/utils';

type Props = {
  className?: string;
};
export const ContactButton: React.FC<Props> = ({ className, ...props }) => {
  return (
    <Link
      href={'/contact'}
      className={cn(
        className,
        'bg-vermilion-500 text-vermilion-100 px-4 py-2 rounded-lg hover:bg-mountain-mist-950 transition-colors duration-200 ease-in-out font-bold'
      )}
    >
      Contactar
    </Link>
  );
};
