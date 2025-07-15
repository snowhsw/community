'use client'

import styles from "./page.module.css"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

const Write = () =>{

    const [value, setValue] = useState({title:"", content:"",cate:""});
    const router = useRouter();

    useEffect(()=>{
        console.log(value)
    },[value])

    return(
        <form 
            id={styles.writeForm}
            onSubmit={(e)=>{
                e.preventDefault()
                fetch("/api/post/write", 
                    {method:"POST", body: JSON.stringify(value)}
                )
                .then(()=>{
                    router.back()
                })
            }}
        >
            <h1>게시글 쓰기</h1>
            <div>
                <label htmlFor="title">
                    제목
                </label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    value={value.title}
                    onChange={e =>{
                        setValue({...value, title: e.target.value})
                    }}
                />
                <br/>
            </div>
            <div>
                <label htmlFor="title">
                    내용
                </label>
                <textarea 
                    type="text" 
                    id="title" 
                    name="title" 
                    value={value.content}
                    onChange={e =>{
                        setValue({...value, content: e.target.value})
                    }}
                /><br/>
            </div>
            <div>
                <select 
                    value={value.cate}
                    onChange={e =>{
                        setValue({...value, cate: e.target.value})
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
            <button 
                type="submit"
            >
                전송
            </button>
        </form>
    )
}

export default Write