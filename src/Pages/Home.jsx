import React from 'react'
import Navbar from '../components/home/Navbar'
import Hotelname from '../components/home/Hotelname'
import Background from '../components/home/Background'
// import Ambienceshow from '../components/home/Ambienceshow'
import Aboutsection from '../components/home/Aboutsection'
import RoomsAndSuites from '../components/home/RoomsAndSuites'
import AmenitiesSection from '../components/home/AmenitiesSection'

const Home = () => {
  return (
    <div className='w-screen h-screen '>
        <Navbar/>
        <Hotelname/>
        <Background/>
        {/* <Ambienceshow/> */}
        <Aboutsection/>
        <RoomsAndSuites/>
        <AmenitiesSection/>
    </div>
  )
}

export default Home