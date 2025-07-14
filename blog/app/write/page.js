import { connectDB } from "@/lib/database";

async function WritePage(){

    const db = ( await connectDB ).db('forum');
    const result = await db.collection("post").find().toArray()
    
    console.log(result)
    return(
        <div>

        </div>
    )
}

export default WritePage;