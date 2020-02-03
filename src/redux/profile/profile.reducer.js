import { profileActionTypes } from "./profile.types"


const INITIAL_STATE = {
    currentProfile: null,
    isLoading: false
}

const profileReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case profileActionTypes.DATA_LOADING:
          return {...state, isLoading: true }
        case profileActionTypes.GET_PROFILE:
            return {
                ...state,
                currentProfile: action.payload.data.data, isLoading: false
            }
        case profileActionTypes.UPDATE_PROFILE:
            return {
                ...state,
                currentProfile: action.payload.data.data, isLoading: false
            }
        default:
            return state
    }
}

export default profileReducer