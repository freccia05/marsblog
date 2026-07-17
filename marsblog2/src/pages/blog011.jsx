// Renders a hand-written HTML snapshot as-is inside an iframe. The file lives at
// public/pages/originalhtml/ (Vite serves public/ at the site root), so its own
// <head>, styles, fonts and scripts run isolated from the React app.
export const meta = {
  id: '011',
  label: 'Blog v0.1.1',
  effect: 'glitch',
  order: 1,
}

export default function OriginalHtml() {
  return (
    <iframe
      className="original-html-frame"
      src="/pages/originalhtml/blog011.html"
      title="blog011.html"
    />
  )
}
