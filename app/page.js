import Image from "next/image";
import styles from "./page.module.css";
import { connectDB } from "./util/database";
import PostList from "@/components/PostList";
import Nav from "@/components/Nav";

export default  function Home() {

    return (
        <>
            {/* 네브바 */}
            <div className={styles.container}>
                <div className={styles.postBox}>
                    <Nav/>
                    <PostList/>
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
