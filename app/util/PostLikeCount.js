'use client'

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const PostLikeCount = ({ id, like, css }) => {

    // 여기서 왜 자동으로 동기화가 되냐
    const currentLike = useSelector(state => state.likeCount)

    return (
        <p className={css}>
            {
                currentLike.id === id ?
                currentLike.like:
                like
            }
        </p>
    )
}
export default PostLikeCount;