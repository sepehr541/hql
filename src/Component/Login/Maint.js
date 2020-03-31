import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import LoadingBar from './LoadingBar';
import Unauthorized from './Unauthorized';
import List from './List';
import BackButton from './BackButton';

const Maint = (props) => {

    const url = 'http://localhost:9000/'
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const auth = useRef(true);


    useEffect(() => {
        const getData = async () => {
            try {
                const resp = await axios.get(url + 'api/restricted/essentials');
                setData(resp.data);
            } catch (error) {
                if (error.response.status) {
                    auth.current = false;
                }
            } finally {
                setLoading(false);
            }
        }

        getData();
    }, [data])


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
                noList.push(<List data={data.notreq.slice(i * 5, ((i + 1) * 5) > data.notreq.length ? data.notreq.length : ((i + 1) * 5))} title='Room Number' />)
            }
            const yeslistCount = Math.ceil(data.req.length / 5);
            let yesList = [];

            for (let i = 0; i < yeslistCount; i++) {
                yesList.push(<List data={data.req.slice(i * 5, ((i + 1) * 5) > data.req.length ? data.req.length : ((i + 1) * 5))} title='Room Number' />)
            }
            render = (
                <div>
                    <div className='row'>
                        <BackButton />
                    </div>
                    <div className='row'>
                        {yesList}
                    </div>
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