import React from 'react'
import Dogcard from './Dogcard'


const DogcardList = (props) => {
    const {name , breedClicked} = props;
  return (
   name.map( (name) => {
       return(
           <>
            <Dogcard name={name} selectedDogBreed={name} breedClicked = {breedClicked} />
           </>
       )
   })
    
  )
}

export default DogcardList