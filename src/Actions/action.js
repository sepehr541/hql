import axios from "axios"

export const sending_dates_to_redux = (start, end, people) => {
    return {
        type: "dates",
        start: start,
        end: end,
        people: people
    }
}

export const available_rooms = (list) => {
    return {
        type: 'listOfAvailable',
        list: list
    }
}

export const gettingdate = (start, end, people) => {
    return dispatch => {
        dispatch(sending_dates_to_redux(start, end, people))
        axios.get(`http://localhost:9000/api/rooms?start=${dateFormatter(start)}&end=${dateFormatter(end)}&people=${people}`)
            .then(resp => {
                let available = resp.data;
                console.log(available);
                dispatch(available_rooms(available));
            }).catch(e => {
                console.log(e);
            })
    }
}

export const finalResv=(start,end,people,roomid)=>{
    let obj={start:start, end:end, people:people , roomid:roomid}
    return dispatch=>{
        axios.post(`http://localhost:9000/confirmed`,obj)
        .then(resp=>console.log(resp))
    }
}

/**
 * Formats date
 */
const dateFormatter = (date) => {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}