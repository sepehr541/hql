import React from 'react'
import axios from 'axios'
const TableRow = (props) => {
    const token = localStorage.getItem('token');

    const handleDelete = async (e) => {
        try {
            await axios.delete(props.url, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: {
                    id: values[0]
                }
            });
            props.setDeleted(true);
        } catch (error) {
            alert('delete unsuccessful');
        }

    }
    const values = Object.values(props.data);
    const key = 'row' + props.index;
    const data = values.map((val, i) => <td key={key + 'col' + i}>{val}</td>)
    return (
        <tr key={key}>
            {data}
            {props.withDelete ?
                <td key={key + 'button'} className='right-align'>
                    <button className='btn red darken-1' onClick={handleDelete}>
                        <i className='medium material-icons'>delete</i>
                    </button>
                </td>
                : null
            }

        </tr>
    )
}

export default TableRow;