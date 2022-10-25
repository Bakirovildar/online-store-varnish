import React from 'react';
import './trendingcarousel.scss';
import {CarouselComponent} from "./CarouselComponent";

export function TrendingCarousel() {
  return (
      <div className='trendingCarousel'>
          <div className='featured-products-mobile'>
              <CarouselComponent countCards={1}/>
          </div>

          <div className='featured-products-pad'>
              <CarouselComponent countCards={2}/>
          </div>

          <div className='featured-products-desktop'>
              <CarouselComponent countCards={3}/>
          </div>
      </div>
  );
}
