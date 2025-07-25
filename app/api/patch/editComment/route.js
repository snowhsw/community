import { connectDB } from "@/app/util/database";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function PATCH(req) {

    const body = await req.json()
    const db = (await connectDB).db("community");

    // console.log(body.commentTxt)

    const updatedComment = await db.collection("comment").findOneAndUpdate(
        { _id: new ObjectId(body.commentId) },
        {
            $set: {
                commTxt: body.commentTxt
            }
        },
        {
            returnDocument: "after" // 업데이트 후 문서를 반환
        }
    );

    // console.log(updatedComment)

    return NextResponse.json({ message: "OK", editCommentTxt: updatedComment.commTxt})
}