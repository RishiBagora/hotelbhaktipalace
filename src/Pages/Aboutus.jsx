import React from 'react'
import AboutHero from '../components/aboutus/AboutHero'
import AboutStory from '../components/aboutus/AboutStory'
import CoreValues from '../components/aboutus/CoreValues'
import AboutGallery from '../components/aboutus/AboutGallery'
import ExperienceStats from '../components/aboutus/ExperienceStats'
import AboutCTA from '../components/aboutus/AboutCTA'
const Aboutus = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <AboutHero/>
      <AboutStory/>
      <CoreValues/>
      <AboutGallery/>
      <ExperienceStats/>
      <AboutCTA/>
    </div>
  )
}

export default Aboutus