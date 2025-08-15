import { supabase } from "@/lib/supabaseClient";

export default async function handler(req, res) {
  try {
    const { data: targets, error } = await supabase
      .from("target")
      .select("phone_number")
      .eq("done", 0)
      .order("id", { ascending: true })
      .limit(1);

    if (error) throw error;

    const message = `Halo, kami dari PT Maju Jaya ingin menawarkan produk terbaru kami! 🎉

💼 Nama Produk: Mesin Kopi Otomatis
💰 Harga: Mulai dari Rp1.250.000,-
✨ Promo: Diskon 20% hingga 31 Agustus 2025

Untuk informasi lebih lanjut, silakan balas chat ini atau klik link berikut:
https://contoh-produk.com

Terima kasih, semoga hari Anda menyenangkan! ☕`;

    for (const item of targets) {
      // const response = await fetch(
      //   `https://wa-gateway.pocketnihongo.id/message/send-text?session=kopi&to=6282293424963&text=${encodeURIComponent(
      //     message
      //   )}`
      // );
      // const result = await response.json();

      // await supabase
      //   .from("target")
      //   .update({ done: 1 })
      //   .eq("phone_number", item.phone_number);
    }

    res.status(200).json({ message: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
