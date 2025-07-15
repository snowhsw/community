'use client'

import styles from "./Search.module.css"

const Search = () =>{
    return(
        <form className={styles.searchWrap}>
            <select className={styles.searchCondition}>
                <option>제목</option>
                <option>글쓴이</option>
                <option>내용</option>
            </select>
            <input 
                type="text"
                placeholder="검색어를 입력하세요."
                className={styles.searchInput}
            />
            <button 
                type="submit"
                className={`${styles.submitBtn} btn`}
            >
            </button>
        </form>
    )
}

export default Search;