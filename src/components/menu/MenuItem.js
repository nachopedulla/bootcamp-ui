import React from 'react'
import './Menu.css'

const MenuItem = ({text, style, icon}) => (
    <div className={style}>
        {icon}{text}
    </div>
)

export default MenuItem;