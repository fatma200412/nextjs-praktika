import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
//get

export function GET() {
  const data = users;
  return NextResponse.json({ data });
}
