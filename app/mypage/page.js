import { getServerSession } from "next-auth"
import { connectDB } from "../util/database"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import styles from "./page.module.css"
import Link from "next/link"
import cateKo from "../util/category"
import { ObjectId } from "mongodb"
const MyPage = async () => {
    const session = await getServerSession(authOptions)
    const db = (await connectDB).db("community")

    const myPost = await db.collection('post').find({ userKey: session.user.email }).toArray();
    const myComment = await db.collection('comment').find({ commUser: session.user.email }).toArray();

    const myRecentPost = myPost.reverse().slice(0, 5);
    const myRecentComment = myComment.reverse().slice(0, 5);

    const objectIds = myRecentComment.map(comm => new ObjectId(comm.parent));
    const myCommentPost = await db.collection('post').find({_id: { $in: objectIds } }).toArray();
    
    const myInfo = session ? session.user : null;
    
    
    return (
        <>
            {
                myInfo ?
                    <div className={styles.myPageBox}>
                        <p>{myInfo.name}</p>
                        <p>{myInfo.email}</p>
                    
                        <div className={styles.myBox}>
                            <p className={styles.boxTitle}>최근 작성글</p>
                            {myRecentPost.map(post => {
                                return (
                                    <Link href={`/detail/${post._id}`} key={post._id.toString()} className={styles.myPostLink}>
                                            <p>
                                                <span>{cateKo[post.cate]}</span>
                                                {post.title}
                                            </p>
                                        <p>
                                            {post.date}
                                        </p>
                                    </Link>
                                )
                            })}
                        </div>

                        <div className={styles.myBox}>
                            <p className={styles.boxTitle}>최근 작성 댓글</p>
                            {myRecentComment.map(comment=> {

                                return (
                                    <Link href={`/detail/${comment.parent}`} key={comment._id.toString()} className={styles.myCommentLink}>
                                        <p>
                                            <span>
                                                {
                                                    // 댓글 리스트 카테고리 맞추기
                                                }
                                            </span>
                                            {comment.commTxt}
                                        </p>
                                        <p>
                                            {comment.commTime}
                                        </p>
                                    </Link>
                                )
                            })}
                        </div>


                    </div>
                    : <h1 className={styles.error}>로그인 후 이용가능한 페이지 입니다.</h1>
            }

        </>
    )
}

export default MyPage