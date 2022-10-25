import React, {useEffect, useState} from 'react';
import './carouselcomponent.scss';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface ICarouselComponent {
    countCards?: number
}

export function CarouselComponent({countCards}: ICarouselComponent) {
    const [cardsCount, setCardsCount]: Array<any> = useState([1,2,3])
    const starsArr = ['1', '2', '3', '4', '5']

    const img = [
        {id: 1, image: 'https://images.unsplash.com/photo-1616427592814-195c30c24ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'},
        {id: 2, image: 'https://images.unsplash.com/photo-1636019409916-37a3a8ba81a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'},
        {id: 3, image: 'https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'},
    ]

    useEffect(() => {
        if (countCards === 3) {
            setCardsCount([1,2,3])
        } else if (countCards === 2) {
            setCardsCount([1,2])
        } else if (countCards === 1) {
            setCardsCount([1])
        }
    },[countCards])

    return (
        <div className='carouselContainer'>
            {
                cardsCount.map((i: Array<number>, idx: number) => (
                    <div className='carouselCard'>
                        <div className='bgImg'>
                            <div className='sale'>30%</div>
                            {
                                img.map((ig) => {
                                    if (idx + 1 === ig.id) {
                                        return <img src={ig.image} alt=""/>
                                    }
                                })
                            }
                        </div>
                        <div className='footer'>
                            <div className='title'>Young Woman Wearing Dress</div>
                            <div className='priceContainer'>
                                <div className='price'>$ 2200</div>
                                <div className='stars'>
                                    {
                                        starsArr.map((i) => <StarBorderIcon key={i} style={{fontSize: '16px'}}/>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    );
}
