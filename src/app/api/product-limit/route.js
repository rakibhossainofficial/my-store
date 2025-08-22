import { NextResponse } from "next/server";
import { collectionList, database } from "@/libs/database";

export async function GET(request) {
  try {
    const collection = await database(collectionList.productCollection);

    const result = await collection.find().limit(3).toArray();

    return NextResponse.json({
      success: true,
      message: "Products retrieved successfully",
      data: result || [],
    });
  } catch (error) {
    console.error("Error retrieving products:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve products",
        error: error?.message || "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
