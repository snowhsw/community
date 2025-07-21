'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react";
const DetailError = () =>{

    const router = useRouter();
    useEffect(()=>{
        alert("삭제된 게시글 입니다.");
        router.push("/");
    })
    return null
}

export default DetailError;