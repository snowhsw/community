'use client'

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { likeSyncing } from "@/store/store";
const Recommend = ({ style, like, id, clickUser }) => {

    const dispatch = useDispatch()
    const [likeCount, setLikeCount] = useState(like)


    const clickCondition = clickUser ? clickUser.user.email : null
    return (
        <div className={style}>
            <button
                onClick={() => {
                    clickCondition ?
                        fetch('/api/post/likeUpdate',
                            {
                                method: "POST",
                                body: JSON.stringify({ id: id, user: clickCondition }),
                                headers: { "Content-Type": "application/json" }
                            }
                        )
                        .then(res => res.json())
                        .then(data => {
                            if (data.alreadyMessage) {
                                alert("이미 추천한 게시글 입니다.")
                                console.log()
                            }
                            else {
                                setLikeCount(data);
                                dispatch(likeSyncing({ id: id, like: data }));
                            }
                        })
                            .catch(() => console.log("에러입니다."))
                        //로그인 안되어 있으면 경고창
                        : alert("로그인해")

                }}
            >
                <span >추천 </span><br />
                <span>{likeCount}</span>
            </button>
        </div>
    )
}

export default Recommend;