import React from 'react'
import DiningHero from '../components/dining/DiningHero'
import DiningPhilosophy from '../components/dining/DiningPhilosophy'
import MenuHighlights from '../components/dining/MenuHighlights'
import DiningAmbiance from '../components/dining/DiningAmbiance'
import DiningCTA from '../components/dining/DiningCTA'

const Pangat = () => {
  return (
    <div>
      <DiningHero/>
      <DiningPhilosophy/>
      {/* <MenuHighlights/> */}
      <DiningAmbiance/>
      <DiningCTA/>
    </div>
  )
}

export default Pangat