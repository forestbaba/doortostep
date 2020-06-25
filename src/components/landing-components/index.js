import React from 'react'
import './style.scss'
import dots from './dots.png'
import PictureWall from '../picture-wall/index'
import Tab from '../tabs'
import { Tabs } from 'antd'

const index = () => {
    return (

        <div className='container'>

            <h1>got delivery problems ? <br />Let's take care of it</h1>
            <img src={dots} />
            {/* <Tab /> */}
        </div>
    )
}
export default index;