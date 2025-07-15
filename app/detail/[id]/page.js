import { connectDB } from "@/app/util/database"
import { ObjectId } from "mongodb";
import styles from './page.module.css';

async function Detail({params}){

    const  { id } = await params
    const db = ( await connectDB ).db("community");
    const result = await db.collection("post").findOne({ _id: new ObjectId(id)})

    // URL ID값
    console.log(id)

    return(
        <div className={styles.PostBox}>
            <p>{result.title}</p>
            <p>{result.content}</p>
            <p>{result.date}</p>
            <p>{result.writer}</p>
            <p>{result.likeCount}</p>
            <p>{result.cate}</p>
        </div>

    )
}

export default Detail