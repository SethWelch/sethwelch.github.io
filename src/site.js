export const EMAIL = 'sethwelch85@gmail.com'
export const NAV_HEIGHT = 64

export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + globalThis.scrollY - NAV_HEIGHT
  globalThis.scrollTo({ top, behavior: 'smooth' })
}
