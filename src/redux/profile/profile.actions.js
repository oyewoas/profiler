import {
    profileActionTypes
} from "./profile.types"



export const getCurrentProfile = profile => ({
    type: profileActionTypes.GET_PROFILE,
    payload: profile

})

export const updateProfile = profile => ({
    type: profileActionTypes.UPDATE_PROFILE,
    payload: profile

})

export const dataLoading = () => ({
    type: profileActionTypes.DATA_LOADING
})