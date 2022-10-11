import React, { useState } from 'react'
import Menu from '../menu/Menu';
import LateralMenu from '../menu/LateralMenu';
import SideDrawer from '../drawer/SideDrawer'
import { BiData } from "react-icons/bi";
import { GiHamburgerMenu } from 'react-icons/gi'

import './Toolbar.css'

const Toolbar = () => { 

    const [show, setShow] = useState(false)

    return (
        <div className='toolbar'>
            <GiHamburgerMenu 
                className='menuIcon'
                onClick={() => setShow(true)}
            />
            <div className='title'>
                <BiData className='dataIcon'/>
                {' '}
                <p className='page-name'>SQL Bootcamp</p>
            </div>
            <Menu/>
            <SideDrawer show={show} closeHandler={() => setShow(false)}>
                <LateralMenu/>
            </SideDrawer>
        </div>
    )
}

export default Toolbar;