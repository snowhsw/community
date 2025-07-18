'use client'

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setRecentPost } from "@/store/store"
const RecentPost = ({post}) =>{

    const dispatch = useDispatch()
    
    useEffect(()=>{
        
        //로컬스트리지 가져오기
        const store = localStorage.getItem("recentPost");

        //업으면 빈 배열
        const recent = store ? JSON.parse(store) : [];
        
        //중복제거
        const filter = recent.filter(p => p._id !== post._id);

        //5개 제한
        const slicePost = [post, ...filter].slice(0,5);
        
        //다시 넣기
        localStorage.setItem("recentPost", JSON.stringify(slicePost));

        //리덕스 전달
        dispatch(setRecentPost(slicePost));

    },[post, dispatch])


    return null;
}

export default RecentPost;