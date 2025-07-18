'use client'

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { likeSyncing } from "@/store/store";
const Recommend = ({ style, like, id }) => {

    const dispatch = useDispatch()
    const [likeCount, setLikeCount] = useState(like)
    
    return (
        <div className={style}>
            <button
                onClick={() => {
                    fetch('/api/post/likeUpdate',
                        {
                            method: "POST",
                            body: JSON.stringify({ id: id }),
                            headers: { "Content-Type": "application/json" }
                        }
                    )
                        .then(res => res.json())
                        .then(data => {setLikeCount(data); dispatch(likeSyncing({id:id, like: data})); })
                        .catch(() => console.log("에러입니다."))
                }}
            >
                <span >추천 </span><br />
                <span>{likeCount}</span>
            </button>
        </div>
    )
}

export default Recommend;