import React, {useEffect, useState} from 'react';
import './productcard.scss';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {gradeCard} from "../../utils/gradeCard";

export interface IProductCard {
    id: number
    title: string
    price: string
    grade: number
    img: string
}

interface IProduct {
    product: IProductCard
}

export function ProductCard({product}: IProduct) {
    const [grade, setGrade]: Array<any>  = useState([])

    useEffect(() => {
        const grade: Array<number> = gradeCard(product.grade)
        setGrade(grade)
    },[])

    return (
        <div className='productCardContainer'>
            <img
                src={product.img}
                alt=""/>
            <div className='footer'>
                <div className='price'>
                    <div className='title'>{product.title}</div>
                    <div className='priceNum'>
                        <span>${product.price}</span>
                        <div>
                            {
                                grade.map((i: number) => <StarBorderIcon className='icon'/>
                                )
                            }
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
