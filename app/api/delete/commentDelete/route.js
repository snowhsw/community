import { connectDB } from "@/app/util/database";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";


export async function DELETE(req) {

    const body = await req.json()

    const db = ( await connectDB ).db("community");
    
    await db.collection("comment").deleteOne({_id: new ObjectId(body.commentId)})

    const updateCommentList = await db.collection("comment").find({parent: body.commentParent}).toArray()


    return NextResponse.json({message:"OK", commentList: updateCommentList})
}