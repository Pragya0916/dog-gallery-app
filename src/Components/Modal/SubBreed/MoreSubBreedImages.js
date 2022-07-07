import React, { useEffect, useState } from 'react'
import './MoreSubBreedImg.css'

const MoreSubBreedImages = (props) => {
    const {dogBreedClicked} = props;
    const [MoreSubBreedImg , setMoreSubBreedImg] = useState([])

useEffect( () => {
    fetch(`https://dog.ceo/api/breed/${dogBreedClicked}/images/random/8`)
    .then( (res) => res.json())
    .then( (data) => {
        setMoreSubBreedImg(data.message)

    })
},[dogBreedClicked])

  return (
    <div className='more_image_card'>
        <h4>More Images</h4>
        <img src={MoreSubBreedImg[0]} alt="dog_img" />
        <img src={MoreSubBreedImg[1]} alt="dog_img" />
        <img src={MoreSubBreedImg[2]} alt="dog_img" />
        <img src={MoreSubBreedImg[3]} alt="dog_img" />
        <img src={MoreSubBreedImg[4]} alt="dog_img" />
        <img src={MoreSubBreedImg[5]} alt="dog_img" />
        <img src={MoreSubBreedImg[6]} alt="dog_img" />
        <img src={MoreSubBreedImg[7]} alt="dog_img" /> 
    </div>
  )
}

export default MoreSubBreedImages