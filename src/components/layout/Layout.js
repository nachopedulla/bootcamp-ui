import React from "react";
import './Layout.css'

const Layout = (props) => (
    <div className="content">    
        {props.children}  
    </div>
)

export default Layout;