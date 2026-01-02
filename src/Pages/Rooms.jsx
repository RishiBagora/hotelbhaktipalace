import React from 'react'
import RoomsHero from '../components/rooms/RoomsHero'

import RoomsFeed from '../components/rooms/RoomsFeed'
import RoomsPageCTA from '../components/rooms/RoomsPageCTA'

const Rooms = () => {
  return (
    <div>
      <RoomsHero/>
      
      <RoomsFeed/>
      
      <RoomsPageCTA/>
    </div>
  )
}

export default Rooms