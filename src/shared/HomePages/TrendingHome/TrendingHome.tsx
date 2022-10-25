import React from 'react';
import './trendinghome.scss';
import {HeaderComponent} from "../../HeaderComponent";
import {TrendingCarousel} from "./TrendingCarousel";

export function TrendingHome() {
  return (
      <div
          id='r1'
          className='trendingHomeContainer'
      >
          <HeaderComponent bgText={'Trending'} text={'TRENDING'}/>
          <TrendingCarousel/>
      </div>
  );
}
