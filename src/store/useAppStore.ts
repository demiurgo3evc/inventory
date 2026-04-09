import { create } from "zustand"
import { createDailySlice, type DailySlice } from "./DailySlice"
import { devtools } from 'zustand/middleware'
import { createCalculatorSlice, type IngredientSlice } from "./CalculatorSlice"
import { createUserSlice, type UserSlice } from "./UserSlice"

export const useAppStore = create<DailySlice & IngredientSlice & UserSlice > ()(devtools( (...a) => ({
  ...createDailySlice(...a),
  ...createCalculatorSlice(...a),
  ...createUserSlice(...a)
})))