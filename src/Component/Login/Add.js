import React, { useEffect, useRef} from 'react'
import { AddEmployee, AddRoom, AddEvent } from './AddFroms';
import { useHistory } from 'react-router-dom'
import M from 'materialize-css'
import './Add.css'
// import Axios from 'axios';

const Add = (props) => {
    const history = useHistory();
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


    // shows the currect inputs for each category
    const handleChange = (e) => {
        const curr = document.getElementById(e.target.value)
        prevCat.current = currCat.current;
        if (prevCat.current !== null)
            prevCat.current.style.display = 'none';
        currCat.current = curr;
        currCat.current.style.display = 'block';
    }
    useEffect(() => {
        // initalizes the select fields
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});
    }, [])
    // let content=null
    // if(auth){
    //     content=(
    //         <div id='dashboardAdd' className='container center'>
    //         <div className='row'>
    //             <button className='btn col s2 ' onClick={() => history.push('/dashboard')}>
    //                 <i className='small material-icons'>arrow_back</i>
    //             </button>
    //         </div>
    //         <div id='MainFormAdd'className='row'>
    //             <div className="input-field col s3">
    //                 <select id='categorySelect' onChange={handleChange}>
    //                     <option value="" disabled selected>Choose your option</option>
    //                     <option value="employeeField">Employee</option>
    //                     <option value="roomField">Room</option>
    //                     <option value="eventField">Event</option>
    //                 </select>
    //                 <label>Category</label>
    //             </div>
    //         </div>
    //         <div className='row'>
    //             <AddEmployee />
    //             <AddRoom />
    //             <AddEvent />
    //         </div>
    //     </div>
    //     )
    // }else{
    //     content=
    // }

    return (
        <div id='dashboardAdd' className='container center'>
            <div className='row'>
                <button className='btn col s2 ' onClick={() => history.push('/dashboard')}>
                    <i className='small material-icons'>arrow_back</i>
                </button>
            </div>
            <div id='MainFormAdd'className='row'>
                <div className="input-field col s3">
                    <select id='categorySelect' onChange={handleChange}>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="employeeField">Employee</option>
                        <option value="roomField">Room</option>
                        <option value="eventField">Event</option>
                    </select>
                    <label>Category</label>
                </div>
            </div>
            <div className='row'>
                <AddEmployee />
                <AddRoom />
                <AddEvent />
            </div>
        </div>
    )
}

export default Add;