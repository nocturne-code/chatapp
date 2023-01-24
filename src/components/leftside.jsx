import React from 'react'
import Navigation from './navigation'
import Searchbar from './searchbar'
import Chats from './chats'

const leftside = () => {
  return (
    <div className='leftside'>
      <Navigation/>
      <Searchbar/>
      <Chats/>
    </div>
  )
}

export default leftside
