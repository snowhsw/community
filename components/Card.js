import styles from "./Card.module.css"
import Link from "next/link";
const Card = ({post}) => {
    return (
        <Link href={"/"} className={styles.detailLink}>
            <div className={styles.post}>
                <p>{post.title}</p>
                <p>{post.content}</p>
                <p>{post.date}</p>
                <p>{post.likeCount}</p>
                <p>{post.writer}</p>
                <p>{post.cate}</p>
            </div>
        </Link>
    )
}

export default Card;