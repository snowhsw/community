'use client'
import { useEffect } from "react";
const IncrementView = ({post}) =>{
    useEffect(()=>{
        fetch('/api/post/incrementView',
            {
                method:"POST", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(post)
            }
        )
        .then(()=>{
            console.log("성공")
        })
        .catch(()=>{
            console.log("에러")
        })
    },[post])
    return null;
}

export default IncrementView