import React, { useState } from 'react'
import QueryBuilder from '../../components/queryBuilder/QueryBuilder';
import ResultTable from '../../components/table/ResultTable';
import './Bootcamp.css'

const Bootcamp = () => {

    const [query, setQuery] = useState('')

    const changeQueryHandler = (value) => {
        setQuery(value)
    }

    return (
        <div>
            <h4>Sql Bootcamp</h4>
            <p className='label'>
                Poder ver el modelo completo acá. <br/>
                Puede seleccionar uno de los templates predefinidos de la lista para facilitar el código. Si necesita otros templates, por favor, envienos su comentario a través del menu 'Contacto'
            </p>
            <div className='separator'/>
            <div className='execution'>
                <QueryBuilder
                    query={query}
                    changeQueryHandler={changeQueryHandler}
                />
                <ResultTable results={[]}/>
            </div>    
        </div>
    )

}

export default Bootcamp;