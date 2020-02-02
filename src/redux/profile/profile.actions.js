import { profileActionTypes } from "./profile.types"



export const getCurrentProfile = profile => ({
    type: profileActionTypes.GET_PROFILE,
    payload: profile

})