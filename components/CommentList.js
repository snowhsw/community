'use client'

import styles from "./CommentList.module.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { commUpdate } from "@/store/store";
import { useEffect } from "react";
const CommentList = ({parentId}) =>{
    
    
    const list = useSelector(state => state.commentUpdate)
    const dispatch = useDispatch()
    

    useEffect(()=>{
        fetch(`/api/get/getComment?parent=${parentId}`,{
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },[])

    return(
        <div className={styles.commListOuter}>
            <div className={styles.titBox}>
                <h3 className={styles.titTxt}>댓글 목록</h3>
            </div>
            {
                list.length !== 0
                ?list.map(comm =>{
                    return(
                        <div key={comm._id.toString()} className={styles.listBox}>
                            <div className={styles.commInfo}>
                                <p>작성자: {comm.commName}</p>
                                <p>작성일: {comm.commTime}</p>
                            </div>
                            <p className={styles.commTxt}>
                                {comm.commTxt}
                            </p>
                        </div>
                    )
                })
                :<p className={styles.noComment}>등록된 댓글이 없습니다.</p>
            }
        </div>
    )
}

export default CommentList;