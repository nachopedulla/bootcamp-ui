import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import TEMPLATES from './TemplateConfig'
import './Template.css'


const Template = ({changeQueryHandler}) => {

    const [template, setTemplate] = useState(undefined)
    const [sintaxis, setSintaxis] = useState('SQL')

    return (
        <div className="template">
            <select 
                className="sintaxis-select" 
                onChange={({target}) => {
                    setSintaxis(target.value)
                    setTemplate(undefined)
                }}
            >
                <option>SQL</option>
                <option>MongoDB</option>
            </select>
            <select 
                className='template-select' 
                onChange={({target}) => setTemplate(target.value)}
            >
                <option defaultValue>Predefined templates</option>
                {Object.keys(TEMPLATES[sintaxis]).map(templateKey => <option key={templateKey}>{templateKey}</option>)}
            </select>
            <Button
                className='button-select' 
                variant='success'
                disabled={template === undefined}
                onClick={() => changeQueryHandler(TEMPLATES[sintaxis][template])}
            >
                Set
            </Button>
        </div>
    )
}

export default React.memo(Template);