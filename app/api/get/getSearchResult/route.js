import { connectDB } from "@/app/util/database";
import { NextResponse } from "next/server";

export async function GET(req) {
    const url = new URL(req.url);
    const cate = url.searchParams.get("cate")
    const keyword = url.searchParams.get("keyword")

    const db = ( await connectDB).db("community");

    const query = { [cate]: { $regex: keyword, $options: "i" }}

    const result = await db.collection("post").find(query).toArray();

    return NextResponse.json({message: "OK", searchResult: result})
}


