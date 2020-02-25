import axios from 'axios'
import ALERT_RESPONSES from '../utils/alert-responses'
import {
    API
} from '../utils/api-constants'



export const userLogin = async (actionFunction, user) => {
    try {

        const response = await axios.post(API.LOGIN_API, user)
        if (response) {
            actionFunction(response)
            ALERT_RESPONSES.successResponses.login()
        }
    } catch (error) {
        if (error) {
            ALERT_RESPONSES.errorResponses.login()

        }
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
        let data = new FormData();
        
        data.append('profileImg', user.profileImg);
        data.append('phone_number', user.phone_number);
        data.append('address', user.address)
        data.append('date_of_birth', user.date_of_birth)
        data.append('security_question', user.security_question)
        data.append('answer', user.answer)
        data.append('email', user.email)
        data.append('password', user.password)

        

        const response = await axios.post(API.SIGN_UP_API, data)
        if (response) {
            actionFunction(response)
            history.push('/signin')
            ALERT_RESPONSES.successResponses.signup()
        }
    } catch (error) {
        if (error) {
            ALERT_RESPONSES.errorResponses.signup()

        }
    }
}
