import dbConnect from "@/lib/dbConnect"; // adjust path if needed

export async function POST(req) {
  try {
    const body = await req.json();
    const snakesCollection = dbConnect("snake");

    // Save snake in DB
    const result = await snakesCollection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ success: true, id: result.insertedId }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving snake:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
