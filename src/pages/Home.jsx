import React from 'react'
import Leftside from '../components/leftside'
import Rightside from '../components/rightside'

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Leftside/>
        <Rightside/>
      </div>
    </div>
  )
}

export default Home
