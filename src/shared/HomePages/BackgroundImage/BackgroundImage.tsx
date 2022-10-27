import React from 'react';
import './backgroundimage.scss';

export function BackgroundImage() {
  return (
      <div className='bgImageContainer'>
          <img src="https://images.unsplash.com/photo-1563910076499-ff894f73e282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
          <div className='bgImageText'>SUMMER SALE</div>
      </div>
  );
}
