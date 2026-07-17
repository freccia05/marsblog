import { useEffect } from 'react'
import glitch from '../effects/transitions/glitch'

// Ports the "glitch then jump" behaviour for in-page anchor links (#top, #abme,
// ...). Reuses the shared glitch transition so the effect and its lock live in
// one place.
export function useGlitchScroll() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    const handlers = []

    links.forEach(function (link) {
      const onClick = function (event) {
        const target = document.querySelector(link.getAttribute('href'))
        if (!target) return

        event.preventDefault()
        glitch.run(() =>
          target.scrollIntoView({ behavior: 'instant', block: 'start' }),
        )
      }
      link.addEventListener('click', onClick)
      handlers.push([link, onClick])
    })

    return () => {
      handlers.forEach(([link, onClick]) =>
        link.removeEventListener('click', onClick),
      )
    }
  }, [])
}
