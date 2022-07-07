import React, { useEffect, useState }  from "react";
import CustomHeader from "./Components/CustomModalHeader/CustomHeader";
import CustomModal from "./Components/CustomModalHeader/CustomModal/CustomModal";
import DogcardList from "./Components/DogCard/DogcardList";
import InputSearchBox from "./Components/InputSearchBox/InputSearchBox";
import Modal from "./Components/Modal/Modal";

function App() {
  const[names, setNames] = useState([])
  const[inputsearchField,setInputSearchField]=useState('')
  const[showModal , setShowModal] = useState(false);
  const[dogBreedClicked , setDogBreedClicked] =useState({});
  const[customShowModal , setCustomShowModal] = useState(false)

  useEffect( () => {
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then( (res) => res.json())
    .then( (data) => {
      // console.log(Object.keys(data.message))
      setNames(Object.keys(data.message)) 
    })
  },[])

  const handleSearchField = (inputsearchField) =>{
    setInputSearchField(inputsearchField)
  }

  const inputFilteredDog = names.filter( (name) => {
    return name.toLowerCase().includes(inputsearchField.toLowerCase())
  })

  const breedClicked = (selectedDogBreed) => {
    console.log("breed Clicked")
    setShowModal(true);
    setDogBreedClicked(selectedDogBreed)
  }

  const closeModal = () =>{
    console.log("close modal clicked")
    setShowModal(false);
  }

  const customClickHandler = () => {
      console.log("clicked on custom click")
      setCustomShowModal(true);
    }
    const customCloseModal = () => {
      setCustomShowModal(false);
    }

  return (
    <>
    { showModal ? <Modal  dogBreedClicked={dogBreedClicked} closeModal={closeModal}/> : null}

    {customShowModal ? <CustomModal customCloseModal = {customCloseModal}/> : null}

    <CustomHeader customClickHandler = {customClickHandler}/>

    <InputSearchBox handleSearchField = {handleSearchField}/>

    <DogcardList name= {names , inputFilteredDog} breedClicked = {breedClicked} />
    </>
  );
}

export default App;
