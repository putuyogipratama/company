import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";
import { FaSignOutAlt } from "react-icons/fa";

export default function NavbarDashboard() {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (!data.session || error) {
        router.push("/"); // Redirect ke halaman utama atau login
      }
    };

    checkSession();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/"); // Arahkan ke homepage atau login
  };

  return (
  <div className="bg-[#2C3E50] text-white px-6 py-4 flex justify-between items-center">
    <h1 className="text-lg font-bold">Dashboard</h1>
    <ul className="flex gap-6 text-sm">
      <li>
        <button
          className="hover:underline"
          onClick={() => router.push("/dashboard")}
        >
          Dashboard
        </button>
      </li>
      <li>
        <button
          className="hover:underline"
          onClick={() => alert("Menu 2 clicked")}
        >
        Pegawai
        </button>
      </li>
      <li>
        <button
          className="hover:underline"
          onClick={() => router.push("/transaksi")}
        >
        Transaksi
        </button>
      </li>
      <li>
        <button
          className="hover:underline"
          onClick={() => alert("Menu 3 clicked")}
        >
        Layanan
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
    <button onClick={handleLogout} className="text-white px-3 py-1 text-sm">
      <FaSignOutAlt />
    </button>
  </div>);
}
