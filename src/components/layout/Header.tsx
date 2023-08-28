import { useTheme } from 'next-themes';
import * as React from 'react';
import { HiMoon } from 'react-icons/hi';

import { IconButton } from '@/components/elements';

import clsxm from '@/utils/lib/clsxm';

// import useStoreTheme from '@/utils/store/useStoreTheme';

const links = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'About' },
  { href: '/', label: 'Work' },
  { href: '/', label: 'Skill' },
  { href: '/', label: 'Contact' },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const navbarRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      // Mendapatkan nilai scroll position
      const scrollPos = window.scrollY;

      // Menentukan apakah navbar perlu di-fix atau tidak
      if (scrollPos > 64) {
        navbarRef.current?.classList.add('shadow-md');
      } else {
        navbarRef.current?.classList.remove('shadow-md');
      }
    };
    // Menambahkan event listener pada event scroll
    window.addEventListener('scroll', handleScroll);

    // Menghapus event listener saat component di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      className={clsxm('bg-light dark:bg-dark sticky top-0 z-50')}
    >
      <nav
        className='layout flex h-16 items-center justify-between'
        aria-label='Global'
      >
        <div className='flex gap-x-6'>
          {links.map((value, i) => (
            <a
              href='#'
              className='hover:text-hover animated-hover text-dark dark:text-light dark:hover:text-hover text-base font-semibold leading-6'
              key={i}
            >
              {value.label}
            </a>
          ))}
        </div>
        <div className='flex flex-1 justify-end'>
          <IconButton
            icon={HiMoon}
            variant='outline'
            className='animated-hover hover:text-hover dark:hover:text-hover text-dark dark:text-light hover:border-hover border-dark dark:border-light group hover:bg-transparent active:bg-transparent'
            onClick={() =>
              theme === 'dark' ? setTheme('light') : setTheme('dark')
            }
          />
        </div>
      </nav>
    </header>
  );
}
