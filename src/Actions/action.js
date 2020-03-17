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
    console.log(start);
    return dispatch => {
        dispatch(sending_dates_to_redux(start, end, people))
        axios.get(`http://localhost:9000/api/rooms?start=${dateFormatter(start)}&end=${dateFormatter(end)}&people=${people}`)
            .then(resp => {
                console.log(resp.data);
                let available = resp.data;
                dispatch(available_rooms(available));
            }).catch(e => {
                console.log(e);
            })
    }
}

/**
 * Formats date
 */
const dateFormatter = (date) => {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}