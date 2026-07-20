import TodoItem from './TodoItem.jsx'

/**
 * Görev listesini render eder. (Listeleme işlemi)
 * @param {{
 *   todos: import('../interfaces/Todo.interface.js').Todo[],
 *   onToggle: (id: string) => void,
 *   onUpdate: (id: string, title: string) => void,
 *   onDelete: (id: string) => void
 * }} props
 */
export default function TodoList({ todos, onToggle, onUpdate, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-line bg-white/60 px-4 py-10 text-center text-sm text-ink/40">
        Henüz görev yok. Yukarıdan yeni bir görev ekleyerek başlayın.
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
