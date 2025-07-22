import { connectDB } from "@/app/util/database"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import styles from './page.module.css';
import cateKo from "@/app/util/category";
import RecentPost from "@/app/util/RecentPost";
import ViewIncrease from "@/components/ViewIncrease";
import Recommend from "@/components/Recommend";
import CommentInput from "@/components/CommentInput";
import CommentList from "@/components/CommentList";
import DetailPostBtn from "@/components/DetailPostBtn";
async function Detail({ params }) {

    const { id } = await params
    const db = (await connectDB).db("community");
    const result = await db.collection("post").findOne({ _id: new ObjectId(id) });

    const postOne = { ...result, _id: result._id.toString() };

    const session = await getServerSession(authOptions);
    

    return (
        <>
            <RecentPost post={postOne} />
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
                            
                            <span className={styles.view}>조회수 <ViewIncrease post={postOne}/></span> 
                            <span>작성일 {postOne.date}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.contentBox}>
                    <p className={styles.content}>
                        {postOne.content}
                    </p>
                    <Recommend style={styles.recommendBox} like={postOne.likeCount} id={postOne._id} clickUser={session}/>
                    <div className={styles.btnOuter}>
                        <DetailPostBtn postInfo={postOne} session={session} btnName="delete"/>
                        <DetailPostBtn postInfo={postOne} session={session} btnName="edit"/>
                    </div>
                </div>
                <div className={styles.commentBox}>
                    {
                        session?
                        <CommentInput userInfo={session} postId={postOne._id}/>:
                        <p className={styles.loginTxt}>로그인 후 댓글작성이 가능합니다.</p>
                    }
                    <CommentList parentId={postOne._id}/>
                </div>
            </div>
        </>
    )
}

export default Detail