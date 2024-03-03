import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {


  const fadeInVarience = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4
      }
    },
  }




  return (
    <motion.div 
    initial="initial"
    whileInView="animate"
    variants={fadeInVarience}
    viewport={{
      amount: 0.5,
      once: true
    }}
    className='skills-part'>
      <p id='skill-logo-txt'>Skills</p>
      <div className='skills-container'>
        <div className='skill-definition'>
          <p className='skill-text'>A near-perfect level of skill:</p>
          <img src="https://skillicons.dev/icons?i=html,css,js,github,vercel,react,npm,mongodb,firebase,figma,bootstrap,sass" alt='' />
        </div>
        <div className='skill-definition'>
          <p className='skill-text'>Initial level of skill:</p>
          <img src="https://skillicons.dev/icons?i=webpack,vite,vitest,ts,ps,express,nodejs,git,py,php" alt=''  />
        </div>
        <div className='skill-definition'>
          <p className='skill-text'>Beginning to learn:</p>
          <img src="https://skillicons.dev/icons?i=nextjs,graphql," alt=''  />
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
