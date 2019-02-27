export const loadData = () => {
    return {
        type: 'LOAD_DATA_REQUEST'
    }
}

export const loadDataSuccess = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS',
        data
    }
}

export const loadDataError = () => {
    return {
        type: 'LOAD_DATA_ERROR'
    }
}