import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {

  const fadeInVarience1 = {
    initial: {
      x: -70,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
  }

  const fadeInVarience2 = {
    initial: {
      x: 70,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
  }


  return (
    <div className='footer'>
      <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeInVarience1}
      viewport={{
        once: true
      }}
      id="first-fr-txt"
      ><p>Created and built by Vlad 😛</p></motion.div>
      <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeInVarience2}
      viewport={{
        once: true
      }}
       className='contact-part'>
        <a target="_blank" href='https://www.instagram.com/wwsqlld13/'>
          <FaInstagram size={25} style={{ cursor: 'pointer', color: 'black' }}/>
        </a>
        <a target="_blank" href='https://www.linkedin.com/in/vladyslav-b-892983297/'>
          <FaLinkedin size={25} style={{ cursor: 'pointer', color: 'black' }}/>
        </a>
        <a target="_blank" href='https://github.com/wwsqlld'>
          <FaGithub size={25} style={{ cursor: 'pointer', color: 'black' }}/>
        </a>
        <a target="_blank" href='https://open.spotify.com/user/y0pcv4d0rd9sfecrva3010dfm?si=DO4HaQP-QMO7tZzec6MGGA'>
          <FaSpotify size={25} style={{ cursor: 'pointer', color: 'black' }}/>
        </a>
      </motion.div>
       
    </div>
  )
}

export default Footer