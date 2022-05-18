import { createSlice, configureStore } from '@reduxjs/toolkit'

const state = createSlice({
  name: 'counter',
  initialState: {
    value: true
  },
  reducers: {
    correct: state => {    
      state.value = true
        },
    wrong: state => {
      state.value = false
    }
  }
})

export const { correct, wrong } = state.actions