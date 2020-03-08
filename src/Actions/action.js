import axios from "axios"

export const sending_dates_to_redux=(start,end,people)=>{
    return{
        type:"dates",
        start:start,
        end:end,
        people:people
    }
}


export const gettingdate=(start,end,people)=>{
    return dispatch=>{
        dispatch(sending_dates_to_redux(start,end,people))
        axios.post(`http://localhost:9000/reservation?start=${start}&end=${end}&people=${people}`,{start,end,people} )
        .then(resp=>{
            console.log(resp);
        }).catch(e=>{
            console.log(e);
        })
        
    }
    
    
}

export const getting_type_price=(bedtype,price)=>{
    return{
        type:"bed",
        bedtype:bedtype,
        price:price,
    }
}



 