import { profileActionTypes } from "./profile.types"


const INITIAL_STATE = {
    currentProfile: null
}

const profileReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case profileActionTypes.GET_PROFILE:
            return {
                ...state,
                currentProfile: action.payload.data.data
            }
        case profileActionTypes.UPDATE_PROFILE:
            return {
                ...state,
                currentProfile: action.payload.data.data
            }
        default:
            return state
    }
}

export default profileReducer