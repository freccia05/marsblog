import { useRef } from 'react'
import { useFallingLetters } from '../hooks/useFallingLetters'
import { animationDelay } from '../effects/animationDelay'

// Splits a string into one <span> per character (for the click-launch title).
function letterSpans(text) {
  return [...text].map((char, i) => <span key={i}>{char}</span>)
}

function Header() {
  const titleRef = useRef(null)
  useFallingLetters(titleRef)

  return (
    <header>
      <center>
        <h1 className="joshtitle" id="top" ref={titleRef}>
          <span className="word">{letterSpans('freccia')}</span>
          <span className="word">{letterSpans('misericordia')}</span>
        </h1>
        <h2 className="waveText basictext" style={{ fontSize: '25px' }}>
          Posted by{' '}
          {animationDelay('Mariano Soares')}
        </h2>
      </center>
    </header>
  )
}

export default Header
