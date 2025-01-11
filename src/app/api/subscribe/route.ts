import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const reqData = await req.json();
    console.log(reqData);
    return NextResponse.json({ message: "Subscribed successfully." });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Subscribing failed." });
  }
}
