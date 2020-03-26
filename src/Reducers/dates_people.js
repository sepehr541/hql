import "../Actions/action"
const initialstate={
   check_in:null,
   check_out:null,
   people:null,
   roomNumber:null,
   openPayment:false,
   
}


const reducer = (state = initialstate, action) => {
    if (action.type === "dates") {
        
        return{
            ...state,
            check_in:action.start,
            check_out:action.end,
            people:action.people
        }
    }
    if(action.type==='roomNumber'){
        return{
            ...state,
            roomNumber:action.roomNum
        }
    }
    if(action.type==="openPayment"){
        return{
            ...state,
            openPayment:action.cond
        }
    }

    return state
}

export default reducer