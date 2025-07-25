'use client'
import { useState } from "react"
import CommentBtn from "./CommentBtn";
import styles from "./CommentEdit.module.css"
const CommentEdit = ({txt, setCommList, comm, user}) => {

    const [editComment, setEditComment] = useState({initValue: txt, isEdit: false})

    return (
        <>
            {
                editComment.isEdit
                ?<input 
                    type="text"
                    value={editComment.initValue}
                    onChange={e=>setEditComment({...editComment, initValue: e.target.value})}
                />
                :<p>{editComment.initValue}</p>
            }
            {
                (user === comm.commUser)&&
                <div className={styles.btnOuter}>
                    <CommentBtn 
                        setCommList={setCommList} 
                        commParent={comm.parent} 
                        commId={comm._id.toString()} 
                        buttonType="delete" 
                    />  
                    <CommentBtn 
                        setCommList={setCommList} 
                        commParent={comm.parent} 
                        commId={comm._id.toString()} 
                        buttonType="edit" 
                        editComment={editComment} 
                        setEditComment={setEditComment}
                    />
                </div>
            }
        </>
    )
}

export default CommentEdit