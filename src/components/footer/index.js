import React from 'react'
import { FacebookSVG, InstagramSVG, TwitterSVG } from '../reusables/styledsvg'
import './style.scss'

const Footer = () => {
    return (
        <div className='parent'>
            <div></div>
            <p>company name</p>
            <div className='icon-holder'>
                <FacebookSVG />
                <InstagramSVG />
                <TwitterSVG />
            </div>


        </div>
    )
}

export default Footer;