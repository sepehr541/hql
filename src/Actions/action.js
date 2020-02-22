export const gettingdate=(start,end,number)=>{
    return{
        type:"dates",
        start:start,
        end:end,
        people:number

    }
}

export const getting_type_price=(bedtype,price)=>{
    return{
        type:"bed",
        bedtype:bedtype,
        price:price
    }
}