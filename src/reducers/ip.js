const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const ip = ( state = INITIAL_STATE, action) => {
    console.log(action)
    if(action.type==='LOAD_DATA_REQUEST') {
        return{
            isFetching: true,
            data: [],
            error: false
        }
        
    }
    if(action.type==='LOAD_DATA_SUCCESS') {
        return{
            isFetching: true,
            data: action.state,
            error: false
        }
        
    }
    if(action.type==='LOAD_DATA_ERROR') {
        return{
            isFetching: false,
            data: [],
            error: true
        }
        
    }
    return state
}
   


export default ip