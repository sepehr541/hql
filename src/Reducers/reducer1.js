import "../Actions/action"
const initialstate={
   check_in:null,
   check_out:null,
   people:null
}

const reducer=(state=initialstate,action)=>{
    if(action.type==="dates"){
        console.log(action.start);
        
        return{
            ...state,
            check_in:action.start,
            check_out:action.end,
            people:action.people
        }

    }




    return state
}


export default reducer