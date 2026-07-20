import { useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm.jsx'
import TodoList from '../components/TodoList.jsx'
import { createTodo } from '../interfaces/Todo.interface.js'
import { loadTodos, saveTodos } from '../interfaces/storage.js'

/**
 * Ana sayfa: Ekle, Listele, Güncelle, Sil (CRUD) işlemlerinin tamamını
 * yönetir ve durumu (state) LocalStorage ile kalıcı hale getirir.
 */
export default function Home() {
  const [todos, setTodos] = useState(() => loadTodos())
  const [filter, setFilter] = useState('all') // all | active | completed

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  function handleAdd(title) {
    setTodos((prev) => [createTodo(title), ...prev])
  }

  function handleToggle(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  function handleUpdate(id, title) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, title } : t)))
  }

  function handleDelete(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const remaining = todos.filter((t) => !t.completed).length

  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col gap-6 px-6 py-14">
      <header className="flex flex-col gap-1">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay">
          Görev Akışı
        </span>
        <h1 className="font-display text-3xl font-bold text-ink">
          Bugün ne başaracaksın?
        </h1>
        <p className="text-sm text-ink/50">
          Görevlerin bu cihazda, tarayıcının LocalStorage alanında saklanır.
        </p>
      </header>

      <TodoForm onAdd={handleAdd} />

      <nav className="flex gap-2">
        {[
          { key: 'all', label: 'Tümü' },
          { key: 'active', label: 'Aktif' },
          { key: 'completed', label: 'Tamamlanan' },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              filter === f.key
                ? 'bg-ink text-white'
                : 'bg-white text-ink/50 border border-line hover:border-ink/30'
            }`}
          >
            {f.label}
          </button>
        ))}
      </nav>

      <TodoList
        todos={filteredTodos}
        onToggle={handleToggle}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />

      {todos.length > 0 && (
        <p className="text-center text-xs text-ink/40">
          {remaining} görev bekliyor · toplam {todos.length} görev
        </p>
      )}
    </div>
  )
}
