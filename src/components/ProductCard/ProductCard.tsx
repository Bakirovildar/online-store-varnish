import React from 'react';
import './productcard.scss';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export function ProductCard() {
  return (
      <div className='productCardContainer'>
          <img src="https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt=""/>
          <div className='footer'>
              <div className='price'>
                  <div className='title'>Young Woman Wearing Dress</div>
                  <div className='priceNum'>
                      <span>$120</span>
                      <div>
                          <StarBorderIcon className='icon'/>
                          <StarBorderIcon className='icon'/>
                          <StarBorderIcon className='icon'/>
                          <StarBorderIcon className='icon'/>
                          <StarBorderIcon className='icon'/>
                      </div>
                  </div>
              </div>
              <div className='footerButton'>
                  <div>ADD TO CARD +</div>
                  <FavoriteBorderIcon className='favoriteIcon'/>
              </div>
          </div>
      </div>
  );
}
