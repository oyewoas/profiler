import { userActionTypes } from "./user.types"


const INITIAL_STATE = {
    currentUser: null,
    isLoading: false
}

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case userActionTypes.DATA_LOADING:
          return {...state, isLoading: true}
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload.data, isLoading: false
            }
        case userActionTypes.LOG_OUT_CURRENT_USER:
            return {...state, 
                currentUser: null
            }
        case userActionTypes.SIGN_UP_USER:
            return {...state, 
                currentUser: null, isLoading: false
            }
        default:
            return state
    }
}

export default userReducer