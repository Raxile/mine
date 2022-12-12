import React, { useState } from 'react'

import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop'

import './MainNavigation.css'

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  }

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  }
  return (
    <React.Fragment>
      <MainHeader>

        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className='main-navigation__drawer-nav'>
            <NavLinks />
          </nav>
        </SideDrawer>


        <button className=' main-navigation__menu-btn w-12 h-12 bg-transparent border-none block flex-col justify-around mr-8 cursor-pointer' onClick={openDrawerHandler} >
          <span className='block w-10 h-[1.5px] mt-4 bg-black' />
          <span className='block w-10 h-[1.5px] mt-2 bg-black' />
          <span className='block w-10 h-[1.5px] mt-2 bg-black' />

        </button>
        <h1 className='main-navigation__title text-black '>
          LOGO
        </h1>
        <nav className='main-navigation__header-nav hidden'>
          <NavLinks />
        </nav>

      </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation
