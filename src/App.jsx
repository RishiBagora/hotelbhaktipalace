import React from 'react'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import Aboutus from './Pages/Aboutus'
import { Link,Route, Routes } from 'react-router-dom'
import Pangat from './Pages/Pangat'

const App = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/pangat' element={<Pangat/>}/>
      </Routes>
                         
    </div>
  )
}

export default App