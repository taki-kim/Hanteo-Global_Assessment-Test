import { NextResponse } from "next/server";
import { connectDatabase } from "@/utils/db";
import { FETCH_CHARTS_LIMIT } from "@/constants";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const offsetParam = searchParams.get("offset") || "0";
  const offset = parseInt(offsetParam, 10);

  let client;
  try {
    client = await connectDatabase();

    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("charts");

    const query: Record<string, unknown> = {};

    const data = await collection
      .find(query)
      .sort({ chart: +1 })
      .skip(offset)
      .limit(FETCH_CHARTS_LIMIT)
      .toArray();

    const totalCount = await collection.countDocuments();

    return NextResponse.json({
      data,
      hasMore: offset + FETCH_CHARTS_LIMIT < totalCount,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    if (client) client.close();
  }
}
