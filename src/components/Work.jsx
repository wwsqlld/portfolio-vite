import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import cards from '../assets/cards.png';
import { delay, motion } from 'framer-motion';

const Work = () => {

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
      once: true
    }}
    name="scroll-to-element" 
    className='work-part'>
      <div className='work-container'>
        <div className='proj-title'>
           <p id='pr-tit-txt-1'>Trait Cards</p>
           <p id='pr-tit-txt-2'>Test application in database management</p>
        </div>
        <div className='proj-description'>
          <p id='pr-des-txt-1'>User cards, lightweight design and architecture.<br /> Now on the new Vite engine.</p>
          <a href='https://data-app-vite.vercel.app/'  target="_blank" style={{ textDecoration: 'none' }}>
            <div className='proj-link-btn'>
              <p id='pr-des-txt-2'>View Project</p>
              <IoIosArrowRoundForward size={35} style={{ color: '#4d8ffb' }}/>
            </div>
          </a>
        </div>
      </div>
      <div className='img-of-project'>
        <img src={cards} alt=""  loading='lazy'/>
      </div>
      <p className='wk-last-text'>(Probably would have been more if I'd had the time.)</p>
    </motion.div>
  )
}

export default Work
