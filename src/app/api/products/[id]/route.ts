import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { id } = await res.params;
  const user = users.find((user) => user.id === id);
  return NextResponse.json({ user });
}
