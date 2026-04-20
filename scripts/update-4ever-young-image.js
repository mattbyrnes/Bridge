import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase environment variables");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateImage() {
  try {
    // Update the 4Ever Young Med Spa & Wellness Center - Midtown listing
    const { data, error } = await supabase
      .from("user_clinics")
      .update({
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20-%202026-04-13T160403.289-4kjnY7xlaOGEW50cBw14xKahAlrtH2.png",
      })
      .eq("name", "4Ever Young Med Spa & Wellness Center - Midtown")
      .select();

    if (error) {
      console.error("Error updating image:", error);
      process.exit(1);
    }

    console.log("[v0] Updated 4Ever Young listing image successfully");
    console.log("[v0] Updated rows:", data);
  } catch (err) {
    console.error("[v0] Failed to update image:", err);
    process.exit(1);
  }
}

updateImage();
