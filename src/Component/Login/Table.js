import React, { useEffect, useState, useRef } from 'react'
import TableRow from './TableRow'
import { useHistory } from 'react-router-dom';
import './Table.css'
import axios from 'axios'
const Table = (props) => {
    const history = useHistory();
    // state to store data form Backend
    const [data, setData] = useState([])
    // loading or data fetch is complete
    const [loading, setLoading] = useState(true);

    const [deleted, setDeleted] = useState(false);

    // handle 403
    const auth = useRef(true)

    // api endpoint
    let url = `http://localhost:9000/api/restricted/${props.match.params.data}`

    // get data in each render
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        const getRows = async () => {
            setDeleted(false);
            try {
                const resp = await axios.get(url, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                setData(resp.data);
            } catch (error) {
                if (error.response.status === 403) {
                    auth.current = false;
                }
            }
            finally {
                setLoading(false);
            }
        }
        getRows();
    }, [url, deleted])

    // content of the table
    let render = null;

    //show add button or not
    let add = false;
    
    // conditions to choose render's content
    if (loading) {
        render = (
            <div id='adminSpinner' className="progress center">
                <div className="indeterminate"></div>
            </div>
        )
    } else {
        if (!(auth.current)) {
            render = (
                <div id='emptyTable' className='center'>
                    <i className='large material-icons'>error_outline</i>
                    <h2>403: Unauthorized Access</h2>
                    <h3>try to <a href='/login'>login</a></h3>
                </div>
            )
        } else if (data.length === 0) {
            add = true;
            render = (
                <div id='emptyTable' className='center'>
                    <i className='large material-icons'>error_outline</i>
                    <h2>No data was found</h2>
                </div>
            )
        } else {
            add = true;
            // make table header from the keys of data
            const header = (
                <tr key={'header'}>
                    {Object.keys(data[0]).map(key => <th key={'header' + key} >{key}</th>)}
                </tr>
            )
            // make and populate the rows
            const rows = Object.values(data).map((row, i) => <TableRow url={url} data={row} index={i} setDeleted={setDeleted}/>)

            render = (
                <div id='table'>
                    <table className='highlight'>
                        <thead>{header}</thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
            )
        }
    }

    return (
        <div id='renderContainer' className='container center preload'>
            <div id='tableActionButtons' className='row'>
                <button className='btn col s2 ' onClick={() => history.push('/dashboard')}>
                    <i className='small material-icons'>arrow_back</i>
                </button>
                {add ? <button className='btn col s2 push-s8' onClick={() => history.push('/dashboard/add')}>Add</button> : null}
            </div>
            {render}
        </div>
    )
}

export default Table