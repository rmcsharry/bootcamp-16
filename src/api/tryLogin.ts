import { User } from '../models/User'
import { API_BASE_URL } from './apiBase'

export async function tryLogin(user: User) {
  const url = `${API_BASE_URL}/auth/token/`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: user.username,
      password: user.password,
    }),
  })

  return response.json()
}
