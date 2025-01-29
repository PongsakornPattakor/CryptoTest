import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongoDB";
import User from "@/models/userSchema";
import bcrypt from "bcryptjs";

export async function POST(req: any) {
  try {
    const { name, username, phone, email, password, fiatBalance } =
      await req.json();

    const hashPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();

    await User.create({
      name: name.trim(),
      username: username.trim(),
      email: email.trim(),
      password: hashPassword,
      phone: phone,
      fiatBalance,
    });

    return NextResponse.json({ message: "ลงทะเบียนสำเร็จ" });
  } catch (error) {
    console.log("Case1", error);
    return NextResponse.json(
      { message: "เกิดข้อผิดพลาดขณะลงทะเบียน" },
      { status: 500 }
    );
  }
}
