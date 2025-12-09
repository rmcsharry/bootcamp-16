import { Task } from '../models/Task'
import { API_BASE_URL } from './apiBase'

export async function updateTask(task: Task): Promise<Task> {
  let token = localStorage.getItem('todo-token')
  if (token) token = JSON.parse(token)
  const url = `${API_BASE_URL}/todo/tasks`
  const response = await fetch(`${url}/${task.id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(task),
  })

  if (!response.ok) {
    throw new Error('Failed to update task')
  }

  const data = await response.json()

  return data
}
