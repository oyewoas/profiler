import axios from 'axios'
import { API } from '../utils/api-constants'


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