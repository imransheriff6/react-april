import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
   dynamicAdd:(state,action)=>{
    state.value += action.payload
   }
  }, 
})

// Action creators are generated for each case reducer function
export const { increment, decrement,dynamicAdd } = counterSlice.actions
export const selectCount = (state) => state.counter.value
export default counterSlice.reducer