import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll/modules';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY > 80) {
      setScrollNav(true)
    }
    else {
      setScrollNav(false)
    }
  }

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  })

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>gravity</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='howitworks' smooth={true} duration={500} spy={true} exact='true' offset={-80}>How it works</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='pricing' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Pricing</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/getdemo">Get Demo</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
};

export default Navbar;

<h1>Nav</h1>