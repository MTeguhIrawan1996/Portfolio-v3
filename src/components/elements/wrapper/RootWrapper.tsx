import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IRootWrapperProps {
  children: React.ReactNode;
}

const RootWrapper: React.FC<IRootWrapperProps> = ({ children }) => {
  return <div className='root-wrapper'>{children}</div>;
};

export default RootWrapper;
