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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchData = async () => {
    const result = await getTransaksi();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

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

  const filteredData = data.filter(
    (item) =>
      (item.kode?.toLowerCase() ?? "").includes(search.toLowerCase()) ||
      (item.deskripsi?.toLowerCase() ?? "").includes(search.toLowerCase()) ||
      (item.kategori?.toLowerCase() ?? "").includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <NavbarDashboard />
      <div className="p-6 bg-white min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Manajemen Transaksi</h2>
          <div className="flex gap-2">
            <Input
              placeholder="Cari transaksi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={() => openModal()}>
              <FaPlus className="mr-2" /> Tambah
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-muted text-muted-foreground">
                  <th className="border p-2 text-gray-800">No</th>
                  <th className="border p-2 text-gray-800">Kode</th>
                  <th className="border p-2 text-gray-800">Tanggal</th>
                  <th className="border p-2 text-gray-800">Deskripsi</th>
                  <th className="border p-2 text-gray-800">Jenis</th>
                  <th className="border p-2 text-gray-800">Kategori</th>
                  <th className="border p-2 text-gray-800">Jumlah</th>
                  <th className="border p-2 text-gray-800">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item, index) => (
                  <tr key={item.id} className="text-center">
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{item.kode}</td>
                    <td className="border p-2">{item.tanggal}</td>
                    <td className="border p-2">{item.deskripsi}</td>
                    <td className="border p-2">{item.jenis}</td>
                    <td className="border p-2">{item.kategori}</td>
                    <td className="border p-2">{item.jumlah}</td>
                    <td className="border p-2">
                      <div className="flex gap-2 justify-center">
                        <Button variant="ghost" size="icon" onClick={() => openModal(item)}>
                          <FaEdit />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                          <FaTrash className="text-destructive" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-4 gap-2 text-gray-800">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </Button>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              size="sm"
              variant={currentPage === i + 1 ? "default" : "outline"}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>{editingId ? "Edit Transaksi" : "Tambah Transaksi"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {["kode", "tanggal", "deskripsi", "kategori", "jumlah"].map(
                  (field) => (
                    <Input
                      key={field}
                      type={
                        field === "tanggal"
                          ? "date"
                          : field === "jumlah"
                          ? "number"
                          : "text"
                      }
                      placeholder={field}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    />
                  )
                )}
                <Select
                  value={form.jenis}
                  onValueChange={(val) => setForm({ ...form, jenis: val })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pemasukan">Pemasukan</SelectItem>
                    <SelectItem value="pengeluaran">Pengeluaran</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={closeModal}>Batal</Button>
                <Button onClick={handleSubmit}>{editingId ? "Update" : "Tambah"}</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}