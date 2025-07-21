'use client'

import styles from "./page.module.css"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"

const Write = ({writerInfo}) => {

    const [value, setValue] = useState({ title: "", content: "", cate: "", writer: writerInfo.user.name, userKey: writerInfo.user.email});
    const router = useRouter();
    const titleRef = useRef(null);
    const contentRef = useRef(null);



    return (
        <form
            id={styles.writeForm}
            onSubmit={(e) => {
                e.preventDefault()
                if(
                    value.title.replace(/\s/g, '').length >= 3 && value.content.replace(/\s/g, '').length >= 10 
                ){
                    fetch("/api/post/write",
                        { method: "POST", body: JSON.stringify(value) }
                    )
                    .then(() => {
                        router.push("/")
                    })
                }
                else{
                    if(value.title.replace(/\s/g, '').length < 3){
                        alert("제목 항목은 공백 제외 3글자 이상입니다.")
                        titleRef.current.focus();
                    }
                    else if(value.content.replace(/\s/g, '').length < 10){
                        alert("내용 항목은 공백 제외 10글자 이상입니다.")
                        contentRef.current.focus();
                    }
                }
            }}
        >
            <h1>게시글 쓰기</h1>
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
                    작성완료
                </button>
            </div>
        </form>
    )
}

export default Write