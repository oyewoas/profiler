// const API_BASE_URL = 'https://jetcakeapi.herokuapp.com/api/v1'
const API_BASE_URL = 'http://localhost:4000/api/v1'
const LOGIN_API = `${API_BASE_URL}/user/signin`
const SIGN_UP_API = `${API_BASE_URL}/user/signup`




export const API = {
    API_BASE_URL,
    LOGIN_API,
    SIGN_UP_API
}