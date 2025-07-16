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
            {
                //디테일 게시물
                children
            }
            {/*  */}
            <Card />
        </div>
    )
}

export default DetailLayout