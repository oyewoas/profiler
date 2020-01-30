import axios from 'axios'
import ALERT_RESPONSES from '../utils/alert-responses'
import { API } from '../utils/api-constants'
var CancelToken = axios.CancelToken;
let cancelDuplicate;

export const userLogin = async (actionFunction, user) => {
    try {
        cancelDuplicate && cancelDuplicate();
        const response = await axios.post(API.LOGIN_API, user, {
            cancelToken: new CancelToken(function executor(cancel) {
                cancelDuplicate = cancel;
              })
        })
        if(response){
            actionFunction(response)
            ALERT_RESPONSES.successResponses.login()
        }
    } catch (error) {
        ALERT_RESPONSES.errorResponses.login()
        
    }
}

export const userLogOut = async (actionFunction, history) => {
    try {
        actionFunction()
        history.push('/')
        ALERT_RESPONSES.successResponses.logout()
    } catch (error) {
        ALERT_RESPONSES.errorResponses.logout()
        
    }
}

export const userSignUp = async (actionFunction, user, history) => {
    try {
        cancelDuplicate && cancelDuplicate();

        const response = await axios.post(API.SIGN_UP_API, user, {
            cancelToken: new CancelToken(function executor(cancel) {
                cancelDuplicate = cancel;
            })
        })
        if (response) {
            actionFunction(response)
            history.push('/signin')
            ALERT_RESPONSES.successResponses.signup()
        }
    } catch (error) {
        ALERT_RESPONSES.errorResponses.signup()
        
    }
}