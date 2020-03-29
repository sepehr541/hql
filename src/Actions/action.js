
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

export const SendingOrderResultsToRedux=(name , phone ,email,start,end, price,resevID)=>{
    console.log(name)
    return{
        type:'orderconf',
        name:name,
        phone:phone,
        email:email,
        start:start,
        end:end,
        price:price,
        resevID:resevID
    
    }
}