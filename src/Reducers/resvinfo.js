import "../Actions/action"

let initialstate={
    availableRooms:[]
}


const reducer =(state=initialstate,action)=>{
    if (action.type === 'listOfAvailable'){
        return{
            ...state,
            availableRooms:action.list
        }
    }
    return reducer
}

export default reducer