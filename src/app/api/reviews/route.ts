import { NextResponse } from "next/server";
import { REVIEWS_MOCK } from "../../lib/reviewsMock";

export async function GET() {
  return NextResponse.json({
    source: "mock",
    count: REVIEWS_MOCK.length,
    reviews: REVIEWS_MOCK,
  });
}