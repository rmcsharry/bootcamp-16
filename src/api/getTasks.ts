import { API_BASE_URL } from './apiBase'

export async function getTasks() {
  let token = localStorage.getItem('todo-token')
  if (token) token = JSON.parse(token)
  const url = `${API_BASE_URL}/todo/tasks/`
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token?.toString()}`,
    },
  })

  const data = await response.json()

  return data
}
