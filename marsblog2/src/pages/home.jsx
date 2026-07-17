import Header from '../components/Header'
import Nav from '../components/Nav'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Links from '../components/Links'
import Footer from '../components/Footer'
import GoToTop from '../ui/GoToTop'
import { useGlitchScroll } from '../hooks/useGlitchScroll'

// Page metadata drives the dropdown. `effect` is the transition id (from
// effects/transitions/) played when switching TO this page.
// This is the JSX rebuild of the site and the default page.
export const meta = {
  id: 'home',
  label: "Mars' Blog",
  effect: 'glitch',
  order: 0,
}

export default function Home() {
  useGlitchScroll()

  return (
    <>
      <Header />
      <GoToTop />
      <Nav />
      <br />
      <hr />
      <AboutMe />

      <br />
      <hr />
      <Projects />
      <hr />

      <Links />
      <Footer />
    </>
  )
}
