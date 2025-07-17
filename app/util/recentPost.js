'use client'

import { useEffect } from "react"

const RecentPost = ({post}) =>{

    
    // useEffect(()=>{
        
        const store = localStorage.getItem("recentPost");
        const recent = store ? JSON.parse(store) : [];
        

        console.log(recent)

        
        localStorage.setItem("recentPost", JSON.stringify([post, ...recent]));
        


        // localStorage.removeItem("recentPost");
    // },[post])


    return null;
}

export default RecentPost;