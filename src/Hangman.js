import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Figure from './Components/Figure'
import Word from './Components/Word'
import WordInput from "./WordInput";
import WrongLetters from './Components/WrongLetters';
import { useDispatch, useSelector } from 'react-redux';
import {decrement, increment} from "./Redux/counter"
import {useLocation} from 'react-router-dom';
import { render } from '@testing-library/react';
const Hangman = (props) => {


    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const wordList = ['singapore', 'tiktok', 'camp', 'youth']
    let selectedWord = wordList[Math.floor(Math.random() * wordList.length)]
    const [correctLetters, setCorrectLetters] = useState([])
    const [playable, setPlayable] = useState(true)
    const [wrongLetters, setWrongLetters] = useState([])
    useEffect(() => {
      
      const handleFormSubmit = () => {
        console.log(props.data);
       const letter = props.data;  
           
          
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]);
            } 
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [...wrongLetters, letter]);
            } 
          }
        }
        
        const button = document.querySelector('button')
       
      button.addEventListener('click', handleFormSubmit);       
     
      return () => button.removeEventListener('click', handleFormSubmit);
      }, [correctLetters, wrongLetters]);
    
  return (
    
    <>
	<Header />
	<Figure />
  <WrongLetters wrongLetters = {wrongLetters}/>
	<Word selectedWord={selectedWord} correctLetters={correctLetters} />	
	<WordInput/>
  </>
  )
}

export default Hangman