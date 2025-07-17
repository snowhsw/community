'use client'

import { useEffect } from "react"

const RecentPost = ({post}) =>{

    
    useEffect(()=>{
        
        const store = localStorage.getItem("recentPost");
        const recent = store ? JSON.parse(store) : [];
        
        const filter = recent.filter(p => p._id !== post._id)

        const setPost = [post, ...filter]
        
        
        localStorage.setItem("recentPost", JSON.stringify(setPost));
        
        // console.log(setPost)



    },[post])


    return null;
}

export default RecentPost;