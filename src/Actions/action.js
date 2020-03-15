import axios from "axios"

export const sending_dates_to_redux=(start,end,people)=>{
    return{
        type:"dates",
        start:start,
        end:end,
        people:people
    }
}

export const available_rooms=(list)=>{
    return{
        type:'listOfAvailable',
        list:list
    }
}


export const gettingdate=(start,end,people)=>{
    return dispatch=>{
        dispatch(sending_dates_to_redux(start,end,people))
        let obj={start,end,people}
        axios.post("http://localhost:9000/reservation",obj)
        .then(resp=>{
            console.log(resp.data);
            let available=resp.data 
            dispatch(available_rooms(available))
        }).catch(e=>{
            console.log(e);
        })
        
    }
    
    
}





 