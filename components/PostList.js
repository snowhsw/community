import styles from "./PostList.module.css"
import Link from "next/link";
import { connectDB } from "@/app/util/database";
const PostList = async () => {

    //DB 가져오기
    const db = (await connectDB).db("community");
    const result = await db.collection("post").find().toArray();

    // 최신순 정렬
    const sortPost = result.sort((a, b) => new Date(b.date) - new Date(a.date))
    
    // 오늘 작성 글이면 시간 아니면 날짜
    const today = new Date()

    
    // 표기되는 작성일 및 카테고리 영문에서 국문으로
    const formatDate = sortPost.map(post => {

        const date = new Date(post.date)
        
        const isToday = today.getFullYear() === date.getFullYear()&& today.getMonth() === date.getMonth()&& today.getDate() === date.getDate()

        const year = date.getFullYear();
        const mon = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hour = String(date.getHours()).padStart(2, "0");
        const min = String(date.getMinutes()).padStart(2, "0");
        
        const cateKo = { question:"질문" ,chat:"잡담" ,info:"정보" ,share:"나눔" ,boast:"자랑" ,adopt:"입양" ,}

        const viewDate = isToday? `${hour}:${min}`: `${year}-${mon}-${day}`;

        return {...post, date: viewDate, cate: cateKo[post.cate]}
        
    })
    
    return (
        <div className={styles.postListContainer}> 
                <div className={styles.postHead}>
                    <p className={styles.idx}>번호</p>
                    <p className={styles.title}>제목</p>
                    <p className={styles.writer}>작성자</p>
                    <p className={styles.date}>작성일</p>
                    <p className={styles.view}>조회수</p>
                    <p className={styles.likeCount}>추천</p>
                </div>
            {   
                formatDate.map((post, idx )=>
                    <Link href={`/detail/${post._id}`} className={styles.detailLink} key={post._id}>
                        <div className={styles.post}>
                            <p className={styles.idx}>{formatDate.length - idx}</p>
                            <p className={styles.title}><span className={styles.cate}>{post.cate}</span> {post.title}</p>
                            <p className={styles.writer}>{post.writer}</p>
                            <p className={styles.date}>{post.date}</p>
                            <p className={styles.view}>{post.view}</p>
                            <p className={styles.likeCount}>{post.likeCount}</p>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default PostList;