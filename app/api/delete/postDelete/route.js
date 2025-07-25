import { connectDB } from "@/app/util/database"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"

export async function DELETE(req) {
    
    const body = await req.json()

    const db = ( await connectDB ).db("community")

    const postDelete = await db.collection("post").deleteOne({_id: new ObjectId(body.postId)});
    const commentDelete = await db.collection("comment").deleteMany({parent: body.postId});
    // console.log(body.postId)

    return NextResponse.json({message: "OK"})
}

