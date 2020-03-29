import "../Actions/action"
const initialstate={
    name:null,
    email:null,
    phone:null,
    start:null,
    end:null,
    price:null,
    resevID:null
}


const reducer =(state=initialstate, action)=>{
    if(action.type==='orderconf'){
        return{
            ...state,
            name:action.name,
            email:action.email,
            phone:action.phone,
            start:action.start,
            end:action.emd,
            price:action.price,
            resevID:action.resevID
        }
    }
    return state
}


export default reducer