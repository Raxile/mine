import React from 'react'
import './BackContent.css'

const BackContent = (props) => {
  return (
    <div className={` banner__strip h-[90vh] w-[95vw]  bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 z-10 fixed`}>
      <div className='banner__content h-[90vh] w-[95vw] flex flex-col '>
        <div className='left'>
        <img className='banner__img h-[35vh] px-2' src={props.imgUrl} alt={props.name} />
        </div>
        <div className='banner__text Right  mt-4 text-white text font-serif'>
        <h1 className='font-bold text-2xl w-[73vw]  text-center'>{props.name}</h1>
         <p className='  mt-4 w-[73vw] text-center '>{props.description}</p>
       
        </div>
      </div>
    </div>

  )
}

export default BackContent
