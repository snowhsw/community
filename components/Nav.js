import styles from "./Nav.module.css"
import Link from "next/link";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Link href={"/"}>전체</Link>
            <Link href={"/question"}>질문</Link>
            <Link href={"/chat"}>잡담</Link>
            <Link href={"/info"}>정보</Link>
            <Link href={"/share"}>나눔</Link>
            <Link href={"/boast"}>자랑</Link>
        </nav>
    )
}

export default Nav;