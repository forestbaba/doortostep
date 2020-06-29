import React, { useState, useEffect } from 'react';
import { render } from "react-dom";

import './style.scss'
import Aboutus from '../aboutus'
import Vision from '../vision'

const Tab = () => {

    const [buttons, setButtons] = useState([{ id: '1', title: "About us" }, { id: '2', title: "Vision" }])
    const [viewId, setviewId] = useState(1)

    useEffect(() => {
        setviewId(1)
    }, [])


    const handleClick = id => {
        console.log('======', id)
        setviewId(id)
    }
    return (
        <div className='tabs'>
            <div className='button-holder'>
                {
                    buttons.map((item, index) => {
                        return (<button onClick={handleClick.bind(this, item.id)} className={viewId === item.id ? 'active-buttons' : 'buttons'}>{item.title}</button>)
                    })
                }
            </div>

            {
                viewId == 1 ? (<Aboutus />) : (<Vision />)
            }

        </div>
    );
}

export default Tab;