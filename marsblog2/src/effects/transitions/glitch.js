// A transition effect: plays the CRT "glitch" and swaps content at the visual
// midpoint. Reused both by the page switcher and by in-page anchor scrolling.
//
// To add your own transition, drop a file in this folder that default-exports
// an object of the same shape ({ id, label, run }). It auto-registers via
// ../transitions.js — no central list to edit.
//
//   run(commit): plays the effect. `commit` is an optional callback invoked at
//   the moment the screen is most scrambled (swap the page / jump scroll here).
//   Returns a Promise that resolves when the effect has fully finished.

const GLITCH_TIME = 550
const CUT_POINT = GLITCH_TIME / 2

// Module-level lock so overlapping triggers (e.g. a nav click mid-transition)
// are ignored rather than fighting over the body class.
let locked = false

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const glitch = {
  id: 'glitch',
  label: 'Glitch',

  run(commit) {
    if (prefersReducedMotion()) {
      if (commit) commit()
      return Promise.resolve()
    }

    if (locked) return Promise.resolve()
    locked = true

    document.body.classList.add('glitching')

    if (commit) {
      setTimeout(commit, CUT_POINT)
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        document.body.classList.remove('glitching')
        locked = false
        resolve()
      }, GLITCH_TIME)
    })
  },
}

export default glitch
