import React from 'react'
import './CustomHeader.css'

const CustomHeader = (props) => {
    const {customClickHandler} = props;
  return (
   <div className='custom_header'>
       <h1 className='custom_heading'>DOG GALLERY</h1>
    <button className='custom_button' onClick={()=> {
        customClickHandler()
    }}>Custom Search</button>
   </div>
  )
}

export default CustomHeader