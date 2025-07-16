'use client'

import { signIn, signOut } from "next-auth/react"
import styles from "./LoginBtn.module.css"
const Btn = ({ fn }) => {
    return (
        <>
            {
                fn === "login" ?
                    <button
                        className={styles.btn}
                        onClick={() => signIn()}
                    >
                        로그인
                    </button>:
                    <button
                        className={styles.btn}
                        onClick={() => signOut()}
                    >
                        로그아웃
                    </button>
            }
        </>
    )
}

export default Btn