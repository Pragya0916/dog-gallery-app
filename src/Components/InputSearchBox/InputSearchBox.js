import React from 'react'
import './InputSearchBox.css'

const InputSearchBox = ({handleSearchField}) => {
  return (
   <>
   <div>
       <input 
       className='searchInput'
       type="text"
       placeholder = "Enter dog breed name..." 
       onChange= { (e) => {
          //  console.log(e.target.value)
        handleSearchField(e.target.value)
       }}  />
   </div>
   </>
  )
}

export default InputSearchBox