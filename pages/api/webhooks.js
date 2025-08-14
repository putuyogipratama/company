import { supabase } from "@/lib/supabaseClient";

export default async function handler(req, res) {
  // ✅ Tambahkan CORS Header
  res.setHeader("Access-Control-Allow-Origin", "*"); // ganti * dengan domain Laravel kalau mau aman
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await fetch(
      "https://server.cekat.ai/conversations/conversationData",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: "eyJhbGciOiJIUzI1NiIsImtpZCI6Ikx4UmFtRVFJRTRseTJKaTgiLCJ0eXAiOiJKV1QifQ.eyJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTc1NDU3MTA1NX1dLCJhcHBfbWV0YWRhdGEiOnsiYml6X2lkIjoiNDM3ZGZmYzMtMDBhMi00MDFmLTg0ZDEtODdiZDg4ZjU3MGZhIiwicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwiYXVkIjoiYXV0aGVudGljYXRlZCIsImVtYWlsIjoicG9ja2V0bmlob25nb0BnbWFpbC5jb20iLCJleHAiOjE3NTUxNzU3ODksImlhdCI6MTc1NDU3MTA1NSwiaXNfYW5vbnltb3VzIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly91ZHF4dWNsbndsaXNlaXlxdWFyYy5zdXBhYmFzZS5jby9hdXRoL3YxIiwicGhvbmUiOiIiLCJyb2xlIjoiYXV0aGVudGljYXRlZCIsInNlc3Npb25faWQiOiJkMTU5NGI0NC0yMGVmLTRjYzMtYjg1ZC0xMDk1MDA2ZGYwNWYiLCJzdWIiOiJlODc0ZTBmYy04YmUxLTRjZmQtOTIxZS1lYzUwZjM2OTlkMjciLCJ1c2VyX21ldGFkYXRhIjp7Im5hbWUiOiJQb2NrZXQgTmlob25nbyIsInBob25lX251bWJlciI6IjYyODIxMzIyMzc1NTAifX0.io8G3_8NnuMD8yDNIZefSF91JfrKR_-we2tUlrcLY2k", // header access_token
        },
        body: JSON.stringify({
          firstChat_startDate: "2025-01-01T00:00:00.000Z",
          firstChat_endDate: new Date().toISOString(),
          lastChat_startDate: "",
          lastChat_endDate: "",
          inbox_ids: [],
          label_ids: [],
          stage_status: [],
          pipeline_status_id: "",
          first_message: "",
          search: "",
          page: 1,
          itemsPerPage: 100000,
          handledBy: [],
          assignedBy: [],
          resolvedBy: [],
          // sort: {},
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
