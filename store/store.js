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


const viewCount = createSlice({
    name: "viewCount",
    initialState:{},
    reducers:{
        viewSyncing(state, action){
            // console.log(action.payload)
            return action.payload;
        }
    }
})

const likeCount = createSlice({
    name: "likeCount",
    initialState: {},
    reducers:{
        likeSyncing(state, action){
            // console.log(action.payload)
            return action.payload
        }
    }
})

const commentUpdate = createSlice({
    name:"commentUpdate",
    initialState: [],
    reducers:{
        commUpdate(state, action){
            console.log(action.payload)
            return action.payload
        }
    }
})



const store = configureStore({
    reducer:{
        recentPost : recentPostSlice.reducer,
        viewCount: viewCount.reducer,
        likeCount: likeCount.reducer,
        commentUpdate: commentUpdate.reducer
    }
})

export const { setRecentPost } = recentPostSlice.actions;
export const { viewSyncing } = viewCount.actions;
export const { likeSyncing } = likeCount.actions;
export const { commUpdate } = commentUpdate.actions;
export default store;