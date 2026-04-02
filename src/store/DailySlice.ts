import type { StateCreator } from 'zustand'
import type { TProduction } from "../types"
import { initValue } from '../constants';

export type DailySlice = {
    production: TProduction,
    addProduction: (production: TProduction) => void,

}

export const createDailySlice: StateCreator<DailySlice> = (set) => ({
    production: initValue,
    
    addProduction: (production: TProduction) => {

        console.log(production);
        
        set(() => ({
            production
        }))
    }
})
