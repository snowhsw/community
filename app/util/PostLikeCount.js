'use client'

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const PostLikeCount = ({ id, like, css }) => {

    
    const currentLike = useSelector(state => state.likeCount)

    return (
        <p className={css}>
            <span className="mo_block">추천: </span>
            {
                currentLike.id === id ?
                currentLike.like:
                like
            }
        </p>
    )
}
export default PostLikeCount;