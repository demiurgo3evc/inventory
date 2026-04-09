import type { StateCreator } from 'zustand'
import type { TAuth } from "../types"

export type UserSlice = {
    user: TAuth,
    addUser: (user: TAuth) => void,
    removeUser: () => void,
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({

    user: {} as TAuth,

    addUser: (user) => {
        set(() => ({
            user
        }))
    },

    removeUser: () => {

        set(() => ({
            user: {} as TAuth
        }))
    }
})