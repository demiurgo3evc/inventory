import api from '../axios'
import type { Login, TAuthForm } from '../../types'
import { isAxiosError } from 'axios';

export const saveUser = async (user: TAuthForm) => {

    try {
        const { data } = await api.post('/auth/register', user)
        console.log(data, " datass");

        return data
    } catch (error) {
        
        console.log(error);
        
        if (isAxiosError(error) && error.response) {
            
            console.log(error);

           throw new Error(error.response?.data?.message);
        }
    }

}

export const login = async (login: Login) => {
    const { data } = await api.post('/auth/login', login)

    return data
}
