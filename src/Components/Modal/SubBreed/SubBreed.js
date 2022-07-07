import React, { useState ,useEffect } from 'react';
import './SubBreed.css';

const SubBreed = (props) => {
    const {dogBreedClicked , subBreedName } = props;

    const [subBreedImg , setSubBreedImg] = useState([])

    useEffect( () => {
        fetch(`https://dog.ceo/api/breed/${dogBreedClicked}/${subBreedName}/images/random`)
        .then( (res) => res.json())
        .then( (data) => {
            setSubBreedImg(data.message)
        })

    },[dogBreedClicked , subBreedName])
  return (
    <div className='sub_breed_card'>
        <img src={subBreedImg} alt='breeed_img' />
        <h4>{subBreedName}</h4>
    </div>
  )
}

export default SubBreed