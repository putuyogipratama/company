import { supabase } from "./supabaseClient";

const table = "transaksi";

export const getTransaksi = async () => {
  const { data, error } = await supabase.from(table).select("*").order("tanggal", { ascending: false });
  if (error) throw error;
  return data;
};

export const createTransaksi = async (transaksi) => {
  const { data, error } = await supabase.from(table).insert([transaksi]);
  if (error) throw error;
  return data;
};

export const updateTransaksi = async (id, transaksi) => {
  const { data, error } = await supabase.from(table).update(transaksi).eq("id", id);
  if (error) throw error;
  return data;
};

export const deleteTransaksi = async (id) => {
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw error;
};
