'use client'

import styles from "./SideBox.module.css"
import { useSelector } from "react-redux";
import Link from "next/link"

const RecentPostBox = () => {

    const post = useSelector(state => state.recentPost);
    
    return (
        <div className={styles.innerBox}>
            <strong className={styles.boxTitle}>최근 본 게시글</strong>
            {
                (post.length !== 0) ?
                    post.map(post => {
                        return (
                            <Link className={styles.postLink} href={`/detail/${post._id}`} key={post._id}>{post.title}</Link>
                        )
                    })
                    : <p>최근 본 게시글이 없습니다.</p>
            }
        </div>
    )
}


export default RecentPostBox;