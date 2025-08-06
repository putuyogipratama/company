"use client";

import { useEffect, useState } from "react";
import {
  getTransaksi,
  createTransaksi,
  updateTransaksi,
  deleteTransaksi,
} from "@/lib/transaksi";
import NavbarDashboard from "@/components/navbardashboard";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

export default function TransaksiPage() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    kode: "",
    tanggal: "",
    deskripsi: "",
    jenis: "pemasukan",
    kategori: "",
    jumlah: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    const result = await getTransaksi();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (item = null) => {
    if (item) {
      setForm(item);
      setEditingId(item.id);
    } else {
      setForm({
        kode: "",
        tanggal: "",
        deskripsi: "",
        jenis: "pemasukan",
        kategori: "",
        jumlah: "",
      });
      setEditingId(null);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async () => {
    try {
      if (editingId) {
        await updateTransaksi(editingId, form);
      } else {
        await createTransaksi(form);
      }
      closeModal();
      fetchData();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Hapus transaksi ini?")) {
      await deleteTransaksi(id);
      fetchData();
    }
  };

  return (
    <>
      <NavbarDashboard />
      <div className="p-6 bg-white min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Manajemen Transaksi</h2>
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded flex items-center gap-2"
            onClick={() => openModal()}
          >
            <FaPlus /> Tambah
          </button>
        </div>

        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="border p-2">Kode</th>
              <th className="border p-2">Tanggal</th>
              <th className="border p-2">Deskripsi</th>
              <th className="border p-2">Jenis</th>
              <th className="border p-2">Kategori</th>
              <th className="border p-2">Jumlah</th>
              <th className="border p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border p-2 text-gray-800">{item.kode}</td>
                <td className="border p-2 text-gray-800">{item.tanggal}</td>
                <td className="border p-2 text-gray-800">{item.deskripsi}</td>
                <td className="border p-2 text-gray-800">{item.jenis}</td>
                <td className="border p-2 text-gray-800">{item.kategori}</td>
                <td className="border p-2 text-gray-800">{item.jumlah}</td>
                <td className="border p-2 text-gray-800">
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => openModal(item)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit"
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Hapus"
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              {editingId ? "Edit Transaksi" : "Tambah Transaksi"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {["kode", "tanggal", "deskripsi", "kategori", "jumlah"].map((field) => (
                <input
                  key={field}
                  className="border p-2 rounded text-gray-800"
                  placeholder={field}
                  type={field === "tanggal" ? "date" : field === "jumlah" ? "number" : "text"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                />
              ))}

              <select
                className="border p-2 rounded"
                value={form.jenis}
                onChange={(e) => setForm({ ...form, jenis: e.target.value })}
              >
                <option value="pemasukan">Pemasukan</option>
                <option value="pengeluaran">Pengeluaran</option>
              </select>
            </div>

            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                onClick={closeModal}
              >
                Batal
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
              >
                {editingId ? "Update" : "Tambah"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
