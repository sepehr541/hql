import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import LoadingBar from './LoadingBar';
import Unauthorized from './Unauthorized';
import StatsCard from './StatsCard';
import './Stats.css'
import BackButton from './BackButton';
import StatsChart from './StatsChart';

const Stats = (props) => {

    const url = '/api/restricted/stats';
    const auth = useRef(true);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noData , setNoData]=useState(false)

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        const token = localStorage.getItem('token');
        const getStats = async () => {
            try {
                
                const resp = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(resp.data)
                setData(resp.data);
            } catch (error) {
                if (error.response.status === 403) {
                    auth.current = false;
                }if(error.response.status===404){
                    setNoData(true)
                }
            } finally {
                setLoading(false);
            }
        }
        getStats();
    }, [])

    
    let render = null;
    if (loading) {
        render = <LoadingBar />
    } else {
        if (!auth.current) {
            render = <Unauthorized />
        } else if(!noData) {
            render = (
                <div>
                    <div className='row'>
                        <BackButton />
                    </div>
                    <div className='row'>
                        <h4>Employees stats</h4>
                    </div>
                    <div className='row'>
                        <StatsCard data={data.empStats.totalemp} title='Employees' />
                        <StatsCard data={data.empStats.avgsalary.split(".")[0]} title='Average Salary' />
                        <StatsCard data={data.empStats.maxsalary} title='Maximum Salary' />
                    </div>
                    <div className='row'>
                        <h4>Reservation stats</h4>
                    </div>
                    <div className='row'>
                        <StatsCard data={data.resvStats.totalresv} title='Reservations' />
                        <StatsCard data={data.resvStats.guestcount} title='Guests' />
                        <div className='col s4 push-s1'>
                            <StatsChart data={data.roomStats} />
                        </div>
                    </div>
                </div>
            )
        }else {
            render=(
                <div id='authFailed' className='center'>
            <i className='large material-icons'>error_outline</i>
            <h2>404:No data found</h2>
            <h3> please try again later</h3>
        </div>
            )
        }
    }

    return (
        <div id='statsContainer' className='container center'>
            {render}
        </div>

    )
}

export default Stats;