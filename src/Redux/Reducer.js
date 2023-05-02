

var initialData = {
    user: []
}

const basicReducer = (storeData = initialData, action) =>{

    if(action.type === 'user'){
        return{
            ...storeData,
            user:action.payload
        }
    }
    else if (action.type === "userData"){
        return{
            ...storeData,
            userData:action.payload
        }
    }
    else if (action.type === "userRepo"){
        return{
            ...storeData,
            userRepo:action.payload
        }
    }


    return storeData
}

export default basicReducer