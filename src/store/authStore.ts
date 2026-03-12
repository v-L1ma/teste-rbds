import type { User } from '@/types/user'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface TAuthStore {
  userInfo: User | null,
  token: string | null,
  login: (userInfo:User,token:string) => void,
  logout: ()=>void
}

export const useAuthStore = create<TAuthStore>()(
  persist(
    (set) => ({
      userInfo: null,
      token: null,
      login: (userInfo:User,token:string)=> set({userInfo:userInfo,token:token}),
      logout: () => set({userInfo:null,token:null})
    }),
    {
      name: 'auth-storage', 
    },
  ),
)