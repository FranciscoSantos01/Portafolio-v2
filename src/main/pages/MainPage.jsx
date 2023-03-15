import React from 'react'
import { About, Intro,Education,Tech, Contact } from '../components'
import { Projects } from '../components/Projects'

// import { JukeCanvas } from '../../auth/components/Juke'

export const MainPage = () => {
  return (
    <>
    <Intro />
    <About />
    <Education />
    <Tech />
    <Projects />
    <Contact />
    </>
  )
}
