import type { StateCreator } from 'zustand'
import type { TIngredient } from '../types'

export type IngredientSlice = {
    calculator: boolean;
    viewCalculator: () => void;
    modal: boolean,
    handleModal: () => void,
    ingredients: TIngredient[]
    addIngredient: () => void
    removeIngredient: (index: number) => void;
    // updateIngredient: (index: number, field: keyof TIngredient, value: string | number) => void
    getTotal: () => number;
    clearIngredients: () => void;

}
export const createCalculatorSlice: StateCreator<IngredientSlice> = (set) => ({
    calculator: false,
    viewCalculator: () => {
        set((state) => ({
            calculator: !state.calculator
        }))
    },
    modal: false,
    ingredients: [],
    handleModal: () => {

        set((state) => ({
            modal: !state.modal
        }))
    },
    addIngredient: () => { },
    removeIngredient: () => { },
    getTotal: () => {
        set(() => ({

        }))
        return 0;
    },
    clearIngredients: () => { }
})
