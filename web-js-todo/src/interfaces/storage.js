import { isTodo } from './Todo.interface.js'

const STORAGE_KEY = 'gorev-akisi-todos'

/**
 * LocalStorage'dan görev listesini okur.
 * @returns {import('./Todo.interface.js').Todo[]}
 */
export function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter(isTodo) : []
  } catch (error) {
    console.error('Görevler okunurken hata oluştu:', error)
    return []
  }
}

/**
 * Görev listesini LocalStorage'a yazar.
 * @param {import('./Todo.interface.js').Todo[]} todos
 */
export function saveTodos(todos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } catch (error) {
    console.error('Görevler kaydedilirken hata oluştu:', error)
  }
}
