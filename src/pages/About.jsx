import React from 'react';
import { motion } from 'framer-motion';

const About = () => {

  const fadeInVarience = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    },
  }




  return (
    <motion.div 
      variants={fadeInVarience}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true
      }}
    className='about'>
      <div className='about-container'>
        <div className='about-me-part'>
          <p id='about-me-text'> 
            My name is Vlad, I'm from Kyiv. Programming, language learning, gym. Living life👀
          </p>
        </div>
        <div className='also-interesting'>
          <p id='what-i-txt'>What I like</p>
          <a 
          href='https://open.spotify.com/user/y0pcv4d0rd9sfecrva3010dfm?si=DO4HaQP-QMO7tZzec6MGGA' 
          target="_blank" 
          className='al-int-txt'
          >Listen to music</a>
          <p className='al-int-txt'>Taking pictures of my cat</p>
          <p className='al-int-txt'>Watch movies</p>
        </div>
      </div>
      
    </motion.div>
  )
}

export default About