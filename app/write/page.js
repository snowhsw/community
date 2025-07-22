'use client'

import styles from "./page.module.css"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"

const Write = ({ session, page, postInfo }) => {

    const postWrite = session ? session.user.name : null;
    const userKey = session ? session.user.email : null;
    const currentPage = page === "edit" ? true : false;



    const [value, setValue] = useState({
        title: currentPage ? postInfo.title : "",
        content: currentPage ? postInfo.content : "",
        cate: currentPage ? postInfo.cate : "",
        writer: postWrite,
        userKey: userKey
    });

    const router = useRouter();
    const titleRef = useRef(null);
    const contentRef = useRef(null);



    return (
        <form
            id={styles.writeForm}
            onSubmit={(e) => {
                e.preventDefault()
                if (value.title.replace(/\s/g, '').length >= 3 && value.content.replace(/\s/g, '').length >= 10) {
                    currentPage?
                    //수정요청
                    fetch("/api/patch/editPost",
                        { 
                            method: "PATCH", 
                            body: JSON.stringify({updateValue : value, postId : postInfo._id}),
                            headers: {"Content-Type":"application/json"}
                        }
                    )
                    .then(() => {
                        alert("수정이 완료되었습니다.")
                        router.push(`/detail/${postInfo._id}`)
                    })
                    :
                    //새 게시글 요청
                    fetch("/api/post/write",
                        { 
                            method: "POST", 
                            body: JSON.stringify(value),
                            headers: {"Content-Type":"application/json"}
                        }
                    )
                    .then(() => {
                        alert("작성이 완료되었습니다.")
                        router.push("/")
                    })
                }
                else {
                    if (value.title.replace(/\s/g, '').length < 3) {
                        alert("제목 항목은 공백 제외 3글자 이상입니다.")
                        titleRef.current.focus();
                    }
                    else if (value.content.replace(/\s/g, '').length < 10) {
                        alert("내용 항목은 공백 제외 10글자 이상입니다.")
                        contentRef.current.focus();
                    }
                }
            }}
        >
            {
                page === "write" ?
                    <h1>게시글 작성</h1> :
                    <h1>게시글 수정</h1>
            }
            <div className={styles.outerBox}>
                <label htmlFor="cate">
                    제목
                </label>
                <select
                    value={value.cate}
                    id="cate"
                    name="cate"
                    required
                    onChange={e => {
                        setValue({ ...value, cate: e.target.value })
                    }}
                >
                    <option value="" disabled hidden >카테고리</option>
                    <option value="question">질문</option>
                    <option value="chat">잡담</option>
                    <option value="info">정보</option>
                    <option value="share">나눔</option>
                    <option value="boast">자랑</option>
                    <option value="adopt">입양</option>
                </select>
            </div>
            <div className={styles.outerBox}>
                <label htmlFor="title">
                    제목
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    minLength={3}
                    required
                    value={value.title}
                    ref={titleRef}
                    placeholder="공백제외 3글자 이상 작성해주세요."
                    onChange={e => {
                        setValue({ ...value, title: e.target.value })
                    }}
                />
            </div>
            <div className={styles.outerBox}>
                <label htmlFor="content">
                    내용
                </label>
                <textarea
                    type="text"
                    id="content"
                    name="content"
                    minLength={10}
                    placeholder="공백제외 10글자 이상 작성해주세요."
                    required
                    ref={contentRef}
                    value={value.content}
                    onChange={e => {
                        setValue({ ...value, content: e.target.value })
                    }}
                />
            </div>
            <div className={styles.outerBox}>
                <button
                    type="submit"
                >
                    {
                        currentPage ?
                            "수정완료" :
                            "작성완료"
                    }
                </button>
            </div>
        </form>
    )
}

export default Write