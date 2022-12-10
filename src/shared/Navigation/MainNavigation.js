import React from 'react'
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'

import './MainNavigation.css'

const MainNavigation = () => {
  return (
    <React.Fragment>
    <MainHeader>
          <button className='hidden main-navigation__menu-btn w-12 h-12 bg-transparent border-none  flex-col justify-around mr-8 cursor-pointer' >
               <span className='block w-10 h-[1.5px] bg-white' />
               <span className='block w-10 h-[1.5px] bg-white' />
               <span className='block w-10 h-[1.5px] bg-white' />
               
          </button>
          <h1 className='main-navigation__title text-black '>
            LOGO  
          </h1>
          <nav className='main-navigation__header-nav block'>
            <NavLinks />
          </nav>
    
    </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation
