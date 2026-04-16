import React from 'react'
import Left from './Left'
import Right from './Right'

const Page1content = (props) => {
  return (
    <div className='flex justify-between gap-2' >
      <Left/>
      <Right data={props.data}/>
    </div>
  )
}

export default Page1content
