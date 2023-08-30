import * as React from 'react';

import { InnerWrapper } from '@/components/elements';

const About = () => {
  return (
    <InnerWrapper>
      <div className='y-padding mx-auto flex max-w-sm flex-col gap-4 md:max-w-2xl'>
        <h1 className='text-gradient text-center text-xl'>About me</h1>
        <p className='text-primaryText dark:text-light text-center font-medium'>
          Hello, I am a Web Developer specializing in Frontend Development. I
          also possess basic knowledge of Backend Development using Laravel and
          ExpressJs. My journey into the world of web development started back
          in 2019. I have a keen interest in modern technologies such as NextJs,
          TailwindCss, and Mantine UI. I have honed my skills through
          self-directed learning, leveraging online resources like YouTube and
          participating in various online courses. This has provided me with a
          deep understanding of concepts and best practices in the web
          development industry. I strongly believe that technology is the key to
          creating exceptional online experiences, and I am excited to continue
          contributing to the creation of engaging and functional web solutions.
        </p>
      </div>
    </InnerWrapper>
  );
};

export default About;
