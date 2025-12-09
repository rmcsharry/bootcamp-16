import { useRoutes } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { HomePage } from '../pages/HomePage'
import { TodosPage } from '../pages/TodosPage'

export function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <HomePage /> },
    {
      path: 'todos',
      element: (
        <ProtectedRoute>
          <TodosPage />
        </ProtectedRoute>
      ),
    },
  ])

  return routes
}
