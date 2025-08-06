"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { FaSignOutAlt } from "react-icons/fa";
import NavbarDashboard from "@/components/navbardashboard";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen text-xl text-gray-800 bg-white">
      <NavbarDashboard />
      <div className="p-6">
        Selamat datang di Dashboard!
      </div>
    </div>
  );
}
