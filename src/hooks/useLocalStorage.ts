import { useEffect, useState } from 'react'

const getStoredValue = (key: string, defaultValue: unknown) => {
  const storedValue = localStorage.getItem(key)
  try {
    return storedValue ? JSON.parse(storedValue) : defaultValue
  } catch (error) {
    console.error(`Error parsing localStorage key "${key}":`, error)
    return defaultValue
  }
}

export function useLocalStorage(key: string, defaultValue: unknown) {
  const [value, setValue] = useState<unknown>(() => getStoredValue(key, defaultValue))

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }, [key, value])

  return [value, setValue] as const
}
