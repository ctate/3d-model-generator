import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const fileUrl = url.searchParams.get("url")

    if (!fileUrl) {
      return NextResponse.json({ error: "Missing url parameter" }, { status: 400 })
    }

    // Fetch the file from the original URL
    const response = await fetch(fileUrl)

    if (!response.ok) {
      return NextResponse.json({ error: `Failed to fetch file: ${response.status}` }, { status: response.status })
    }

    // Get the file content and content type
    const fileContent = await response.arrayBuffer()
    const contentType = response.headers.get("content-type") || "application/octet-stream"

    // Create a new response with the file content and appropriate headers
    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${fileUrl.split("/").pop()}"`,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache",
      },
    })
  } catch (error) {
    console.error("Error in proxy download route:", error)
    return NextResponse.json({ error: "Failed to proxy download" }, { status: 500 })
  }
}
