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
            <div className={styles.postInfo}>
                <p className={styles.title}>
                    <sapn className={styles.cate}>{result.cate}</sapn> {result.title}
                </p>
                <div className={styles.postInfoBot}>
                    <p className={styles.writer}>
                        작성자: {result.writer}
                    </p>
                    <div>
                        <span>조회수 {result.view}</span> <span>작성일 {result.date}</span>
                    </div>
                </div>
            </div>
            <div className={styles.contentBox}>
                <p className={styles.content}>
                    {result.content}
                </p>
                <div className={styles.recommendBox}>
                    <button>
                        <span>추천 </span><br/>
                        <span>{result.likeCount}</span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Detail