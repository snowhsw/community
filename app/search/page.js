import PostList from "@/components/PostList";

const SearchResult = async ({searchParams}) =>{

    //검색 조건 가져오기
    const urlParams = await searchParams;

    const serachParams = {cate:urlParams.cate, keyword: urlParams.keyword}

    console.log(serachParams)

    return(
        <PostList serachCate={serachParams}/>
    )
}

export default SearchResult;