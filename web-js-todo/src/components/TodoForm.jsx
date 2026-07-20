import { useState } from 'react'

/**
 * Yeni görev ekleme formu. (Ekle işlemi)
 * @param {{ onAdd: (title: string) => void }} props
 */
export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Yeni bir görev yaz..."
        className="flex-1 rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-ink/40 outline-none transition focus:border-moss focus:ring-2 focus:ring-moss/20"
      />
      <button
        type="submit"
        className="rounded-xl bg-moss px-5 py-3 font-display text-sm font-semibold text-white transition hover:bg-moss/90 active:scale-[0.98]"
      >
        Ekle
      </button>
    </form>
  )
}
