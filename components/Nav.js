import styles from "./Nav.module.css"
import Link from "next/link";

const Nav = () =>{
    return(
        <nav className={styles.nav}>
            <Link href={"/"}>전체</Link>
            <Link href={"/"}>질문</Link>
            <Link href={"/"}>잡담</Link>
            <Link href={"/"}>정보</Link>
            <Link href={"/"}>나눔</Link>
            <Link href={"/"}>자랑</Link>
            <Link href={"/"}>입양</Link>
        </nav>
    )
}

export default Nav;