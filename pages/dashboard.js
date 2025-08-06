"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (!data.session || error) {
        router.push("/"); // Redirect ke halaman utama atau login
      } else {
        setLoading(false);
      }
    };

    checkSession();
  }, [router]);

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/"); // Arahkan ke homepage atau login
  };

  return (
    <div className="min-h-screen text-xl font-bold text-gray-800 bg-white">
      <div className="bg-[#2C3E50] text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Dashboard Nayla</h1>
        <ul className="flex gap-6 text-sm">
          <li>
            <button
              className="hover:underline"
              onClick={() => alert("Menu 1 clicked")}
            >
              Beranda
            </button>
          </li>
          <li>
            <button
              className="hover:underline"
              onClick={() => alert("Menu 2 clicked")}
            >
              Data Pegawai
            </button>
          </li>
          <li>
            <button
              className="hover:underline"
              onClick={() => alert("Menu 3 clicked")}
            >
              Data Invoice
            </button>
          </li>
          <li>
            <button
              className="hover:underline"
              onClick={() => alert("Menu 3 clicked")}
            >
              Data Layanan
            </button>
          </li>
          <li>
            <button
              className="hover:underline"
              onClick={() => alert("Menu 3 clicked")}
            >
              Monitoring
            </button>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="bg-red-800 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
        >
          Logout
        </button>
      </div>
      <div className="p-6">
        Selamat datang di Dashboard!
      </div>
    </div>
  );
}
