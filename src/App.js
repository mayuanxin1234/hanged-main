import "./App.css";
import Header from './Components/Header'
import Figure from './Components/Figure'
import React, { useState, useEffect } from 'react'
import Word from './Components/Word'
import Popup from "./Components/Popup";
import WrongLetters from './Components/WrongLetters';
const wordList = ['singapore', 'tiktok', 'camp', 'youth']
let selectedWord = wordList[Math.floor(Math.random() * wordList.length)]
function App() {
    
    const [correctLetters, setCorrectLetters] = useState([])
    const [playable, setPlayable] = useState(true)
    const [wrongLetters, setWrongLetters] = useState([])

    useEffect(() => {
      
      const handleFormSubmit = (event) => {
       const letter = event.key;
	   if (wrongLetters.length === 6) {
		   setPlayable(value => [false]);
	   }         
	   if (correctLetters.length === selectedWord.length) {
      setPlayable(value => [false]);
	   }
          if (playable && event.keyCode >= 65 && event.keyCode <= 90) {
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
	}
        
        //const button = document.querySelector('button')
       
      window.addEventListener('keydown', handleFormSubmit); 
     
      return () => window.removeEventListener('keydown', handleFormSubmit);
      }, [correctLetters, wrongLetters, playable]);
    
  return (    
    <>
  <Header />
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Popup trigger = {wrongLetters.length === 6}>
          <h3>Game Over!</h3>
          <p>Better luck next time</p>
        </Popup>
        <Popup trigger = {correctLetters.length === new Set(selectedWord).size}>
        <h3>You Won!</h3>
          <p>Try again?</p>
        </Popup>
  </>
  )
}
export default App;
