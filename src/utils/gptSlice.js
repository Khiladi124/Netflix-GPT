import { createSlice } from '@reduxjs/toolkit'

 const gptSlice = createSlice({
  name: 'gpt',
  initialState:{
    gptSearch:false,
    gptResponse:null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
       state.gptSearch =!state.gptSearch;
    },
    getGptResponse:(state,action)=>{
       
    },
   
    
  },
})

export const { toggleGptSearch, getGptResponse } = gptSlice.actions;

export default gptSlice.reducer;