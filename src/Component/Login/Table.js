import React, { useEffect, useState } from 'react'
import TableRow from './TableRow'
import axios from 'axios'
const Table = (props) => {
    // state to store data form Backend
    const [data, setData] = useState([])

    const url = `http://localhost:9000/api/restricted/${props.match.params.data}`

    // get data in each render
    useEffect(() => {
        const getRows = async () => {
            const resp = await axios.get(url, {
                authorization: `Bearer ${localStorage.getItem('token')}`
            })
            console.log(resp.data);
        }
        getRows();
    })

    // make table header from the keys of data
    const header = (
        <tr>
            {Object.keys(data).map(key => <th>key</th>)}
        </tr>
    )

    // make and populate the rows
    const rows = data.map(row => <TableRow data={row} />)
    return (
        <table className='highlight'>
            {header}
            {rows}
        </table>
    )
}

export default Table