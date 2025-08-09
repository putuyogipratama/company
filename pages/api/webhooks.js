import { supabase } from "@/lib/supabaseClient";

export default async function handler(req, res) {
  // ✅ Tambahkan CORS Header
  res.setHeader("Access-Control-Allow-Origin", "*"); // ganti * dengan domain Laravel kalau mau aman
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const { data, error } = await supabase
      .from("webhooks")
      .select(
        "id, phone_number, label_name, display_name, handled_by_name, message, message_created_at, conversation_id, created_at"
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase select error:", error);
      return res.status(500).json({ error: "Failed to fetch webhook data" });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
