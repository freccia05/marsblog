// Renders a hand-written HTML snapshot as-is inside an iframe. The file lives at
// public/pages/originalhtml/ (Vite serves public/ at the site root), so its own
// <head>, styles, fonts and scripts run isolated from the React app.
export const meta = {
  id: '020',
  label: 'Blog v0.2.0',
  effect: 'glitch',
  order: 1,
}

export default function OriginalHtml() {
  return (
    <iframe
      className="original-html-frame"
      src={`${import.meta.env.BASE_URL}pages/originalhtml/blog020.html`}
      title="020.html"
    />
  )
}
