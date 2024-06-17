import { createSlice } from '@reduxjs/toolkit'

 const gptSlice = createSlice({
  name: 'gpt',
  initialState:{
    gptSearch:false,
    gptInput:null,
    gptResponse:null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
       state.gptSearch =!state.gptSearch;
    },
    addGptResponse:(state,action)=>{
       state.gptResponse=action.payload;
    },
    addGptInput:(state, action) => {
      state.gptInput=action.payload;
    },
   
    
  },
})

export const { toggleGptSearch, addGptResponse } = gptSlice.actions;

export default gptSlice.reducer;