import { connectMongoDB } from "@/lib/mongoDB";
import { NextResponse } from "next/server";
import User from "@/models/userSchema";

export async function POST(req: any) {
  try {
    await connectMongoDB();
    const { username, email } = await req.json();

    const userDB = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });

    return NextResponse.json({ userDB });
  } catch (error) {
    return NextResponse.json(
      { message: "เกิดข้อผิดพลาดขณะลงทะเบียน" },
      { status: 500 }
    );
  }
}
