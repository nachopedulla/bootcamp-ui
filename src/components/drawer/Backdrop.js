import React from 'react';
import './Drawer.css';

const Backdrop = ({show, closeHandler}) => show && <div className="backdrop" onClick={closeHandler}></div> 

export default Backdrop;