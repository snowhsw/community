import { NextResponse } from "next/server";
import { connectDB } from "@/app/util/database";

export async function GET(req) {
    const url = new URL(req.url);
    const parent = url.searchParams.get("parent");
    // console.log(parent)

    const db = ( await connectDB ).db("community");
    const upDateComm = await db.collection('comment').find({parent:parent}).toArray()

    return NextResponse.json({ res: upDateComm});
}