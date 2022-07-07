import React from 'react'
import SubBreed from './SubBreed';

const SubBreedList = (props) => {
    const {subBreedName , dogBreedClicked} = props;
    let subBreedName1 = subBreedName.slice(0,4);
   
  return (
    
    subBreedName1.map( (subBreedName) => {
        return <SubBreed subBreedName = {subBreedName} dogBreedClicked = {dogBreedClicked} />
    })

  )
}

export default SubBreedList