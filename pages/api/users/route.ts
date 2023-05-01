// pages/api/users.ts
import { NextRequest, NextResponse } from "next/server";
import { POST } from "@/app/api/users/route";

export async function handler(req: NextRequest) {
  switch (req.method) {
    case "POST":
      return POST(req);
    default:
      return NextResponse.next();
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
