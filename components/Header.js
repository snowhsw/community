import styled from "./Header.module.css"
import Image from "next/image";
import Search from "./Search";
const Header  = () =>{
    return(
        <header className={styled.header}>
            <div className={styled.headerInner}>
                <p className={styled.logoTxt}>ANIMAL LIFE</p>
                <Search/>
                <div>
                    <button className={styled.btn}>
                        로그인
                    </button>
                    <button className={styled.btn}>
                        회원가입
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;