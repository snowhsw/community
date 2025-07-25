
import Image from "next/image";
import deleteIcon from "/public/img/icon/deleteIcon.png"
import editIcon from "/public/img/icon/editIcon.png"
import styles from "./CommentBtn.module.css"

const CommentBtn = ({commParent, buttonType, commId, setCommList, editComment, setEditComment}) =>{

    const clickAction = () =>{
        if(buttonType==="delete"){
            fetch("/api/delete/commentDelete",
                {
                    method:"DELETE",
                    body: JSON.stringify({commentId: commId, commentParent: commParent}),
                    headers: { "Content-Type":"application/json"}
                }
            )
            .then(res => res.json())
            .then(data => setCommList(data.commentList.reverse()))
            .catch(()=>alert("삭제 요청에 실페하였습니다."))
        }
        else if(buttonType === "edit"){

            setEditComment({...editComment, isEdit: !editComment.isEdit})
            
            editComment.isEdit&&
                fetch("/api/patch/editComment",
                    {
                        method:"PATCH",
                        body: JSON.stringify({commentId: commId, commentTxt: editComment.initValue }),
                        headers: { "Content-Type":"application/json"}
                    }
                )
                .then(res => res.json())
                .catch(()=>alert("수정 요청에 실페하였습니다."))
            

        }
    }
    
    return(
        <button 
            className={styles.btn}
            onClick={()=>{
                clickAction()
            }}
        >
            <Image
                src={buttonType==="delete"?deleteIcon:editIcon}
                alt={buttonType==="edit"?deleteIcon:editIcon}
                width={17}
                height={17}
        />
            {buttonType==="delete"?
                "삭제":
                    editComment.isEdit?
                        "완료"
                            :"수정"
            }
        </button>
    )
}

export default CommentBtn