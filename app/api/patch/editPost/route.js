import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function  PATCH(req) {
    
    const body = await req.json();

    const db = ( await connectDB ).db("community");
    
    // console.log(body.postId)
    await db.collection('post').updateOne(
        {_id: new ObjectId(body.postId)},
        {
            $set:{
                cate: body.updateValue.cate,
                title: body.updateValue.title,
                content: body.updateValue.content
            }
        }
    )
    
    return NextResponse.json({message:"OK"})
}