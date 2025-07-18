import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export async function POST(req){

    const body = await req.json()
    const db = ( await connectDB ).db("community")
    const res = await db.collection('post').findOneAndUpdate(
        {_id: new ObjectId(body.id)},
        { $inc: {likeCount: 1}},
        { returnDocument: "after"}
    )
    console.log( res )
    return NextResponse.json(res.likeCount)
}