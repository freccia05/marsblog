// Auto-registers every page in this folder (any *.jsx that exports `meta` and a
// default component). Add a page file → it appears in the dropdown, ordered by
// `meta.order` (then label).
const modules = import.meta.glob('./*.jsx', { eager: true })

export const pages = Object.values(modules)
  .filter((m) => m.meta && m.default)
  .map((m) => ({ ...m.meta, Component: m.default }))
  .sort(
    (a, b) =>
      (a.order ?? 999) - (b.order ?? 999) || a.label.localeCompare(b.label),
  )

export const defaultPageId = pages[0]?.id
