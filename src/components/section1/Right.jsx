import React from 'react'
import Rightcard from './Rightcard'

const Right = (props) => {
  return (
    <div className=' flex mr-1 px-1 ml-1 mt-4 w-full overflow-x-auto' >

      <div className='flex gap-3 pt-8 min-w-max'>
         {props.data.map(function(elem,idx){
          
          return <div key={idx}>
            <Rightcard img={elem.img} tag={elem.tag} id={idx}/>
          </div>
         })}

      </div>

    </div>
  )
}

export default Right
1