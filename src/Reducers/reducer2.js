import "../Actions/action"

let initialstate={
    bedtype:null,
    price:0
}


const reducer =(state=initialstate,action)=>{
    if(action.type==="bed"){
        return{
            ...state,
            bedtype:action.bedtype,
            price:action.price
        }
    }

    return reducer
}





export default reducer