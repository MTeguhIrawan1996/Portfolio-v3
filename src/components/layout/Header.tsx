import * as React from 'react';
import { HiMoon } from 'react-icons/hi';

import { IconButton } from '@/components/elements';

const links = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'About' },
  { href: '/', label: 'Work' },
  { href: '/', label: 'Skill' },
  { href: '/', label: 'Contact' },
];

export default function Header() {
  return (
    <header className='bg-transparent'>
      <nav
        className='layout flex h-16 items-center justify-between'
        aria-label='Global'
      >
        <div className='flex gap-x-6'>
          {links.map((value, i) => (
            <a
              href='#'
              className='hover:text-hover animated-hover text-dark text-lg font-bold leading-6'
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
            className='animated-hover hover:text-hover text-dark hover:border-hover border-dark group hover:bg-transparent'
          />
        </div>
      </nav>
    </header>
  );
}
