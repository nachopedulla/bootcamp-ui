import React from "react"
import MenuItem from './MenuItem';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineRocket } from 'react-icons/ai'
import { AiOutlineContacts } from 'react-icons/ai'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { BsBook } from 'react-icons/bs'

import './Menu.css';

const LateralMenu = () => (
    <div className='lateral-menu'>
        <MenuItem 
            style='lateral-menu-item' 
            text='Home' 
            icon={<AiOutlineHome className='menu-icon'/>}
        />
        <MenuItem 
            style='lateral-menu-item' 
            text='Cursos' 
            icon={<BsBook className='menu-icon'/>}
        />
        <MenuItem 
            style='lateral-menu-item' 
            text='Bootcamp' 
            icon={<AiOutlineRocket className='menu-icon'/>}
        />
        <MenuItem 
            style='lateral-menu-item' 
            text='Contacto' 
            icon={<AiOutlineContacts 
            className='menu-icon'/>}
        />
        <MenuItem 
            style='lateral-menu-item' 
            text='Contribuir' 
            icon={<FaRegMoneyBillAlt className='menu-icon'/>}
        />
    </div>
)

export default LateralMenu;