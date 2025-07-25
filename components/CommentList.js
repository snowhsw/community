'use client'

import styles from "./CommentList.module.css"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CommentEdit from "./CommentEdit";
const CommentList = ({parentId, user}) =>{
    
    
    const list = useSelector(state => state.commentUpdate)
    
    const [commList, setCommList] = useState(list);


    useEffect(()=>{
        fetch(`/api/get/getComment?parent=${parentId}`,{
            method: "GET"
        })
        .then(res => res.json())
        .then(data => {
            setCommList(data.res.reverse())
        })
    },[list])


    return(
        <div className={styles.commListOuter}>
            <div className={styles.titBox}>
                <h3 className={styles.titTxt}>댓글 목록</h3>
            </div>
            {
                commList.length !== 0?
                commList.map(comm =>{
                    return(
                        <div key={comm._id.toString()} className={styles.listBox}>
                            <div className={styles.commInfo}>
                                <p>작성자: {comm.commName}</p>
                                <p>작성일: {comm.commTime}</p>
                            </div>
                            <div className={styles.commentContentBox}>
                                <CommentEdit 
                                    txt={comm.commTxt}
                                    setCommList={setCommList}
                                    comm={comm}
                                    user={user}
                                />
                            </div>
                        </div>
                    )
                })
                :<p className={styles.noComment}>등록된 댓글이 없습니다.</p>
            }
        </div>
    )
}

export default CommentList;