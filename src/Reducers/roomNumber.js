import "../Actions/action"

const initialstate={
    roomNum:null
}


const reducer=(state=initialstate,action)=>{
    if(action.type==='roomNumber'){
        return{
            ...state,
            roomNum:action.roomNum
        }
    }

    return state
}



export default reducer