import "../Actions/action"
const initialstate={
   check_in:null,
   check_out:null
}

const reducer=(state=initialstate,action)=>{
    if(action.type==="dates"){
        return{
            ...state,
            check_in:action.start,
            check_out:action.end
        }

    }




    return state
}

export default reducer