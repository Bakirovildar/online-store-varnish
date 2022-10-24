import React from 'react';
import './trendinghome.scss';
import {HeaderComponent} from "../../HeaderComponent";

export function TrendingHome() {
  return (
      <div
          id='r1'
          className='trendingHomeContainer'
      >
          <HeaderComponent bgText={'Trending'} text={'TRENDING'}/>

      </div>
  );
}
