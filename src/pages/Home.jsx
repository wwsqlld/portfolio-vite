import React from 'react'
import Hr from '../components/Hr'
import Me from '../components/Me'
import Skills from '../components/Skills'
import Work from '../components/Work'

const Home = () => {
  return (
    <div className='home'>
       <Me />
        <Hr />
       <Work />
        <Hr />
       <Skills />
    </div>
  )
}

export default Home