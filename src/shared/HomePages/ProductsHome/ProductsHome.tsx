import React from 'react';
import './productshome.scss';
import {HeaderComponent} from "../../HeaderComponent";
import {ProductCard} from "../../../components/ProductCard";

export function ProductsHome() {
  return (
      <div className='productsContainer'>
        <HeaderComponent bgText={'Products'} text={'OUR PRODUCTS'} />

        <div className='productsCard'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </div>
  );
}
