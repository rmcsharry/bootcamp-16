import React, { createContext, useState, ReactNode } from 'react'
import { User } from '../models/User'
import { useMutation } from '@tanstack/react-query'
import { tryLogin } from '../api/tryLogin'
import { useLocalStorage } from '../hooks/useLocalStorage'

// Define the shape of the context value
export type AuthContextType = {
  user: User | null
  login: (userData: User) => Promise<void>
  logout: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

// Create the context with a default value of null (since there is no user yet!)
export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useLocalStorage('todo-token', null)

  const loginMutation = useMutation({
    mutationFn: tryLogin,
    onSuccess: (data) => {
      setToken(data.token)
    },
  })

  const login = async (userData: User) => {
    console.log('Logging in...')
    setUser(userData)
    await loginMutation.mutate(userData)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}
