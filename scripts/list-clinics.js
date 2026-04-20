import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase environment variables");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function listClinics() {
  try {
    const { data, error } = await supabase
      .from("user_clinics")
      .select("id, name, city, image");

    if (error) {
      console.error("Error fetching clinics:", error);
      process.exit(1);
    }

    console.log("[v0] All clinics:");
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("[v0] Failed to fetch clinics:", err);
    process.exit(1);
  }
}

listClinics();
