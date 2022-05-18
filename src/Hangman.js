import React, { useState } from 'react'
import Header from './Components/Header'
import Figure from './Components/Figure'
import Word from './Components/Word'
import WordInput from "./WordInput";
import WrongLetters from './Components/WrongLetters';
import { useDispatch, useSelector } from 'react-redux';
import {decrement, increment} from "./Redux/counter"

const Hangman = () => {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const wordList = ['singapore', 'tiktok', 'camp', 'youth']
    let selectedWord = wordList[Math.floor(Math.random() * wordList.length)]

    const [correctLetters, setCorrectLetters] = useState([])
    const [playable, setPlayable] = useState(true)
    const [wrongLetters, setWrongLetters] = useState([])
  return (
    <>
	<Header />
	<Figure />
  <WrongLetters />
	<Word selectedWord={selectedWord} correctLetters={correctLetters} />	
  <WordInput />
	</>
  )
}

export default Hangman