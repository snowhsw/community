'use client'
import { useEffect, useState } from "react"
const ViewIncrease = ({post}) =>{
    // console.log(post.view)

    const [count, setCount] = useState(post.view)

    useEffect(()=>{
        fetch('/api/post/viewUpdate',
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post._id)
            }
        )    
        .then(res => res.json())
        .then(date => console.log(date))
        .catch(()=> console.log("error"))
    },[])
    return(
        <>
            {/* <>asd{post.view}</> */}
            {count}
            <button onClick={()=>{
                setCount(count + 1)
            }}>눌러라</button>
        </>
    )
}

export default ViewIncrease;