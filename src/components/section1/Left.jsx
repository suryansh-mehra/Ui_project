import React from 'react'
import Herotext from './Herotext'
import Arrow from './Arrow'

const Left = () => {
    return (
        <div className=" mt-4 ml-1 w-[33%] pl-12 pt-6 flex flex-col justify-between h-[80vh]">
            <Herotext />
            <Arrow />

        </div>
    )
}

export default Left
