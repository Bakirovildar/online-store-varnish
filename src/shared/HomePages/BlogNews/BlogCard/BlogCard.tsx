import React from 'react';
import './blogcard.scss';

export function BlogCard() {
  return (
      <div className='blogCard'>
        <img src="https://images.unsplash.com/photo-1616427592793-67b858804534?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt=""/>
        <div className='footer'>
          <div className='footerHeader'>Lorem ipsum dolor sit amet, consecteturipsum dolor sit amet, consectetur</div>
          <div className='footerDate'><span>Dec 6, 2018</span> <span>Admin</span></div>
        </div>
      </div>
  );
}
