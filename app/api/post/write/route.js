import { connectDB } from "@/app/util/database";
import { NextResponse } from "next/server";


export async function POST(req) {

    if (req.method === "POST") {

        const date = new Date();
        const year = date.getFullYear();
        const mon = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hour = String(date.getHours()).padStart(2, "0");
        const min = String(date.getMinutes()).padStart(2, "0");

        const time = `${year}-${mon}-${day} ${hour}:${min}` ;
        
        // console.log(time)
        const body = await req.json()
        
        const db = ( await connectDB ).db("community")

        await db.collection('post').insertOne(
            {...body, date: time, writer: "임시", view:0, likeCount: 0,}
        )

        return NextResponse.json({ redirect: "/" });
    }

    // const body = await req.json()

    // console.log(req.method)


}

