import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(
    "https://app.mobitechtechnologies.com/sms/sendsms",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        h_api_key:
          "576124dc42016b6f6cac1f736bc3cbbb49a814a1a17a1cbd0f7f926ab3ecbbf3",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}
