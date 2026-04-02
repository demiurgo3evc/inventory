import { create } from "zustand"
import { createDailySlice, type DailySlice } from "./DailySlice"
import { devtools } from 'zustand/middleware'
import { createCalculatorSlice, type IngredientSlice } from "./CalculatorSlice"

export const useAppStore = create<DailySlice & IngredientSlice> ()(devtools( (...a) => ({
  ...createDailySlice(...a),
  ...createCalculatorSlice(...a),
})))