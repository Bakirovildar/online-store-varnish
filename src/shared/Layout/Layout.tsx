import React, {ReactNode} from 'react';

interface ILayout {
  children: ReactNode
}

export function Layout({children}: ILayout) {
  return (
      <>
        {children}
      </>
  );
}
