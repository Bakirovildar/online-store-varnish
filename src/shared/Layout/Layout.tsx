import React, {ReactNode} from 'react';

interface ILayout {
  children: ReactNode
}

export function Layout<FC>({children}: ILayout) {
  return (
      <>
        {children}
      </>
  );
}
