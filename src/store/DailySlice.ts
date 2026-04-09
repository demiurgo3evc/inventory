import type { StateCreator } from 'zustand'
import type { TProduction } from "../types"
import { initValue } from '../constants';

export type DailySlice = {
    sildebar: boolean,
    handleSildebar: () => void,
    production: TProduction,
    addProduction: (production: TProduction) => void,

}

export const createDailySlice: StateCreator<DailySlice> = (set) => ({

    sildebar: false,
    handleSildebar: () => {
        set((state) => ({
            sildebar:!state.sildebar
        }))
    },
    production: initValue,
    addProduction: (production: TProduction) => {

        console.log(production);

        set(() => ({
            production
        }))
    }
})
