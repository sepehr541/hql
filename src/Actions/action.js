import Axios from "axios"

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
export const authSuccess=(token,username)=>{
    return{
        type:'authsucces',
        username:username,
        token:token
    }
}

export const logOut=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    return{
        type:'logout'
    }
}

export const LogginIn= (username,password)=>{
    return dispatch=>{
        Axios.post('/api/login' ,{username ,password})
        .then(resp=>{
            localStorage.setItem('username',username)
            dispatch(authSuccess(resp.data ,username))
        }).catch(e=>{
            console.log(e)
        })
    }

    
}


export const gettingUsername=(username)=>{
    return{
        type:'user',
        username:username
    }
}

export const keeplogIn=()=>{
    return dispatch =>{
        let token = localStorage.getItem('token')
        let username=localStorage.getItem('username')
        if(!token){
            dispatch(logOut())
        }else{
            dispatch(authSuccess(token,username))
         }
    }
}


