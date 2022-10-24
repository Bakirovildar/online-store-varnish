import React, {useState} from 'react';
import './header.scss'
import {ShoppingCartsIcon} from "../../Icons/ShoppingCartsIcon";
import MenuIcon from '@mui/icons-material/Menu';

interface IMenu {
    id: number,
    title: string
}

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const menu: Array<any> = [
        {id: 1, title: 'Home'},
        {id: 1, title: 'Shop'},
        {id: 1, title: 'About'},
        {id: 1, title: 'Blog'},
        {id: 1, title: 'Contact'},
    ]

    return (
        <div className='headerWrapper'>
            <div className='headerContainer'>
                <div className='headerLogoWrapper'>
                    <span>MODIST</span>
                </div>

                <div className='headerNavContainer'>
                    {menu.map(({id, title}: IMenu) => <div key={id}>{title}</div>)}
                    <div className='navShop'>
                        <ShoppingCartsIcon color={'white'}/>
                        <span>[0]</span>
                    </div>
                </div>

                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='headerMenu'>
                    <div>
                        <MenuIcon style={{color: '#6c757d'}}/>
                        <span>MENU</span>
                    </div>
                </div>
                {
                    isOpen
                        ? <div className='headerMenuLi'>
                            {menu.map(({id, title}: IMenu) => <div key={id}>{title}</div>)}
                            <div className='navShop2'>
                                <ShoppingCartsIcon color={'white'}/>
                                <span>[0]</span>
                            </div>
                        </div>
                        : ''
                }

            </div>
        </div>
    );
}
