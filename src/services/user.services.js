import Axios from 'axios'
import ALERT_RESPONSES from '../utils/alert-responses'
import { API } from '../utils/api-constants'

export const userLogin = async (actionFunction, user) => {
    try {
        const response = await Axios.post(API.LOGIN_API, user)
        actionFunction(response)
        ALERT_RESPONSES.successResponses.login()
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