import React, { useEffect, useState } from 'react'
import './Dogcard.css'

const Dogcard = (props) => {
   const {name , breedClicked ,selectedDogBreed} = props;
   const[breedImg ,  setBreedImg] = useState([])

   useEffect( () => {
       fetch(`https://dog.ceo/api/breed/${name}/images/random`)
       .then( (res) => res.json())
       .then( (data) => {
        setBreedImg(data.message)
       })
   },[])
  return (
    <div className='card' onClick={()=>{
      breedClicked(selectedDogBreed)
    }}>
        <img src={breedImg} alt="dog-images"/>
        <h3 className="content">{name}</h3>
        </div>
  )
}

export default Dogcard