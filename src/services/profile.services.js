import axios from 'axios'
import { API } from '../utils/api-constants'
import ALERT_RESPONSES from '../utils/alert-responses'


export const getProfile = async (actionFunction, token) => {
    try {
        
        const response = await axios.get(API.GET_PROFILE,  {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        if(response){
            actionFunction(response)
        }
    } catch (error) {
        console.error(error)
    }
}

export const profileUpdate = async (actionFunction, profile, profileId, token, history) => {
    try {
        let data = new FormData();
        
        data.append('profileImg', profile.profileImg);
        data.append('phone_number', profile.phone_number);
        data.append('address', profile.address)
        data.append('date_of_birth', profile.date_of_birth)
        data.append('security_question', profile.security_question)
        data.append('answer', profile.answer)
        data.append('email', profile.email)
        
        const response = await axios.put(`${API.UPDATE_PROFILE}/${profileId}`, data,  {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        if(response){
            actionFunction(response)
            history.push('/profile')
            ALERT_RESPONSES.successResponses.update()

        }
    } catch (error) {
        ALERT_RESPONSES.errorResponses.update()
    }
}