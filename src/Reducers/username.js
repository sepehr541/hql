import "../Actions/action"

const initial={
    username:null,
    token:null
}

const reducer=(state=initial, action)=>{
    if(action.type==='authsucces'){
        return{
            ...state,
            username:action.username,
            token:action.token

        }
    }if(action.type==='logout'){
        return{
            ...state,
            username:null,
            token:null
        }
      
    }

    return state
}


export default reducer