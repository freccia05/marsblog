function AboutMe() {
  return (
    <center>
      <section id="abme">
        <h2
          className="basictext"
          style={{ marginBottom: '30px', color: '#FF0054' }}
        >
          &gt;About Me
        </h2>
        <div>
          <main>
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
                &gt;My name is Mariano Soares, and im a Junior studying Software
                Engineering at Franciscan University of Steubenville for my
                bachelors. I like building computers, reading, and listening to
                music. My favorite book is{' '}
                <i>The Beautiful and the Damned</i> by F. Scott Fitzgerald. My
                favorite song is <i>Stay Together For The Kids</i> by blink182.
                My favorite artists include the latter as well as Modest Mouse,
                The American Analog Set, Black Thought, The Cottars and The Wild
                Reeds. I listen to many genres including (but not limited to)
                Rock, Folk, Electronic, DnB, and House, but my current music
                phase is punk/rock. I grew up on punk and have been revis'ting
                it as well as discovering new songs and artists.
              </span>
            </div>
          </main>
        </div>

        <aside>
          <article className="basictext" style={{ fontSize: '16px' }}>
            <h3 style={{ color: '#FF7733' }}>&gt;&gt;Hard Skills</h3>
            <p>
              C++, MATLAB, Excel, python, HTML, CSS, Bash, Linux, XAML, .NET,
              draw.io, Visual Studio, Visual Studio Code, Git, Github, Gitlab,
              Jira, JS, AWS
            </p>
          </article>
          <br />
        </aside>
      </section>
    </center>
  )
}

export default AboutMe
