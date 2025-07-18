

import { connectDB } from "@/app/util/database"
import { ObjectId } from "mongodb";
import styles from './page.module.css';
import cateKo from "@/app/util/category";
import RecentPost from "@/app/util/RecentPost";
import ViewIncrease from "@/components/viewIncrease";
async function Detail({ params }) {

    const { id } = await params
    const db = (await connectDB).db("community");
    const result = await db.collection("post").findOne({ _id: new ObjectId(id) })

    const postOne = { ...result, _id: result._id.toString() }


    return (
        <>
            <RecentPost post={postOne} />
            <ViewIncrease post={postOne}/>

            <div className={styles.PostBox}>
                <div className={styles.postInfo}>
                    <p className={styles.title}>
                        <span className={styles.cate}>{cateKo[postOne.cate]}</span> {postOne.title}
                    </p>
                    <div className={styles.postInfoBot}>
                        <p className={styles.writer}>
                            작성자: {postOne.writer}
                        </p>
                        <div>
                            
                            <span>조회수{postOne.view}</span> <span>작성일 {postOne.date}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.contentBox}>
                    <p className={styles.content}>
                        {postOne.content}
                    </p>
                    <div className={styles.recommendBox}>
                        <button>
                            <span>추천 </span><br />
                            <span>{postOne.likeCount}</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail