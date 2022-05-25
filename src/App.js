import "./App.css";
import Header from './Components/Header'
import Figure from './Components/Figure'
import React, { useState, useEffect } from 'react'
import Word from './Components/Word'
import WrongLetters from './Components/WrongLetters';
import WordInput from './WordInput'
const wordList = ['singapore', 'tiktok', 'camp', 'youth']
let selectedWord = wordList[Math.floor(Math.random() * wordList.length)]
function App() {
    
    const [correctLetters, setCorrectLetters] = useState([])
    const [playable, setPlayable] = useState(true)
    const [wrongLetters, setWrongLetters] = useState([])

    useEffect(() => {
      
      const handleFormSubmit = (event) => {
       const letter = event.key;
       console.log(letter);            
          if (event.keyCode >= 65 && event.keyCode <= 90) {
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
  </>
  )
}
export default App;
