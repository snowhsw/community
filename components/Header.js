import styles from "./Header.module.css"
import Search from "./Search";
import Link from "next/link";
import Btn from "./LogInBtn";

import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const Header = async () => {
    const session = await getServerSession(authOptions)
    // console.log(session)

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>

                <Link href={"/"} className={styles.logoTxt}>
                    COMMUNITY
                </Link>
                <Search />

                <div className={styles.userBox}>
                    {
                        !session ?
                            <Btn fn="login" /> :
                            <>
                                <p>{session.user.name}님</p>
                                <Btn fn="logout" />
                            </>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;