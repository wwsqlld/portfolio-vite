import React from 'react';
import batman from '../assets/batman.webp';
import { motion } from 'framer-motion';

const Me = () => {

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
      className='me-part'>
      <div className='me-container'>
        <img src={batman} alt='' width={260}/>
        <p id='me-general-txt'><span style={{color: '#5b95cb'}}>Hello!</span><br/> I'm Vlad, future full-stack programmer from Kyiv.</p>
      </div>
    </motion.div>
  )
}

export default Me
