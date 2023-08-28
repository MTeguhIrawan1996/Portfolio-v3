import Image, { StaticImageData } from 'next/image';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { HiArrowRight } from 'react-icons/hi';

import { Button, InnerWrapper } from '@/components/elements';

import {
  Blub,
  Book,
  Cat,
  Profile,
  ShadowProfile,
  Verse,
} from '@/utils/constant/images';
import clsxm from '@/utils/lib/clsxm';

import HandDown from '../../../../../public/svg/HandDown.svg';

type images = {
  src: StaticImageData;
  className: string;
};

const Hero = () => {
  const { theme } = useTheme();

  const images: images[] = [
    {
      src: Profile,
      className: 'profile-frame',
    },
    {
      src: ShadowProfile,
      className: 'shadow-profile-frame',
    },
    {
      src: Cat,
      className: 'cat-frame',
    },
    {
      src: Verse,
      className: 'verse-frame',
    },
    {
      src: Blub,
      className: 'blub-frame',
    },
    {
      src: Book,
      className: 'book-frame',
    },
  ];

  const imageCallback = React.useCallback((data: images, i: number) => {
    const { src, className } = data;
    return (
      <Image
        key={i}
        src={src}
        quality={80}
        alt='Profile'
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'contain',
          backgroundPosition: 'center',
        }}
        priority
        placeholder='blur'
        className={clsxm('absolute', className)}
      />
    );
  }, []);

  const renderImage = images.map(imageCallback);

  return (
    <InnerWrapper>
      <div className='flex flex-col justify-center p-6 lg:flex-row'>
        <div className='my-auto flex-1 p-6'>
          <div className='mx-auto flex max-w-xl flex-col items-start justify-center gap-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-1'>
                <h3 className='text-primaryText dark:text-light font-semibold'>
                  Hello World!{' '}
                </h3>
                <HandDown style={{ height: '40px', width: '40px' }} />
              </div>
              <h1 className='h0 text-primaryText dark:text-light font-semibold leading-tight'>
                I'm M Teguh Irawan! a{' '}
                <span className='text-hover drop-shadow-lg'>Frontend </span>
                Developer
              </h1>
            </div>
            <span className='text-primaryText dark:text-light'>
              teguhirawan@gmail.com
            </span>

            <Button
              variant={theme === 'dark' ? 'light' : 'dark'}
              className='hover:bg-hover border-none shadow-lg dark:shadow-orange-500/50'
              rightIcon={HiArrowRight}
            >
              Contact me
            </Button>
          </div>
        </div>
        <div className='relative flex h-[450px] flex-1 items-center justify-center'>
          <div className='bg-dark/20 dark:bg-light/30 absolute aspect-square w-[500px] rounded-full shadow-2xl shadow-orange-500/50 drop-shadow-lg' />
          <figure className='relative aspect-square w-[450px]'>
            {renderImage}
          </figure>
        </div>
      </div>
    </InnerWrapper>
  );
};

export default Hero;
