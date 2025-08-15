import { getToken } from "@/lib/transaksi";

export default async function handler(req, res) {
  // ✅ Tambahkan CORS Header
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const month = parseInt(req.query.month || new Date().getMonth() + 1); // default bulan sekarang
    const year = parseInt(req.query.year || new Date().getFullYear()); // default tahun sekarang

    // Tanggal awal bulan
    const startDate = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0, 0));
    // Tanggal akhir bulan (0 berarti hari terakhir bulan berikutnya)
    const endDate = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));

    const response = await fetch(
      "https://server.cekat.ai/conversations/conversationData",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: await getToken(),
        },
        body: JSON.stringify({
          firstChat_startDate: startDate.toISOString(),
          firstChat_endDate: endDate.toISOString(),
          lastChat_startDate: "",
          lastChat_endDate: "",
          inbox_ids: [],
          label_ids: [],
          stage_status: [],
          pipeline_status_id: "",
          first_message: "",
          search: "",
          page: 1,
          itemsPerPage: 1000000,
          handledBy: [],
          assignedBy: [],
          resolvedBy: [],
        }),
      }
    );

    const data = await response.json();
    res.status(response.status).json(data.data.data);
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}