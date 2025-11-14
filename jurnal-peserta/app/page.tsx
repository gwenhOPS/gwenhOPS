"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Search,
  Download,
  Filter,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  FileText,
  Users,
  BookOpen,
  Award,
  Settings,
  Mail,
  Bell,
  LogOut,
  Menu,
} from "lucide-react";

// Sample data
const sampleData = [
  {
    id: "#1014",
    nama: "Revan Shayih Pratama",
    sekolah: "SMK 6 Muhammadiyah Rogojampi",
    tanggal: "30/04/2025",
    deskripsi: "Teks Deskripsi",
    status: "Mengisi",
  },
  {
    id: "#1012",
    nama: "Revan Shayih Pratama",
    sekolah: "SMK 6 Muhammadiyah Rogojampi",
    tanggal: "30/04/2025",
    deskripsi: "-",
    status: "Pending",
  },
  {
    id: "#1014",
    nama: "Revan Shayih Pratama",
    sekolah: "SMK 6 Muhammadiyah Rogojampi",
    tanggal: "30/04/2025",
    deskripsi: "-",
    status: "Pending",
  },
  {
    id: "#1012",
    nama: "Revan Shayih Pratama",
    sekolah: "SMK 6 Muhammadiyah Rogojampi",
    tanggal: "30/04/2025",
    deskripsi: "-",
    status: "Pending",
  },
  {
    id: "#1010",
    nama: "Revan Shayih Pratama",
    sekolah: "SMK 6 Muhammadiyah Rogojampi",
    tanggal: "30/04/2025",
    deskripsi: "-",
    status: "Pending",
  },
  {
    id: "#1012",
    nama: "Revan Shayih Pratama",
    sekolah: "SMK 6 Muhammadiyah Rogojampi",
    tanggal: "30/04/2025",
    deskripsi: "-",
    status: "Pending",
  },
  {
    id: "#1010",
    nama: "Revan Shayih Pratama",
    sekolah: "SMK 6 Muhammadiyah Rogojampi",
    tanggal: "30/04/2025",
    deskripsi: "-",
    status: "Pending",
  },
  {
    id: "#1010",
    nama: "Revan Shayih Pratama",
    sekolah: "SMK 6 Muhammadiyah Rogojampi",
    tanggal: "30/04/2025",
    deskripsi: "-",
    status: "Pending",
  },
  {
    id: "#1012",
    nama: "Revan Shayih Pratama",
    sekolah: "SMK 6 Muhammadiyah Rogojampi",
    tanggal: "30/04/2025",
    deskripsi: "-",
    status: "Pending",
  },
  {
    id: "#1010",
    nama: "Revan Shayih Pratama",
    sekolah: "SMK 6 Muhammadiyah Rogojampi",
    tanggal: "30/04/2025",
    deskripsi: "-",
    status: "Pending",
  },
  {
    id: "#1014",
    nama: "Revan Shayih Pratama",
    sekolah: "SMK 6 Muhammadiyah Rogojampi",
    tanggal: "30/04/2025",
    deskripsi: "Teks Deskripsi",
    status: "Mengisi",
  },
  {
    id: "#1012",
    nama: "Revan Shayih Pratama",
    sekolah: "SMK 6 Muhammadiyah Rogojampi",
    tanggal: "30/04/2025",
    deskripsi: "-",
    status: "Pending",
  },
];

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [searchSchool, setSearchSchool] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [searchName, setSearchName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter data
  const filteredData = sampleData.filter((item) => {
    const matchesSchool = item.sekolah
      .toLowerCase()
      .includes(searchSchool.toLowerCase());
    const matchesStatus = statusFilter === "" || item.status === statusFilter;
    const matchesName = item.nama
      .toLowerCase()
      .includes(searchName.toLowerCase());
    return matchesSchool && matchesStatus && matchesName;
  });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const CustomDateButton = ({ value, onClick }: any) => (
    <button
      onClick={onClick}
      className="flex items-center gap-2 border border-gray-300 text-[#344054] px-4 py-2 rounded-lg text-sm shadow-sm hover:bg-gray-50"
    >
      <Calendar size={16} />
      {value || "Pilih Tanggal"}
    </button>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
              H
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">
                Hummatech
              </div>
              <div className="text-xs text-gray-500">by Hummasoft</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <HomeIcon size={20} />
              <span className="text-sm">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <FileText size={20} />
              <span className="text-sm">Absen</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <Users size={20} />
              <span className="text-sm">Magang</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-white bg-orange-400 rounded-lg"
            >
              <BookOpen size={20} />
              <span className="text-sm">Jurnal</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <Users size={20} />
              <span className="text-sm">Peserta Magang</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <Award size={20} />
              <span className="text-sm">Skill</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <Settings size={20} />
              <span className="text-sm">Ujian</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <Mail size={20} />
              <span className="text-sm">Email</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <Settings size={20} />
              <span className="text-sm">Admin</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <Users size={20} />
              <span className="text-sm">Divisi</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <Award size={20} />
              <span className="text-sm">KPI</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <Users size={20} />
              <span className="text-sm">Profile Sekolah</span>
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="lg:hidden">
                <Menu size={24} />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Search size={20} />
              </button>
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell size={20} />
              </button>
              <div className="flex items-center gap-3">
                <img
                  src="https://ui-avatars.com/api/?name=User&background=0069AB&color=fff"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center px-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-cyan-400 rounded-2xl flex items-center justify-center">
                <HomeIcon size={40} className="text-white" />
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-bold">CV. NAMA CABANG 🏢</h1>
                <p className="text-sm mt-1 opacity-90">
                  CV. Humma Teknologi Islami & Solusi Untuk Teknologi yang
                  unggul
                </p>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <span>📍 Jl. Raya Sumberjo No. 52</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 p-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Pendataan Jurnal
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search here..."
                      className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm w-64"
                      value={searchName}
                      onChange={(e) => setSearchName(e.target.value)}
                    />
                    <span className="absolute left-3 top-2.5 text-gray-400">
                      <Search size={16} />
                    </span>
                  </div>
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm shadow-sm hover:bg-blue-700">
                    <Download size={16} />
                    Export
                  </button>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    customInput={<CustomDateButton />}
                    dateFormat="dd MMMM yyyy"
                    showPopperArrow={false}
                    isClearable={true}
                  />
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm shadow-sm ${
                      showFilters
                        ? "bg-blue-600 text-white"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Filter size={16} />
                    Filter
                  </button>
                </div>
              </div>

              {showFilters && (
                <div className="flex justify-end items-center gap-3 animate-fadeIn">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Cari Sekolah..."
                      className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm"
                      value={searchSchool}
                      onChange={(e) => setSearchSchool(e.target.value)}
                    />
                    <span className="absolute left-3 top-2.5 text-gray-400">
                      <Search size={16} />
                    </span>
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border border-gray-300 rounded-lg shadow-sm text-sm px-4 py-2 text-gray-700"
                  >
                    <option value="">Semua Status</option>
                    <option value="Mengisi">Mengisi</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
              )}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nama
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Asal Sekolah
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tanggal
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Deskripsi
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Manage
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <img
                            src={`https://ui-avatars.com/api/?name=${item.nama}&background=0069AB&color=fff`}
                            alt={item.nama}
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="text-sm text-gray-900">
                            {item.nama}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {item.sekolah}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded">
                          <Calendar size={14} />
                          {item.tanggal}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {item.deskripsi}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={item.status === "Mengisi"}
                            readOnly
                            className="w-4 h-4 text-blue-600 rounded"
                          />
                          <span
                            className={`px-3 py-1 rounded text-xs font-medium ${
                              item.status === "Mengisi"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {item.status}
                          </span>
                          <button className="px-4 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">
                            LIHAT DETAIL
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing page {currentPage} of {totalPages} entries
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === i + 1
                        ? "bg-blue-600 text-white"
                        : "border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            © Copyright Humma 2025, All Right Reserved
          </div>
        </main>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
