import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import LoadingBar from './LoadingBar';
import Unauthorized from './Unauthorized';
import List from './List';
import BackButton from './BackButton';
import './Maint.css'

const Maint = (props) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const auth = useRef(true);


    useEffect(() => {
        const getData = async () => {
            try {
                let token = localStorage.getItem('token')
                const resp = await axios.get('/api/restricted/essentials', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                auth.current = true
                setData(resp.data);
                console.log(resp.data);
            } catch (error) {
                if (error.response.status) {
                    auth.current = false;
                }
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [])


    let render = null;

    if (loading) {
        render = (
            <LoadingBar />
        )
    } else {
        if (!auth.current) {
            render = (
                <Unauthorized />
            )
        } else {
            const nolistCount = Math.ceil(data.notreq.length / 5);
            let noList = [];

            for (let i = 0; i < nolistCount; i++) {
                noList.push(<List key={Math.random(1,24234)} data={data.notreq.slice(i * 5, ((i + 1) * 5) > data.notreq.length ? data.notreq.length : ((i + 1) * 5))} title='Room Number' />)
            }
            const yeslistCount = Math.ceil(data.req.length / 5);
            let yesList = [];

            for (let i = 0; i < yeslistCount; i++) {
                yesList.push(<List key={Math.random(1,543656)} data={data.req.slice(i * 5, ((i + 1) * 5) > data.req.length ? data.req.length : ((i + 1) * 5))} title='Room Number' />)
            }
            render = (
                <div>
                    <div className='row'>
                        <BackButton />
                    </div>
                    <h3>Maintenance required</h3>
                    <div className='row'>
                        {yesList}
                    </div>
                    <h3>Maintenance not required</h3>
                    <div className='row'>
                        {noList}
                    </div>
                </div>

            )
        }
    }

    return (
        <div id='Maintenance' className='container center'>
            {render}
        </div>
    )
}

export default Maint;