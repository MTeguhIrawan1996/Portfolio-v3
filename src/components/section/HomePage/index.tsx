import * as React from 'react';

import { RootWrapper } from '@/components/elements';
import About from '@/components/section/HomePage/parts/About';
import Hero from '@/components/section/HomePage/parts/Hero';

const Home = () => {
  return (
    <RootWrapper>
      <Hero />
      <About />
    </RootWrapper>
  );
};

export default Home;
