import React from 'react';
import './headercomponent.scss';

interface IHeaderComponent {
  bgText: string
  text?: string
}

export function HeaderComponent({bgText, text}: IHeaderComponent) {
  return (
      <div className='headerComponentContainer'>
        <div className='bgText'>{bgText}</div>
        <div className='text'>{text}</div>
      </div>
  );
}
