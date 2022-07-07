import React, { useEffect, useState } from 'react';
import './CustomModal.css'

const CustomModal = (props) => {
    const {customCloseModal}=props;
const[dogList , setDogList] = useState('');
const [breedName, setBreedName] = useState('');
const [imageCount, setImageCount] = useState('');
const [dogImages, setDogImages] = useState('');
const [breedNameShow, setBreedNameShow] = useState('');
const [imageCountShow, setImageCountShow] = useState('');

useEffect( () => {
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then( (res) => res.json())
    .then( (data) => {
        setDogList(data.message)
    })
},[]);

const getImages =  () => {
   fetch(`https://dog.ceo/api/breed/${breedName}/images/random/${imageCount}`)
   .then( (res) => res.json())
   .then( (data) => {
       setDogImages(data.message)
   })
   setBreedNameShow(breedName)
   setImageCountShow(imageCount)
}




  return (
    <div className='outer_container'>
        <div className='inner_container'>
            <div className='close_modal' onClick={customCloseModal}>x</div>
            <h1 className='modal_heading'>CUSTOM SEARCH</h1>
            <div className='modal_content'>
                <div className='modal_search'>
                    <div className='modal_search_box'>
                        <select value={breedName} onChange={ (e) => {
                            setBreedName(e.target.value);
                        }}>
                            <option>Select a Breed</option>
                            {
                                Object.keys(dogList).map((dogList , i) => {
                                    return(
                                        <option key={i} value={dogList}>{dogList}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='modal_search_box'>
                        <input type="number" placeholder="Enter No. of Images.." value={imageCount} onChange={ (event) => {
                            setImageCount(event.target.value)
                        }} />
                    </div>
                </div>
                <div className='button_container'>
                    <button className='modal_button' onClick={ () => {
                        getImages()
                    }}> Get Images  </button> 
                </div> <br/> <br/>
                {dogImages && <h5 className='search_modal_heading'>Showing "{imageCountShow}" Images "{breedNameShow}"</h5>}
                {dogImages && 
                <div className='search_result'>
                {dogImages && dogImages.map( (dogImages , i)=> {
                    return(
                        <>
                        <div key = {i} className="search_result_container">
                            <img src={dogImages} alt="searched_dogs" />
                        </div>
                        </>
                    )
                })} 
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default CustomModal