
import styled from "./Header.module.css"
import Search from "./Search";
import Link from "next/link";
import Btn from "./LogInBtn";

import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const Header = async () => {
    const session = await getServerSession(authOptions)
    console.log(session)

    return (
        <header className={styled.header}>
            <div className={styled.headerInner}>

                <Link href={"/"} className={styled.logoTxt}>
                    ANIMAL LIFE
                </Link>
                <Search />

                <div>
                    {
                        !session ?
                            <Btn fn="login" /> :
                            <>
                                <p>{session.user.name}님 환영합니다</p>
                                <Btn fn="logout" />
                            </>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;