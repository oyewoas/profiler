import { userActionTypes } from "./user.types"



export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user

})

export const logOutCurrentUser = () => ({
    type: userActionTypes.LOG_OUT_CURRENT_USER,
})

export const signUpUser = () => ({
    type: userActionTypes.SIGN_UP_USER,
})