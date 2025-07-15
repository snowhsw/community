import { connectDB } from "@/app/util/database"
import Card from "@/components/PostList"
import styles from "./layout.module.css"
const DetailLayout = async ({children}) =>{

    const db = ( await connectDB).db("community")
    const result = await db.collection("post").find().toArray()
    const sortPost = result.sort((a,b) => new Date(b.date) - new Date(a.date))
    console.log(result)
    return(
        <div className={styles.container}>
            {/* 디테일 게시물 */}
            {children}

            {/* 하단 전체 게시글 */}
            {
                sortPost.map(post => <Card post={post} key={post._id}/>)
            }
        </div>
    )
}

export default DetailLayout