import { connectDB } from "../util/database";
import PostList from "@/components/PostList";
const CatePage = async(props) =>{

    const {cate} = await props.params
    
    return(
        <PostList postCate={cate}/>
    )
}

export default CatePage;