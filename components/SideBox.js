'use client'

import Link from "next/link"
import styles from "./SideBox.module.css"

const SideBox = () =>{

    const recentPost = JSON.parse(localStorage.getItem('recentPost'))
    console.log(recentPost)

    return(
        <div className={styles.stickyBoxOuter}>
            <div className={styles.stickyBox}>
                <div className={styles.innerBox}>
                    <strong className={styles.boxTitle}>최근본 게시글</strong>
                    {
                        recentPost.map(post => {
                            return(
                                <Link className={styles.postLink} href={`/detail/${post._id}`}>{post.title}</Link>
                            )
                        })
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

