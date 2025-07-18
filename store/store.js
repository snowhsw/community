// 'use client'

import { createSlice, configureStore } from "@reduxjs/toolkit";



const recentPostSlice  = createSlice({
    name: "storage",
    initialState: [],
    reducers:{
        setRecentPost (state, action){
            return action.payload;
        }
    }
})
const store = configureStore({
    reducer:{
        recentPost : recentPostSlice.reducer
    }
})

export const { setRecentPost } = recentPostSlice.actions
export default store;