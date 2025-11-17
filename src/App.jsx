import React from 'react'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import Aboutus from './Pages/Aboutus'
import { Link,Route, Router, Routes } from 'react-router-dom'
import Pangat from './Pages/Pangat'
import Navbar from './components/general/Navbar'
import FooterSection from './components/general/FooterSection'
import ScrollToTop from './components/general/ScrollToTop'
import Attractions from './Pages/Attractions'
import Blogs from './Pages/Blogs'
import Contacts from './Pages/Contacts'

const App = () => {
  return (
    <>
    <ScrollToTop/>
     <Navbar/>
      <div className='w-screen h-screen overflow-x-hidden'>
        <main className='pt-16 md:pt-24'>
          <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/pangat' element={<Pangat/>}/>
        <Route path='/attractions' element={<Attractions/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contacts/>}/>
      </Routes>
        </main>          
    </div>
    <FooterSection/>
    </>
     
    
    
  )
}

export default App