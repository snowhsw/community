import Image from "next/image";
import styles from "./page.module.css";
import { connectDB } from "./util/database";
import Card from "@/components/Card";
import Nav from "@/components/Nav";

export default async function Index() {

    const db = ( await connectDB ).db("community");
    const result = await db.collection('post').find().toArray();
    const recentResult = result.sort( (a,b) => a.date.localeCompare(b.title,"ko")  )
    
    return (
        <>
            {/* 네브바 */}
            <div className={styles.container}>
                <div className={styles.postBox}>
                    <Nav/>
                    {
                        //포스팅 컴포넌트 
                        recentResult.map( post => <Card post={post} key={post._id} />)
                    }
                </div>
                <div className={styles.stickyBoxOuter}>
                    <div className={styles.stickyBox}>
                        <div className={styles.innerBox}>
                            <strong>최근본 게시글</strong>
                        </div>
                        <div className={styles.innerBox}>
                            <strong>인기글</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
