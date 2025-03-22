import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.email || !body.email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    const googleScriptUrl =
      "https://script.google.com/macros/s/AKfycbxxxrb2GEJFbMhC2mJ2mu4TfYbr9mzyGp59MsPgyD1j3bnyE4Pu-jQaGuc1D7e69VHz/exec";

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: body.email }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email to Google Sheets");
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
