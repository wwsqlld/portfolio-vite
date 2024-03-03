import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsList } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";

import { CSSTransition } from 'react-transition-group';
import { scroller } from 'react-scroll'


const Navbar = () => {

  //  const [isScrolled, setIsScrolled] = useState(false);


  //  useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 200) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  const scrollTo = () => {
    scroller.scrollTo('scroll-to-element', {
      duration: 1500,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  return (
    <div className="navbar">
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
    </div>
  )
}

export default Navbar