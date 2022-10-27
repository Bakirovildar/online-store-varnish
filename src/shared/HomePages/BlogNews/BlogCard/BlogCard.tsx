import React from 'react';
import './blogcard.scss';

interface IBlogCard {
    blog: {
        id: number
        title: string
        date: string
        author: string
        img: string
    }
}

export function BlogCard({blog}: IBlogCard) {

  return (
      <div className='blogCard'>
        <div className='img' style={{background: `no-repeat url(${blog.img})`, backgroundSize: 'cover'}}/>
        <div className='footer'>
          <div className='footerHeader'>{blog.title}</div>
          <div className='footerDate'><span>{blog.date}</span> <span>{blog.author}</span></div>
        </div>
      </div>
  );
}
