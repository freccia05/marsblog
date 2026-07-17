function Nav() {
  return (
    <center>
      <h4
        className="basictext"
        style={{ letterSpacing: '-5px', marginTop: '40px' }}
      >
        <span style={{ color: '#FF0054' }}>.n</span>
        <span style={{ color: '#813dcf' }}>a</span>
        <span style={{ color: '#11df89' }}>v</span>
      </h4>
      <nav>
        <a className="basictext" href="#abme" style={{ color: '#FF0054' }}>
          About Me
        </a>
        <a
          className="basictext"
          href="#AugustinePicture"
          style={{ color: '#813dcf' }}
        >
          Projects
        </a>
        <a
          className="basictext"
          href="#MediaGallery"
          style={{ color: '#11df89' }}
        >
          Links
        </a>
      </nav>
    </center>
  )
}

export default Nav
