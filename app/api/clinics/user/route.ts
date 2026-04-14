import { query } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      userId,
      name,
      city,
      region,
      address,
      phone,
      website,
      description,
      priceRange,
      hours,
      services,
      image,
    } = body;

    if (!userId || !name || !city || !address || !phone) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Ensure userId is a number
    const numericUserId = typeof userId === 'string' ? parseInt(userId, 10) : userId;

    const result = await query(
      `INSERT INTO user_clinics 
       (user_id, name, city, region, address, phone, website, description, price_range, hours, services, image, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
       RETURNING id, user_id, name, city, region, address, phone, website, description, price_range, hours, services, image, status, created_at`,
      [
        numericUserId,
        name,
        city,
        region || "Metro Atlanta",
        address,
        phone,
        website || "",
        description || "",
        priceRange || "$",
        hours || "9AM - 5PM",
        JSON.stringify(services || []),
        image || "",
        "approved",
      ]
    );

    return Response.json(result.rows[0], { status: 201 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return Response.json(
      { error: `Failed to create clinic listing: ${errorMessage}` },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return Response.json(
        { error: "userId is required" },
        { status: 400 }
      );
    }

    const numericUserId = parseInt(userId, 10);

    const result = await query(
      "SELECT * FROM user_clinics WHERE user_id = $1 ORDER BY created_at DESC",
      [numericUserId]
    );

    return Response.json(result.rows);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch clinics" },
      { status: 500 }
    );
  }
}
