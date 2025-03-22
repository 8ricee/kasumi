import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { success: false, message: "Invalid email address" },
      { status: 400 }
    );
  }

  const googleScriptUrl =
    "https://script.google.com/macros/s/AKfycbw08LPliwXFapxQcrtJPddp3dFhGGteHmpQwIgak1z6mCIsAmJLjJNi4GM-9l5uQ87l/exec";

  try {
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    return NextResponse.json(result);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to send email to Google Sheet" },
      { status: 500 }
    );
  }
}
