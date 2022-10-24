import React from 'react';
import './homepages.scss';
import {BannerHome} from "./BannerHome";
import {TrendingHome} from "./TrendingHome";

export function HomePages() {
    return (
        <>
            <BannerHome/>
            <TrendingHome/>
        </>
    );
}
