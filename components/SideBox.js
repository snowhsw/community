'use client'

import Link from "next/link"
import styles from "./SideBox.module.css"
import { useEffect, useState } from "react";

const SideBox = () =>{

    const [post, setPost] = useState([])
    // const changeChk = JSON.parse(localStorage.getItem('recentPost'))

    useEffect(()=>{
        try {
            const recentPost = JSON.parse(localStorage.getItem('recentPost')) || [];    
            setPost(recentPost)
        } catch (error) {
            console.log("최근본 게시글 오류")
        }
    }, [])

    return(
        <div className={styles.stickyBoxOuter}>
            <div className={styles.stickyBox}>
                <div className={styles.innerBox}>
                    <strong className={styles.boxTitle}>최근 본 게시글</strong>
                    {
                        (post.length !== 0)?
                            post.map(post => {
                                return(
                                    <Link className={styles.postLink} href={`/detail/${post._id}`} key={post._id}>{post.title}</Link>
                                )
                            })
                        :<p>최근 본 게시글이 없습니다.</p>
                    }
                </div>
                <div className={styles.innerBox}>
                    <strong>인기글</strong>
                </div>
            </div>
        </div>
    )
}

export default SideBox

