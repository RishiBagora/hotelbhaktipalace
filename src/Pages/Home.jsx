import React from 'react'
import Navbar from '../components/home/Navbar'
import Hotelname from '../components/home/Hotelname'
import Background from '../components/home/Background'

import Aboutsection from '../components/home/Aboutsection'
import RoomsAndSuites from '../components/home/RoomsAndSuites'
import AmenitiesSection from '../components/home/AmenitiesSection'
import LocationSection from '../components/home/LocationSection'
import DiningSection from '../components/home/DiningSection'
// import AboutUs from '../components/home/AboutUs'

const Home = () => {
  return (
    <div className='w-screen h-screen '>
        <Navbar/>
        <Hotelname/>
        <Background/>
        <Aboutsection/> 
        <LocationSection/>
        {/* <AboutUs/> */}
        <RoomsAndSuites/>
        <AmenitiesSection/>
        <DiningSection/>
       
    </div>
  )
}

export default Home