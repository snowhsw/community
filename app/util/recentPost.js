'use client'

import { useEffect } from "react"

const RecentPost = ({post}) =>{

    
    useEffect(()=>{
        
        const store = localStorage.getItem("recentPost");
        const recent = store ? JSON.parse(store) : [];
        
        const filter = recent.filter(p => p._id !== post._id);

        const setPost = [post, ...filter];
        const slicePost = setPost.slice(0,5);
        
        localStorage.setItem("recentPost", JSON.stringify(slicePost));


    },[post])


    return null;
}

export default RecentPost;