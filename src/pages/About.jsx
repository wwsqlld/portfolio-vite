import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {

  const navigate = useNavigate()
  

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
            Programming, language learning, Gym. Living life👀
          </p>
        </div>
        <div className='also-interesting'>
          <p id='what-i-txt'>Attachments</p>
          <a 
          href='https://open.spotify.com/user/y0pcv4d0rd9sfecrva3010dfm?si=DO4HaQP-QMO7tZzec6MGGA' 
          target="_blank" 
          className='al-int-txt'
          >My playlist</a>
          <a className='al-int-txt' onClick={(e) => {navigate("/heart")} }>Heart</a>
         
        </div>
      </div>
      
    </motion.div>
  )
}

export default About