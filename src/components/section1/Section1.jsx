import React from 'react'
import Navbar from './navbar'
import Page1content from './Page1content'

const Section1 = (props) => {
  return (
    <div>
      <Navbar/>
      <Page1content data= {props.data}/>
    </div>
  )
}

export default Section1
