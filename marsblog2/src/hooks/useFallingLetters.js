import { useEffect } from 'react'

const GONE_TIME = 1800
const POP_TIME = 380
const GRAVITY = 6600
const LAUNCH_VY_MIN = 480
const LAUNCH_VY_MAX = 760
const LAUNCH_VX_MAX = 520
const AIR_DRAG = 0.35
const SPIN_PER_VX = 0.9
const SPIN_RANDOM = 220
const SQUASH = 0.16

// Ports the click-to-launch title-letter physics from the original index.html.
// `titleRef` must point at the `.joshtitle` element.
export function useFallingLetters(titleRef) {
  useEffect(() => {
    const title = titleRef.current
    if (!title) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const letters = title.querySelectorAll('.word span')
    let knockedOut = 0

    function triggerTitlePop() {
      title.classList.remove('titlepop')
      void title.offsetWidth
      title.classList.add('titlepop')
      setTimeout(function () {
        title.classList.remove('titlepop')
      }, 340)
    }

    function letterReturned() {
      knockedOut--
      if (knockedOut === 0) {
        triggerTitlePop()
      }
    }

    function launch(letter) {
      const rect = letter.getBoundingClientRect()
      const exitY = window.innerHeight - rect.top + rect.height + 40

      let x = 0
      let y = 0
      let rot = 0
      let vx = (Math.random() * 2 - 1) * LAUNCH_VX_MAX
      let vy = -(LAUNCH_VY_MIN + Math.random() * (LAUNCH_VY_MAX - LAUNCH_VY_MIN))
      let spin = vx * SPIN_PER_VX + (Math.random() * 2 - 1) * SPIN_RANDOM
      let t = 0
      let last = performance.now()

      letter.classList.add('busy', 'falling')

      function step(now) {
        const dt = Math.min((now - last) / 1000, 0.05)
        last = now
        t += dt

        vy += GRAVITY * dt
        vx *= 1 - AIR_DRAG * dt
        spin *= 1 + 0.25 * dt

        x += vx * dt
        y += vy * dt
        rot += spin * dt

        const scale = 1 + SQUASH * Math.exp(-t * 5)

        letter.style.transform =
          'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) ' +
          'rotate(' + rot.toFixed(1) + 'deg) ' +
          'scale(' + scale.toFixed(3) + ')'

        if (y < exitY) {
          requestAnimationFrame(step)
        } else {
          settle(letter)
        }
      }

      requestAnimationFrame(step)
    }

    function settle(letter) {
      letter.classList.remove('falling')
      letter.style.transform = ''
      letter.classList.add('gone')

      setTimeout(function () {
        letter.style.setProperty('--dir', Math.random() < 0.5 ? -1 : 1)
        letter.classList.remove('gone')
        letter.classList.add('pop')

        setTimeout(function () {
          letter.classList.remove('pop', 'busy')
          letterReturned()
        }, POP_TIME)
      }, GONE_TIME)
    }

    const handlers = []
    letters.forEach(function (letter) {
      const onClick = function () {
        if (letter.classList.contains('busy')) return
        if (prefersReducedMotion) return
        knockedOut++
        launch(letter)
      }
      letter.addEventListener('click', onClick)
      handlers.push([letter, onClick])
    })

    return () => {
      handlers.forEach(([letter, onClick]) =>
        letter.removeEventListener('click', onClick),
      )
    }
  }, [titleRef])
}
