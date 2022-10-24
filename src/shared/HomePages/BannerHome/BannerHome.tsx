import React from 'react';
import './bannerhome.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {motion} from 'framer-motion';

export function BannerHome() {
    return (
        <div className='bannerHomeContainer'>
            <div className='img'/>
            <div className='leftBlock'/>
            <div className='bannerText'>
                <div className='h1'>LE STYLIST</div>
                <div className='h2'><span></span>WEAR YOUR DRESS</div>
                <div className='circle'>
                    <a href="#r1">
                        <motion.div
                            initial={{
                                y: 5
                            }}
                            animate={{
                                y: 15,
                                opacity: 0
                            }}
                            transition={{
                                delay: 1,
                                duration: 1,
                                repeat: Infinity,
                                repeatDelay: 0.5
                            }}
                        >
                            <KeyboardArrowDownIcon style={{fontSize: '30px', margin: '5px 0'}}/>
                        </motion.div>
                        </a>
                </div>
            </div>
        </div>
);
}
