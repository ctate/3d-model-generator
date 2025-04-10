import { NextResponse } from "next/server"

const API_KEY = "vibecoding" // Public API key

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { subscription_key } = body

    if (!subscription_key) {
      return NextResponse.json({ error: "Missing subscription_key" }, { status: 400 })
    }

    const response = await fetch("https://hyperhuman.deemos.com/api/v2/status", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subscription_key }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        { error: `Status check failed: ${response.status}`, details: errorText },
        { status: response.status },
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in Status API route:", error)
    return NextResponse.json({ error: "Failed to check status" }, { status: 500 })
  }
}
