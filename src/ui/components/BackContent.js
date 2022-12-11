import React from 'react'


const BackContent = (props) => {
  return (
    <div className={` h-[30rem] w-[84rem] px-8  bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 z-10 fixed`}>
      <div className='h-60 w-[59rem] flex space-x-4'>
        <div className='left'>
        <img className='h-[20rem] w-fit' src={props.imgUrl} alt='' />
        </div>
        <div className='Right w-[30rem]  mt-4 text-white text font-serif'>
        <h1 className='font-bold text-3xl ml-4 text-center'>{props.name}</h1>
         <p className='font-semibold ml-4 mt-4 text-justify'>{props.description}</p>
       
        </div>
      </div>
    </div>

  )
}

export default BackContent
