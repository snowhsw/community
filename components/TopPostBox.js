
import { connectDB } from "@/app/util/database";
import styles from "./SideBox.module.css"
import Link from "next/link"

const TopPostInfo = async() => {

    const db = (await connectDB).db("community");
    const post = await db.collection('post').find().sort({likeCount: -1}).limit(5).toArray();
    
    return (
        <div className={styles.innerBox}>
            <strong className={styles.boxTitle}>인기글</strong>
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

export default TopPostInfo;