import React from 'react';
import './blognews.scss';
import {HeaderComponent} from "../../HeaderComponent";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {BlogCard} from "./BlogCard";

export function BlogNews() {
    const blogs = useSelector<RootState>(state => state.blogs)

    return (
        <div className='blogNewsContainer'>
            <HeaderComponent bgText={'Blog'} text={'Блог'}/>
            <div className='blogs'>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </div>
    );
}
