import React from 'react';
import MenuItem from './MenuItem';
import './Menu.css'

const Menu = () => (
    <div className='menu'>
        <MenuItem style='menu-item' text='Home'/>
        <MenuItem style='menu-item' text='Bootcamp'/>
        <MenuItem style='menu-item' text='Contacto'/>
        <MenuItem style='menu-item' text='Contribuir'/>
    </div>
)

export default Menu;