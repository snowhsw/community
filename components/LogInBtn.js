'use client'

import { signIn, signOut } from "next-auth/react"
import styles from "./LoginBtn.module.css"
import Link from "next/link"
import { useState } from "react"
const Btn = ({ fn }) => {

    const [isManage, setIsManage] = useState(false)
    return (
        <>
            {
                fn === "login" ?
                    <button
                        className={styles.btn}
                        onClick={() => signIn()}
                    >
                    </button> :

                    <div
                        className={styles.btn}
                        onClick={() => {
                            setIsManage(!isManage)
                        }}
                    >
                        {
                            isManage &&
                            <ul className={styles.userManage}>
                                <li>
                                    <Link href={"/write"}>글쓰기</Link>
                                </li>
                                <li>
                                    <Link href={"/mypage"}>마이페이지</Link>
                                </li>
                                <li>
                                    <button onClick={() => signOut({ callbackUrl: "/" })}>
                                        로그아웃
                                    </button>
                                </li>
                            </ul>
                        }
                    </div>
            }
        </>
    )
}

export default Btn