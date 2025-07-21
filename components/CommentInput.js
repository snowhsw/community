'use client'

import styles from "./CommentInput.module.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { commUpdate } from "@/store/store";
const CommentInput = ({ userInfo, postId }) => {

    const [comment, setComment] = useState({
        parent: postId, 
        commUser: userInfo.user.email, 
        commName: userInfo.user.name,
        commTxt:""
    })

    const dispatch = useDispatch();

    return (
        <form
            className={styles.commentForm}
            onSubmit={(e) => {
                e.preventDefault()
            }}
        >
            <p className={styles.formName}>댓글작성</p>

            <textarea
                type="text"
                className={styles.txtArea}
                value={comment.commTxt}
                onChange={(e) => setComment({...comment, commTxt: e.target.value})}
            />
            <input
                type="submit"
                className={styles.submitBtn}
                value="댓글등록"
                onClick={(e) => {
                    fetch('/api/post/insertComment',{
                        method:"POST",
                        body: JSON.stringify({commInfo: comment}),
                        headers: {"Content-Type": "application/json"}
                    })
                    .then(res => res.json())
                    .then(date => {
                        setComment({...comment, commTxt: ""})
                        dispatch(commUpdate(date.result))
                    })
                    .catch(()=> console.log("에러"))
                }}
            />

        </form>
    )
}

export default CommentInput;