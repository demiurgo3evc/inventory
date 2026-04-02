import api from './axios'
import type { TDaily, TProduction } from '../types'

export const saveDaily = async (production: TProduction) => {
    const { data } = await api.post('/daily', production)
    console.log(data," hola");
    
    return data
}

export const findAll = async ():Promise<TDaily[]> => {
    const { data } = await api('/daily')
    return data
}

export const findById = async (id:string):Promise<TDaily> => {
    const { data } = await api(`/daily/${id}`)
    return data
}