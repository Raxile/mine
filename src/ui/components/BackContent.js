import React from 'react'


const BackContent = (props) => {
  return (
    <div className={` h-[30rem] w-[82rem] bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-500 z-10 fixed`}>
      <div className='h-60 w-60 '>
        <h1>{props.name}</h1>
        <img className='' src={props.imgUrl} alt='' />
      </div>
    </div>

  )
}

export default BackContent
