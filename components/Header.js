'use client'
import styled from "./Header.module.css"
import Image from "next/image";
import Search from "./Search";
import Link from "next/link";

import { signIn } from "next-auth/react";


const Header  = () =>{
    return(
        <header className={styled.header}>
            <div className={styled.headerInner}>
                
                <Link href={"/"}className={styled.logoTxt}>
                    ANIMAL LIFE
                </Link>
                <Search/>
                <div>
                    <button 
                        className={styled.btn}
                        onClick={()=> signIn()}
                    >
                        로그인
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;