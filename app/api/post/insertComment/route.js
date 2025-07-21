import { NextResponse } from "next/server";
import { connectDB } from "@/app/util/database";

export async function POST(req) {

    const body = await req.json();

    const db = (await connectDB).db("community");

    const date = new Date();

    const year = date.getFullYear();

    const mon = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");

    const time = `${year}-${mon}-${day} ${hour}:${min}`;

    await db.collection('comment').insertOne(
        {
            parent: body.commInfo.parent,
            commUser: body.commInfo.commUser,
            commTxt: body.commInfo.commTxt,
            commName: body.commInfo.commName,
            commTime: time
        }
    );

    const UpdateComm = await db.collection('comment').find({parent: body.commInfo.parent}).toArray();

    

    return NextResponse.json({ result: UpdateComm });
}