const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  const day = d.getUTCDate()
  const mon = months[d.getUTCMonth()]
  const year = String(d.getUTCFullYear()).slice(2)
  return `${day} ${mon} '${year}`
}

export function formatDateLong(dateStr: string): string {
  const d = new Date(dateStr)
  const mon = months[d.getUTCMonth()]
  const day = d.getUTCDate()
  const year = d.getUTCFullYear()
  return `${mon} ${day}, ${year}`
}
