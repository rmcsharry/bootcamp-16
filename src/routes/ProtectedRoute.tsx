import { ReactNode } from 'react'
import ProtectedRouteMessage from './ProtectedMessage'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [token] = useLocalStorage('todo-token', null)

  if (!token) {
    return <ProtectedRouteMessage />
  }

  return children
}
