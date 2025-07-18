import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req){
    
    const body = await req.json();
    // console.log(body.id)
    const db = ( await connectDB ).db("community");
    const res = await db.collection("post").findOneAndUpdate(
        {_id: new ObjectId(body.id)},
        {$inc: { view: 1}},
        {returnDocument: "after"}
    )




    return NextResponse.json({view: res.view})
}

