'use client'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRecentPost } from "@/store/store";
const InitRecent = () =>{

    const dispatch = useDispatch()
    useEffect(()=>{
        const localeStorage = JSON.parse(localStorage.getItem("recentPost"))||[]

        dispatch(setRecentPost(localeStorage))
    },[dispatch])

    return null;
}

export default InitRecent;