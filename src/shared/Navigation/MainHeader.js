import React from 'react'

import './MainHeader.css'

const MainHeader = (props) => {
  return (
    <header className='main-header w-full h-16 flex items-center fixed top-0 left-0 z-50 py-0 px-4 bg-white '>
      {props.children}
    </header>
  )
}

export default MainHeader
