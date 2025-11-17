import React from 'react'
// import Navbar from '../components/home/Navbar'
import Hotelname from '../components/home/Hotelname'
import Background from '../components/home/Background'
import Aboutsection from '../components/home/Aboutsection'
import RoomsAndSuites from '../components/home/RoomsAndSuites'
import AmenitiesSection from '../components/home/AmenitiesSection'
import LocationSection from '../components/home/LocationSection'
import DiningSection from '../components/home/DiningSection'
import StatsStrip from '../components/home/StatsStrip'
import TestimonialSection from '../components/home/TestimonialSection'
import FooterSection from '../components/general/FooterSection'
// import AboutUs from '../components/home/AboutUs'

const Home = () => {
  return (
    <div className='w-screen h-screen bg-[#faf9f6]'>
        {/* <Navbar/> */}
        <Hotelname/>
        <Background/>
        <Aboutsection/> 
        <LocationSection/>
        {/* <AboutUs/> */}
        <RoomsAndSuites/>
        <AmenitiesSection/>
        <DiningSection/>
        <StatsStrip/>
       <TestimonialSection/>
       <FooterSection/>
    </div>
  )
}

export default Home