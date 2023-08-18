import * as React from 'react';

interface IInnerWrapperProps {
  children: React.ReactNode;
}

const InnerWrapper: React.FC<IInnerWrapperProps> = ({ children }) => {
  return (
    <section className='inner-wrapper'>
      <div className='container-wrapper'>{children}</div>
    </section>
  );
};

export default InnerWrapper;
