import { connectDB } from "@/app/util/database";
import { NextResponse } from "next/server";

export async function POST(req){
    
    const date = await req.json();
    console.log(date)
    const asd ="잘갈"
    return new Response(asd)
}

