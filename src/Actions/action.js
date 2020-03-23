
export const sending_dates_to_redux = (start, end, people) => {
    return {
        type: "dates",
        start: start,
        end: end,
        people: people
    }
}

// export const gettingdate = (start, end, people) => {
//     return dispatch => {
//         dispatch(sending_dates_to_redux(start, end, people))
//         axios.get(`http://localhost:9000/api/rooms?start=${dateFormatter(start)}&end=${dateFormatter(end)}&people=${people}`)
//             .then(resp => {
//                 let available = resp.data;
//                 console.log('dsada')
//                 dispatch(available_rooms(available));
//             }).catch(e => {
//                 console.log(e);
//             })
//     }
// }

export const sendingTheFinalRoom=(roomNumber)=>{
    return{
        type:'roomNumber',
        roomNum:roomNumber
    }
}

export const openPayment=(cond)=>{
    return{
        type:'openPayment',
        cond:cond
    }
}



/**
 * Formats date
 */
// const dateFormatter = (date) => {
//     return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
// }