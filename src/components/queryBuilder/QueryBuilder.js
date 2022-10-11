import React from 'react';
import Button from 'react-bootstrap/Button';
import Template from '../template/Template';
import TextArea from '../textArea/TextArea';
import './QueryBuilder.css'

const QueryBuilder = ({query, changeQueryHandler}) => (
    <div className='query-builder'>
        <Template 
            changeQueryHandler={changeQueryHandler}
        />
        <TextArea 
            query={query}
            changeQueryHandler={changeQueryHandler}
        />
        <div className='buttons'>
            <Button variant="success">Submit</Button>
            <Button variant='success' onClick={() => changeQueryHandler('')}>Reset</Button>
        </div>
    </div>
)

export default QueryBuilder;