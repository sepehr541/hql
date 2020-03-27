import React from 'react'

const TableRow = (props) => {
    const data = Object.values(props.data).map(val => <td>val</td>)
    return (
        <tr>
            {data}
            <td><button className='btn red darken-1'><i className='medium material-icon'>delete</i></button></td>
        </tr>
    )
}

export default TableRow;