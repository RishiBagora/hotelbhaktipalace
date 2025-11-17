import React from 'react'
import ContactHero from '../components/ContactUs/ContactHero'
import ContactDetailsStrip from '../components/ContactUs/ContactDetailsStrip'
import ContactForm from '../components/ContactUs/ContactForm'
import MapSection from '../components/ContactUs/MapSection'
import ContactCTA from '../components/ContactUs/ContactCTA'

const Contacts = () => {
  return (
    <div>
      <ContactHero/>
      <ContactDetailsStrip/>
      <ContactForm/>
      <MapSection/>
      <ContactCTA/>
    </div>
  )
}

export default Contacts