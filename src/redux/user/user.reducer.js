import { userActionTypes } from "./user.types"


const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload.data
            }
        case userActionTypes.LOG_OUT_CURRENT_USER:
            return {...state, 
                currentUser: null 
            }
        default:
            return state
    }
}

export default userReducer