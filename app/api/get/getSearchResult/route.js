import { connectDB } from "@/app/util/database";
import { NextResponse } from "next/server";

export async function GET(req) {
    const url = new URL(req.url);
    const asd = url.searchParams.get("cate")
    const keyword = url.searchParams.get("keyword")

    const db = ( await connectDB).db("community");
    // const result = await db.collection("post").find({`${asd}`: keyword})

    console.log(result)

    return NextResponse.json({message: "OK"})
}


