import Image from "next/image";
import styles from "./page.module.css";
import { connectDB } from "./util/database";
import PostList from "@/components/PostList";
import SideBox from "@/components/SideBox";

export default  function Home() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.postBox}>
                    <PostList/>
                </div>
                <SideBox />
            </div>
        </>
    );
}
