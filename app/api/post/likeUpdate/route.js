import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export async function POST(req){

    const body = await req.json()
    const db = ( await connectDB ).db("community")

    const userList = await db.collection("recommendUser").find({
        postId : body.id,
        user: body.user
    }).toArray()

    if(userList.length === 0){
        const res = await db.collection('post').findOneAndUpdate(
    
            {_id: new ObjectId(body.id)},
            { $inc: {likeCount: 1}},
            { returnDocument: "after"}
        )

        await db.collection('recommendUser').insertOne({postId: body.id, user: body.user})
        return NextResponse.json(res.likeCount)
    }
    else{
        const res = await db.collection('post').findOneAndUpdate(
    
            {_id: new ObjectId(body.id)},
            { $inc: {likeCount: -1}},
            { returnDocument: "after"}
        )

        await db.collection('recommendUser').deleteOne({postId: body.id, user: body.user})

        return NextResponse.json(res.likeCount);
    }


    console.log(userList)



    
}