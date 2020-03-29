
export const sending_dates_to_redux = (start, end, people) => {
    return {
        type: "dates",
        start: start,
        end: end,
        people: people
    }
}

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

export const gettingPersInfo=(name , phone , email)=>{
console.log(name)
    return {
        type:'personal',
        phone:phone,
        name:name,
        email:email

    }
}

export const SendingOrderResultsToRedux=(results)=>{
    return{
        type:'orderconf',
        results:results
    }
}