import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsList } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import { scroller } from 'react-scroll';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  
  const menuVars = {
    initial: {
      x: window.innerWidth,
    },
    animate: {
      x: 0,
      transition: {
        duration: 1.1,
      }
    },
    exit: {
      x: window.innerWidth,
      transition: {
        duration: 0.7,
      }
    }
  }


  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  


  const scrollTo = () => {
    scroller.scrollTo('scroll-to-element', {
      duration: 1500,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  return (
    <div className="navbar">
      <AnimatePresence>
        {isOpen && (
          <motion.div
         variants={menuVars}
         initial="initial"
         animate="animate"
         exit="exit"
         className='nav-cont-adap'
         >
          <div className='adap-list'>
            <NavLink to="/" onClick={() => handleClick()} className='nav-btn' style={{ textDecoration: 'none'}} >
                <p>Home</p>
            </NavLink>
            <NavLink to="/about" onClick={() => handleClick()} className='nav-btn' style={{ textDecoration: 'none'}} >
                <p>About</p>
            </NavLink>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
      
        
        <div className='logo-cont'>
            <p id='logo-txt'>V. Bazchenko</p>
            <img src='https://cdn-icons-png.flaticon.com/128/12/12096.png' alt='' loading='lazy' width={35} />
        </div>

        <div className='nav-cont'>
            <NavLink to="/" className='nav-btn' style={{ textDecoration: 'none'}} >
                <p>Home</p>
            </NavLink>
            <Link to="/" className='nav-btn' onClick={() => scrollTo()} style={{ textDecoration: 'none'}}>Work</Link>
            <NavLink to="/about" className='nav-btn' style={{ textDecoration: 'none'}} >
                <p>About</p>
            </NavLink>
        </div>
        
        {!isOpen ? (
         <BsList className='nav-list' size={40} onClick={() => handleClick()} /> 
        ) : (
          <MdOutlineClose className='nav-list' size={40} onClick={() => handleClick()}/>
        )}
        

    </div>
  )
}

export default Navbar