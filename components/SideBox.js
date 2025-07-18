'use client'

import Link from "next/link"
import styles from "./SideBox.module.css"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import store from "@/store/store";
const SideBox = () =>{

    const post = useSelector(state => state.recentPost)

    console.log(post)

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

