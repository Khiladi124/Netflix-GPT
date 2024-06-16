import { createSlice } from "@reduxjs/toolkit";
const langSlice=createSlice({
    name:'lang',
    initialState:{
        currLanguage:'en',
    },
    reducers:{
        changeLang:(state, action) => {
            state.currLanguage=action.payload;
        },
    }
});
export const {changeLang}=langSlice.actions;
export default langSlice.reducer;