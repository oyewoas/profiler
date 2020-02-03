const API_BASE_URL = 'https://jetcakeapi.herokuapp.com/api/v1'
const LOGIN_API = `${API_BASE_URL}/user/signin`
const SIGN_UP_API = `${API_BASE_URL}/user/signup`
const GET_PROFILE = `${API_BASE_URL}/user/profile`
const UPDATE_PROFILE = `${API_BASE_URL}/user/update/profile`




export const API = {
    API_BASE_URL,
    LOGIN_API,
    SIGN_UP_API,
    GET_PROFILE,
    UPDATE_PROFILE
}