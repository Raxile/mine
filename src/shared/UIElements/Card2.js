import React from 'react'
import  './Card2.css'

const Card2 = (props) => {
  return (
    <div>
      <div className="flex justify-center my-4 margin__card w-[70vw] ml-[15vw]">
  <div className="rounded-lg hover:shadow-lg hover:bg-cyan-50 bg-white max-w-sm">
    <div className='w-[30vw]  media__img__w'>
      <img className="media__img rounded-t-lg mx-[22vw] my-[1vh]" src={props.img} alt=""/>
    </div>
    <div className="p-6  text-center">
      <h5 className="text-gray-900 text-xl font-medium mb-2 ">{props.name}</h5>
      <p className="text-gray-700 text-base mb-4">{props.para}</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card2
