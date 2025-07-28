// 'use client'
import styles from "./PostList.module.css"
import Link from "next/link";
import { connectDB } from "@/app/util/database";
import cateKo from "@/app/util/category";
import Nav from "@/components/Nav";
import PostViewCount from "@/app/util/PostViewCount";
import PostLikeCount from "@/app/util/PostLikeCount";
const PostList = async ({postCate, serachCate}) => {
    
    

    //DB 가져오기
    const db = (await connectDB).db("community");
    
    const searchCondition = serachCate?serachCate.cate:null; 

    let filter;

    //검색 조건 있으면
    if(searchCondition){
        console.log("검색조건 있어요")
        filter = { [serachCate.cate]: { $regex: serachCate.keyword, $options: "i" }}

    }
    //검색 조건 없으면
    else{
        console.log("검색조건 없어요")
        filter = postCate?{cate: postCate}:{};
        console.log(filter)
    }
    
    const result = await db.collection("post").find(filter).toArray();
    

    // 최신순 정렬
    const sortPost = result.sort((a, b) => new Date(b.date) - new Date(a.date))
    
    // 오늘 작성 글이면 시간 아니면 날짜
    const today = new Date()

    
    // 표기되는 작성일 && propsID
    const formatDate = sortPost.map(post => {

        const date = new Date(post.date)
        
        const isToday = today.getFullYear() === date.getFullYear()&& today.getMonth() === date.getMonth()&& today.getDate() === date.getDate()

        const year = date.getFullYear();
        const mon = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hour = String(date.getHours()).padStart(2, "0");
        const min = String(date.getMinutes()).padStart(2, "0");
        

        const viewDate = isToday? `${hour}:${min}`: `${year}-${mon}-${day}`;

        return {...post, date: viewDate, cate: cateKo[post.cate], _id: String(post._id)}
        
    })
    
    return (
        <div className={styles.postListContainer}> 
            <Nav/>
            <div className={styles.postHead}>
                <p className={styles.idx}>번호</p>
                <p className={styles.title}>제목</p>
                <p className={styles.writer}>작성자</p>
                <p className={styles.date}>작성일</p>
                <p className={styles.view}>조회수</p>
                <p className={styles.likeCount}>추천</p>
            </div>
            {   
                formatDate.length === 0?
                <h2 className={styles.noPost}>"게시글이 없습니다"</h2>:
                formatDate.map((post, idx )=>
                    <Link href={`/detail/${post._id}`} className={styles.detailLink} key={post._id}>
                        <div className={styles.post}>
                            <p className={styles.idx}>{formatDate.length - idx}</p>
                            <p className={styles.title}><span className={styles.cate}>{post.cate}</span> {post.title}</p>
                            <p className={styles.writer}>{post.writer}</p>
                            <div>
                                <p className={styles.date}>{post.date}</p>
                                <PostViewCount id={post._id} view={post.view} className={styles.view}/>
                                <PostLikeCount id={post._id} like={post.likeCount} css={styles.likeCount} />
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default PostList;