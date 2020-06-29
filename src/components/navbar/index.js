import React, { useState } from 'react'
import { MenuSVG } from '../reusables/styledsvg'
import './style.scss'
import { Link, useHistory } from 'react-router-dom'


const Index = () => {

    const [links, setLinks] = useState([{ id: 1, title: "Start", to: 'how_it_works' },
        { id: 1, title: "Contact", to: 'contact' }, { id: 1, title: "Help", to: "help" }])
    return (
        <div className='navbar'>
            <p>A</p>
            <div className='nav_links'>
                {
                    links.map((item, id) => <Link className='how_it_works' to={item.to}>{item.title}</Link>)
                }

            </div>
        </div>
    )
}
export default Index;