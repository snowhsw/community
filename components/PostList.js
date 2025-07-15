import styles from "./PostList.module.css"
import Link from "next/link";
import { connectDB } from "@/app/util/database";
const PostList = async () => {

    const db = (await connectDB).db("community");
    const result = await db.collection("post").find().toArray();
    const sortPost = result.sort((a, b) => new Date(a.date) - new Date(b.date))
    return (
        <div className={styles.postListContainer}> 
            {
                sortPost.map(post =>
                    <Link href={`/detail/${post._id}`} className={styles.detailLink}>
                        <div className={styles.post}>
                            <p>{post.title}</p>
                            <p>{post.content}</p>
                            <p>{post.date}</p>
                            <p>{post.likeCount}</p>
                            <p>{post.writer}</p>
                            <p>{post.cate}</p>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default PostList;