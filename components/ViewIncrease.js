'use client'
import { useEffect, useState } from "react"
import { useDispatch} from "react-redux"
import { viewSyncing } from "@/store/store"
const ViewIncrease = ({post}) =>{
    // console.log(post.view)
    
    const dispatch = useDispatch();
    const [count, setCount] = useState(post.view)

    useEffect(()=>{
        fetch('/api/post/viewUpdate',
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id: post._id})
            }
        )    
        .then(res => res.json())
        .then(data => {
            setCount(data.view);
            dispatch(viewSyncing({id: post._id, view: data.view}));
        })
        .catch(()=> console.log("error"))
    },[])
    return(
        <>
            {count}
        </>
    )
}

export default ViewIncrease;