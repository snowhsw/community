'use client'
import { useSelector } from "react-redux";
const PostViewCount = ({id, view, className}) =>{

    const currentView = useSelector(state => state.viewCount)
    // console.log(currentView)
    return(
        <p className={className}>
            {
                currentView.id === id?
                currentView.view:
                view
            }
        </p>
    )
}

export default PostViewCount;