import { useEffect, useRef, useState } from 'react'

// Modular top-right dropdown. Given a list of { id, label } options it renders a
// menu and calls onSelect(id) when a different option is chosen. Knows nothing
// about pages or effects — the shell wires those up.
function PageSwitcher({ options, currentId, onSelect }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    function onDocClick(event) {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false)
    }
    function onKey(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = options.find((option) => option.id === currentId)

  return (
    <div className="page-switcher" ref={ref}>
      <button
        type="button"
        className="page-switcher-toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {current ? current.label : 'Select'} {open ? '▲' : '▼'}
      </button>
      {open && (
        <ul className="page-switcher-menu" role="listbox">
          {options.map((option) => (
            <li key={option.id} role="option" aria-selected={option.id === currentId}>
              <button
                type="button"
                className="page-switcher-option"
                onClick={() => {
                  setOpen(false)
                  if (option.id !== currentId) onSelect(option.id)
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PageSwitcher
