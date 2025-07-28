'use client'

import styles from "./Search.module.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
const Search = () =>{

    const [searchCondition, setSearchCondition] = useState({cate:"title", keyword: ""})
    const router = useRouter();
    // console.log(searchCondition.cate)

    return(
        <form 
            className={styles.searchWrap}
            onSubmit={e => {
                e.preventDefault()

                // fetch(`/api/get/getSearchResult?cate=${searchCondition.cate}&keyword=${searchCondition.keyword}`,{method:"GET"})
                // .then(res => res.json())
                // .then(result => console.log(result.searchResult))
                // .catch(()=> console.log("에러"))
                
                // setSearchCondition({...searchCondition, keyword: ""})

                const searchResult = `/search?cate=${searchCondition.cate}&keyword=${searchCondition.keyword}`
                setSearchCondition({...searchCondition, keyword: ""})
                router.push(searchResult)
            }}
        >
            <select 
                className={styles.searchCondition}
                value={searchCondition.cate}
                onChange={e=> setSearchCondition({...searchCondition, cate: e.target.value})}
            >
                <option value="title">제목</option>
                <option value="writer">글쓴이</option>
                <option value="content">내용</option>
            </select>
            <input 
                type="text"
                placeholder="검색어를 입력하세요."
                className={styles.searchInput}
                value={searchCondition.keyword}
                onChange={e => setSearchCondition({...searchCondition, keyword: e.target.value})}
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