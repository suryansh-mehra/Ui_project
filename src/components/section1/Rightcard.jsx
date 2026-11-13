import React from 'react'

const Rightcard = (props) => {
  return (
    <div className="relative w-75 h-full rounded-4xl overflow-hidden">

      <img
        className="w-full h-full object-cover"
        src={props.img}
        alt=""
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute top-5 left-5 w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm font-semibold">
        {props.id+1}
      </div>

      <div className="absolute bottom-6 left-6 right-6 text-white">

        <p className="text-[14px] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.
        </p>

        <div className="flex items-center justify-between mt-4">

          <button className="bg-blue-500 px-4 py-2 rounded-full text-sm font-medium">
            {props.tag}
          </button>

          <img
            className="w-5 h-5 invert"
            src="https://www.svgrepo.com/show/533610/arrow-right.svg"
            alt=""
          />
        </div>

      </div>

    </div>
  )
}

export default Rightcard