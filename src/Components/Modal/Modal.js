import React, { useEffect, useState } from 'react';
import './Modal.css';
import MoreSubBreedImages from './SubBreed/MoreSubBreedImages';
import SubBreedList from './SubBreed/SubBreedList';

const Modal = (props) => {
    const {dogBreedClicked , closeModal , names } = props;

    const [subBreedName , setSubBreedName] = useState([])


    useEffect( () =>{
        fetch(`https://dog.ceo/api/breed/${dogBreedClicked}/list`)
        .then( (res) => res.json())
        .then( (data) => {
            setSubBreedName(data.message)
        })
    } , [dogBreedClicked])


  return (
    <div className='outer_container'>
     <div className='inner_container'>
     <div className='close_modal' onClick={closeModal}>x</div>
         <h1 className='heading_modal'> {dogBreedClicked}</h1>
         <div className='sub_breeds'>
             <h3>Sub Breeds</h3>

             {subBreedName.length===0 ? <h2> No Sub-Breeds Found</h2> : <SubBreedList dogBreedClicked = {dogBreedClicked} subBreedName = {subBreedName}/>}
             
             <MoreSubBreedImages dogBreedClicked = {dogBreedClicked} names={names}/>     
         </div>
           
        </div>

    </div>
  )
}

export default Modal