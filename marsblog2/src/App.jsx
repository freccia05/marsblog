import { useState } from 'react'
import { pages, defaultPageId } from './pages/registry'
import { getTransition } from './effects/transitions'
import GlitchOverlay from './effects/GlitchOverlay'
import PageSwitcher from './ui/PageSwitcher'
import './css/mainpage.css'

function App() {
  const [pageId, setPageId] = useState(defaultPageId)

  const current = pages.find((page) => page.id === pageId) ?? pages[0]
  const CurrentPage = current.Component

  function handleSelect(nextId) {
    const next = pages.find((page) => page.id === nextId)
    if (!next) return

    const effect = getTransition(next.effect)
    if (effect) {
      effect.run(() => setPageId(nextId))
    } else {
      setPageId(nextId)
    }
  }

  return (
    <>
      <GlitchOverlay />
      <PageSwitcher options={pages} currentId={pageId} onSelect={handleSelect} />
      <CurrentPage />
    </>
  )
}

export default App
