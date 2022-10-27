import React from 'react';
import './productshome.scss';
import {HeaderComponent} from "../../HeaderComponent";
import {IProductCard, ProductCard} from "../../../components/ProductCard";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

export function ProductsHome() {
    const products: any = useSelector<RootState>(state => state.products)

    return (
        <div className='productsContainer'>
            <HeaderComponent bgText={'Products'} text={'OUR PRODUCTS'}/>

            <div className='productsCard'>
                {products.map((i: IProductCard) => <ProductCard key={i.id} product={i}/>)}
            </div>
        </div>
    );
}
