import React from 'react';
import Backdrop from './Backdrop';
import './Drawer.css';

const SideDrawer = ({children, show, closeHandler}) => (
    <>
        <Backdrop
            show={show} 
            closeHandler={closeHandler}
        />
        <div className={`side-drawer ${show ? 'open' : 'close'}`}>
            {children}
        </div>
    </>
);

export default SideDrawer;