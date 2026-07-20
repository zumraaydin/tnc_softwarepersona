/**
 * Proje genelinde kullanılan "Todo" veri sözleşmesini (interface) tanımlar.
 * JavaScript'te native interface bulunmadığından, JSDoc typedef + factory
 * fonksiyonu kombinasyonu ile tip güvenliğine yakın bir yapı sağlanır.
 *
 * @typedef {Object} Todo
 * @property {string} id - Benzersiz görev kimliği (crypto.randomUUID ile üretilir)
 * @property {string} title - Görev başlığı
 * @property {boolean} completed - Görevin tamamlanma durumu
 * @property {string} createdAt - ISO 8601 formatında oluşturulma tarihi
 */

/**
 * Yeni bir Todo nesnesi oluşturur (interface'e uygun factory fonksiyonu).
 * @param {string} title
 * @returns {Todo}
 */
export function createTodo(title) {
  return {
    id: crypto.randomUUID(),
    title: title.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  }
}

/**
 * Bir nesnenin Todo interface'ine uyup uymadığını doğrular.
 * @param {unknown} obj
 * @returns {obj is Todo}
 */
export function isTodo(obj) {
  return (
    !!obj &&
    typeof obj.id === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.completed === 'boolean' &&
    typeof obj.createdAt === 'string'
  )
}
