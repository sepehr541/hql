import React, { useEffect, useRef, useState } from 'react'
import { AddEmployee, AddRoom, AddEvent } from './AddFroms';
import CategorySelector from './CategorySelector';
import Unauthorized from './Unauthorized';
import LoadingBar from './LoadingBar';
import BackButton from './BackButton';
import './Add.css'
import axios from 'axios';

const Add = (props) => {
    // ref for tracking and display
    const currCat = useRef(null);
    const prevCat = useRef(null);
//     const [auth , setauth]=useState(false)

//     let url = 'http://localhost:9000/api/restricted'


//     useEffect(()=>{
//         const authAdd=async()=>{
//             let token=localStorage.getItem('token')
//             try{
//                  await Axios.post(url,{
//                     headers: {
//                         'Authorization': `Bearer ${token}`
//                     }
//                 })
//                 setauth(true)
//             }catch(e){
//                 if(e.response.status===403){
//                     console.log("This user is not authorized")
//                 }
//             }
//         }
//         authAdd()
// // eslint-disable-next-line
//     },[])


    // state management
    const auth = useRef(false);
    const [loading, setLoading] = useState(true);

    // shows the currect inputs for each category
    const handleChange = (e) => {
        const curr = document.getElementById(e.target.value)
        prevCat.current = currCat.current;
        if (prevCat.current !== null)
            prevCat.current.style.display = 'none';
        currCat.current = curr;
        currCat.current.style.display = 'block';
    }

    const url = 'http://localhost:9000/api/restricted/'
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        const checkauth = async () => {
            const token = localStorage.getItem('token')
            try {
                await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                auth.current = true;
            } catch (error) {
                auth.current = false;
            } finally {
                setLoading(false);
            }
        }
        checkauth();
    })

    let render = null;
    if (loading) {
        render = (
            <div className='container center'>
                <LoadingBar />
            </div>
        )
    } else {
        if (!auth.current) {
            render = (
                <Unauthorized />
            )
        } else {
            render = (
                <div>
                    <div className='row'>
                        <BackButton />
                    </div>
                    <div id='MainFormAdd' className='row'>
                        <CategorySelector visitor={false} handleChange={handleChange} />
                    </div>
                    <div className='row'>
                        <AddEmployee />
                        <AddRoom />
                        <AddEvent />
                    </div>
                </div>
            )
        }
    }

    return (
        <div id='dashboardAdd' className='container center'>
            {render}
        </div>
    )
}

export default Add;