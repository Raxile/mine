import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="flex justify-center mt-4 ">
                <div className="rounded-lg hover:shadow-lg bg-white max-w-sm">
                    <img className="rounded-t-lg" src={props.img} alt="" />
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{props.name}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {props.para}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
