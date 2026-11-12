export const EMAIL = 'sethwelch85@gmail.com'
// Built from resume/resume.html by `npm run resume`; served from public/.
export const RESUME_URL = '/Seth_Welch_Resume.pdf'
export const NAV_HEIGHT = 64

export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + globalThis.scrollY - NAV_HEIGHT
  globalThis.scrollTo({ top, behavior: 'smooth' })
}
