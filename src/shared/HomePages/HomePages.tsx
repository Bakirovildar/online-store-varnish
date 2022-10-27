import React from 'react';
import './homepages.scss';
import {BannerHome} from "./BannerHome";
import {TrendingHome} from "./TrendingHome";
import {ProductsHome} from "./ProductsHome";
import {BackgroundImage} from "./BackgroundImage";
import {BlogNews} from "./BlogNews";

export function HomePages() {
    return (
        <>
            <BannerHome/>
            <TrendingHome/>
            <ProductsHome />
            <BackgroundImage/>
            <BlogNews/>
        </>
    );
}
