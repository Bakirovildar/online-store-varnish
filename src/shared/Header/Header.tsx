import React from 'react';
import './header.scss'
import {ShoppingCartsIcon} from "../../Icons/ShoppingCartsIcon";
import MenuIcon from '@mui/icons-material/Menu';

export function Header() {
  return (
      <div className='headerWrapper'>
          <div className='headerContainer'>
              <div className='headerLogoWrapper'>
                  <span>MODIST</span>
              </div>

              <div className='headerNavContainer'>
                      <div>Home</div>
                      <div>Shop</div>
                      <div>About</div>
                      <div>Blog</div>
                      <div>Contact</div>
                      <div className='navShop'>
                          <ShoppingCartsIcon/>
                          <span>[0]</span>
                      </div>
              </div>

              <div className='headerMenu'>
                  <div>
                      <MenuIcon style={{color: '#6c757d'}}/>
                      <span>MENU</span>
                  </div>
              </div>

          </div>
      </div>
  );
}
