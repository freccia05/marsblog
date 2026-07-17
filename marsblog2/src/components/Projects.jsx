import { animationDelay } from '../effects/animationDelay'

function Projects() {
  return (
    <center>
      <h2
        className="basictext"
        id="AugustinePicture"
        style={{ color: '#813dcf', marginBottom: '30px' }}
      >
        &gt;Projects
      </h2>
      <h3 className="basictext" style={{ color: '#e0f718', padding: '3px' }}>
        &gt;&gt;School Projects
      </h3>
      <div style={{ padding: '3px', marginRight: 'auto' }}>
        <span
          className="basictext"
          style={{
            fontSize: '14px',
            padding: '3px',
            marginRight: '3px',
            textAlign: 'justify',
          }}
        >
          &gt;I work for the Baron Crow Project for Franciscan University
          contracting for the AFRL. I also am making a battle bot for one of my
          engineering courses! Stay tuned for updates.
        </span>
      </div>
      <h3 className="basictext" style={{ color: '#02ff2c' }}>
        &gt;&gt;Personal Projects
      </h3>
      <p className="staugustine basictext">
        &gt;Stay tuned for
        <span
          className="staugustine basictext"
          style={{
            color: 'rgb(255, 0, 157)',
            letterSpacing: '-2px',
            marginLeft: '4px',
          }}
        >
          {animationDelay('Tales of the Abstract!')}
        </span>
      </p>
      <div style={{ padding: '3px', marginRight: 'auto' }}>
        <span
          className="basictext"
          style={{
            fontSize: '14px',
            padding: '3px',
            marginRight: '3px',
            textAlign: 'justify',
          }}
        >
          &gt;I am also working on an app to reduce screen usage on Android
          Devices using Kotlin!
        </span>
      </div>
      <div style={{ padding: '3px', marginRight: 'auto' }}>
        <span
          className="basictext"
          style={{
            fontSize: '14px',
            padding: '3px',
            marginRight: '3px',
            textAlign: 'justify',
          }}
        >
          &gt;This website is a very low priority project that I hope to update
          if i have time! Fun fact: this website was originally coded entirely
          in HTML and CSS. JavaScript has since joined the party!
        </span>
      </div>
      <br />
    </center>
  )
}

export default Projects
