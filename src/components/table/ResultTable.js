import React from "react"
import Table from 'react-bootstrap/Table'
import './ResultTable.css'

const ResultTable = ({results}) => (

    <div className='results'>
        { 
            (results.size > 0) && (
                <Table responsive className='results-table'>
                    <thead>
                        <tr className="table-header">
                            {Object.keys(results[0]).map(fieldKey => (
                                <th key={fieldKey}>{fieldKey.toUpperCase()}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {results.map(field => (
                            <tr key={field.id}>
                                {Object.values(field).map(fieldValue => (
                                    <td key={fieldValue}>{fieldValue}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )
        }
    </div>
)

export default ResultTable;