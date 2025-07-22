'use client'

import Image from "next/image";
import deleteIcon from "/public/img/icon/deleteIcon.png"
import editIcon from "/public/img/icon/editIcon.png"
import styles from "./DetailPostBtn.module.css"
import { useRouter } from "next/navigation";
const DetailPostBtn = ({ btnName, postInfo, session }) => {

    const postId = postInfo._id
    const postWriterKey = postInfo.userKey 
    const userKey = session?session.user.email:null;

    
    const router = useRouter();
    return (
        <>
            {
                postWriterKey === userKey &&
                (
                    btnName === "delete" ?
                    <button 
                        className={styles.btn}
                        onClick={()=>{
                            confirm("정말 삭제하시겠습니까?")&&
                            (
                                fetch("/api/delete/postDelete",{
                                    method:"DELETE",
                                    body: JSON.stringify({postId:postId}),
                                    headers: {"Content-Type":"application/json"}
                                })
                                .then(()=>{
                                    alert("삭제가 완료되었습니다.")
                                    router.push("/")
                                })
                                .catch(()=>{
                                    alert("삭제할 수 없습니다.")
                                })
                            )
                        }}
                    >
                        <Image
                            src={deleteIcon}
                            alt="deleteIcon"
                            width={20}
                            height={20}
                        />
                        삭제
                    </button> :
                    <button 
                        className={styles.btn}
                        onClick={()=>{
                            router.push(`/edit/${postId}`)
                        }}
                    >
                        <Image
                            src={editIcon}
                            alt="editIcon"
                            width={20}
                            height={20}
                        />
                        수정
                    </button>
                )
            }
        </>
    )
}

export default DetailPostBtn;