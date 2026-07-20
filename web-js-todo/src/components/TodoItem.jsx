import { useState } from 'react'

/**
 * Tek bir görev satırı. Tamamlama, güncelleme (inline edit) ve silme
 * işlemlerini barındırır.
 * @param {{
 *   todo: import('../interfaces/Todo.interface.js').Todo,
 *   onToggle: (id: string) => void,
 *   onUpdate: (id: string, title: string) => void,
 *   onDelete: (id: string) => void
 * }} props
 */
export default function TodoItem({ todo, onToggle, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.title)

  function commitEdit() {
    const trimmed = draft.trim()
    if (trimmed && trimmed !== todo.title) {
      onUpdate(todo.id, trimmed)
    } else {
      setDraft(todo.title)
    }
    setIsEditing(false)
  }

  return (
    <li className="group flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 transition hover:border-moss/40">
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Tamamlanmadı olarak işaretle' : 'Tamamlandı olarak işaretle'}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
          todo.completed ? 'border-moss bg-moss text-white' : 'border-line text-transparent'
        }`}
      >
        ✓
      </button>

      {isEditing ? (
        <input
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commitEdit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') commitEdit()
            if (e.key === 'Escape') {
              setDraft(todo.title)
              setIsEditing(false)
            }
          }}
          className="flex-1 rounded-lg border border-moss/40 px-2 py-1 outline-none focus:ring-2 focus:ring-moss/20"
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          className={`flex-1 cursor-text select-none ${
            todo.completed ? 'text-ink/40 line-through' : 'text-ink'
          }`}
          title="Düzenlemek için çift tıklayın"
        >
          {todo.title}
        </span>
      )}

      <button
        onClick={() => setIsEditing(true)}
        className="rounded-lg px-2 py-1 text-xs font-medium text-ink/50 opacity-0 transition hover:bg-mossLight hover:text-moss group-hover:opacity-100"
      >
        Düzenle
      </button>
      <button
        onClick={() => onDelete(todo.id)}
        className="rounded-lg px-2 py-1 text-xs font-medium text-clay opacity-0 transition hover:bg-clay/10 group-hover:opacity-100"
      >
        Sil
      </button>
    </li>
  )
}
