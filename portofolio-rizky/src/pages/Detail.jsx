import { useParams, Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  const projects = {
    "siomas": {
      title: "SIOMAS: Sistem Otomatis Pengelolaan PAMSIMAS",
      role: "Full-Stack Developer",
      tech: "Laravel, React, Tailwind, MySQL",
      problem: "Manajemen air bersih Jantiharjo sebelumnya manual, berisiko human error dalam penagihan bulanan.",
      solution: "Otomatisasi pencatatan meteran dan tagihan pelanggan menggunakan metodologi Waterfall.",
      results: [
        "Terdaftar resmi dalam Surat Pencatatan Ciptaan (HAKI) Kemenkumham.",
        "Meraih skor System Usability Scale (SUS) sebesar 77.6.",
        "Implementasi arsitektur database relasional untuk manajemen pelanggan."
      ],
      images: ["/haki-siomas.jpg", "/ui-siomas.jpg"]
    },
    "dishub-notulensi": {
      title: "Web Notulensi & Local STB Server Hosting",
      role: "Web Developer Intern",
      tech: "Laravel, Debian, STB Indihome, GIS",
      problem: "Digitalisasi risalah rapat instansi dan efisiensi biaya server lokal yang kurang optimal.",
      solution: "Membangun aplikasi web notulensi dan melakukan eksperimen flashing STB menjadi server Debian 24/7.",
      results: [
        "Magang selesai dengan hasil penilaian BAIK dari Dishub Boyolali.",
        "Implementasi CRUD rapat publik/private dan manajemen data ASN.",
        "Pemetaan titik koordinat rambu lalu lintas ke dalam Web GIS."
      ],
      images: ["/sertif-dishub.jpg"]
    },
    "capstone-resep": {
      title: "Web Resep Makanan Berbasis AI (Capstone)",
      role: "Backend Developer",
      tech: "PHP, Laravel, MySQL, Gemini AI API",
      problem: "Kesulitan pengguna menentukan menu masakan berdasarkan sisa bahan seadanya di kulkas.",
      solution: "Integrasi sistem dengan Gemini AI untuk memberikan rekomendasi resep cerdas secara real-time.",
      results: [
        "Perancangan ERD database untuk kategori resep, rating, dan profil user.",
        "Implementasi API untuk pemrosesan bahasa alami masukan bahan makanan.",
        "Dashboard admin untuk manajemen konten resep makanan."
      ],
      images: ["/capstone-ui.jpg", "/capstone-erd.jpg"]
    },
    "automation-bot": {
      title: "Cloud & Social Media Automation Bot",
      role: "Automation Engineer",
      tech: "Python, Node.js, Google Drive API, Gemini AI",
      problem: "Kurasi konten viral dan pengiriman file resolusi tinggi memakan waktu lama jika dilakukan manual.",
      solution: "Membangun ekosistem bot Telegram/WA sebagai asisten cerdas dan jembatan langsung ke Google Drive.",
      results: [
        "Otomatisasi auto-upload file HD tanpa kompresi langsung ke GDrive via OAuth Token.",
        "Otomatisasi penulisan takarir (caption) berbasis tren algoritma Gemini AI.",
        "Sistem notifikasi sukses/error serta pengingat jadwal via API Telegram."
      ],
      images: ["/bot-tele.jpg", "/bot-gdrive.jpg"]
    },
    "server-vps": {
      title: "Infrastruktur Server & Manajemen VPS",
      role: "DevOps Engineer",
      tech: "Ubuntu, Nginx, SSH, DigitalOcean, Azure",
      problem: "Manajemen layanan bot dan web membutuhkan satu environment server terpusat yang aman dan stabil.",
      solution: "Pengaturan environment Linux terpusat dengan protokol keamanan tinggi dan optimalisasi jaringan.",
      results: [
        "Konfigurasi Reverse Proxy Nginx untuk mengarahkan traffic aplikasi.",
        "Setup penjadwalan tugas otomatis menggunakan cron jobs.",
        "Monitoring resource server (htop) dan performa jaringan secara berkala."
      ],
      images: ["/vps-htop.jpg", "/vps-nginx.jpg"]
    },
    "perpus-web": {
      title: "Sistem Informasi Perpustakaan Sederhana",
      role: "Full-Stack Developer",
      tech: "PHP, MySQL, CSS Bootstrap",
      problem: "Sirkulasi peminjaman buku manual menyulitkan pelacakan dan penghitungan denda keterlambatan.",
      solution: "Digitalisasi katalog dan transaksi peminjaman buku berbasis web untuk efisiensi anggota.",
      results: [
        "Fitur manajemen CRUD buku, data anggota, dan histori transaksi.",
        "Sistem penghitungan otomatis untuk masa berlaku pinjaman buku.",
        "Deploy aplikasi menggunakan cloud hosting agar dapat diakses publik."
      ],
      images: ["/perpus-login.jpg", "/perpus-crud.jpg"]
    },
    "kas-masjid": {
      title: "Sistem Monitoring Kas Masjid",
      role: "Web Developer",
      tech: "PHP Laravel, MySQL, Tailwind",
      problem: "Kurangnya transparansi laporan keuangan umat yang hanya dicatat secara manual di buku.",
      solution: "Platform web terintegrasi untuk pelaporan arus kas secara real-time dan publik.",
      results: [
        "Laporan grafik keuangan dan dashboard yang transparan bagi jamaah.",
        "Arsip digital bukti pengeluaran dan pemasukan dana masjid.",
        "Manajemen hak akses bagi pengurus masjid untuk keamanan data."
      ],
      images: ["/kas-dashboard.jpg"]
    }
  };

  const project = projects[id];

  if (!project) return <div className="p-24 text-center text-zinc-400">Project Not Found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <Link to="/" className="text-emerald-500 hover:underline mb-8 inline-block">&larr; BACK TO SYSTEM</Link>
      <div className="bg-zinc-900 border border-zinc-800 p-10">
        <h1 className="text-3xl font-bold text-zinc-100 mb-2">{project.title}</h1>
        <p className="text-emerald-500 font-mono text-[10px] mb-8 uppercase tracking-widest">{project.role} | {project.tech}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Kolom Kiri: Teks */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xs font-bold text-zinc-100 mb-2 uppercase tracking-tighter">/ Problem Statement</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">{project.problem}</p>
            </section>
            <section>
              <h2 className="text-xs font-bold text-zinc-100 mb-2 uppercase tracking-tighter">/ Proposed Solution</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">{project.solution}</p>
            </section>
            <section>
              <h2 className="text-xs font-bold text-zinc-100 mb-2 uppercase tracking-tighter">/ Key Achievements</h2>
              <ul className="text-zinc-400 text-sm space-y-2">
                {project.results.map((r, i) => <li key={i}>[{i+1}] {r}</li>)}
              </ul>
            </section>
          </div>
          
          {/* Kolom Kanan: Gambar Dinamis (Bisa 1 atau 2 sesuai data) */}
          <div className="space-y-4">
            {project.images.map((imgSrc, index) => (
              <div key={index} className="aspect-video bg-zinc-950 border border-zinc-800 flex items-center justify-center overflow-hidden">
                <img 
                  src={imgSrc} 
                  alt={`Screenshot ${index + 1}`} 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" 
                />
              </div>
            ))}
            <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 mt-2">
              <p className="text-[10px] font-mono text-emerald-400 uppercase leading-tight italic">Verified project data. All systems operational.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}