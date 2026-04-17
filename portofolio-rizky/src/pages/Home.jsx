import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const specialties = [
    "Full-Stack Developer",
    "DevOps Engineer",
    "Automation Engineer",
    "Backend Developer",
  ];
  const [currentSpecialty, setCurrentSpecialty] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialty((prev) => (prev + 1) % specialties.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [specialties.length]);

  // Data 7 Proyek Final (Data tidak diubah sama sekali)
  const projectData = [
    {
      id: "siomas",
      role: "Full-Stack Developer",
      title: "SIOMAS (Sistem Otomatis PAMSIMAS)",
      desc: "Digitalisasi manajemen air Jantiharjo. Terdaftar HAKI dan meraih skor SUS 77.6.",
      image: "/haki-siomas.jpg",
    },
    {
      id: "server-vps",
      role: "DevOps Engineer",
      title: "Infrastruktur Server & VPS",
      desc: "Pengelolaan server Linux (Ubuntu/Nginx) untuk bot dan web apps dengan fokus keamanan SSH.",
      image: "/vps-htop.jpg",
    },
    {
      id: "automation-bot",
      role: "Automation Engineer",
      title: "Telegram Bot & Cloud Automation",
      desc: "Ekosistem bot untuk otomatisasi konten, AI caption, dan auto-upload HD ke Google Drive.",
      image: "/bot-tele.jpg",
    },
    {
      id: "capstone-resep",
      role: "Backend Developer",
      title: "Web Resep Makanan AI",
      desc: "Platform resep cerdas dengan integrasi Gemini AI untuk rekomendasi menu bahan kulkas.",
      image: "/capstone-ui.jpg",
    },
    {
      id: "dishub-notulensi",
      role: "Web Developer",
      title: "Aplikasi Notulensi & Local Hosting",
      desc: "Digitalisasi risalah rapat Dishub Boyolali dengan inovasi hosting STB Debian 24/7.",
      image: "/dashboard-notulen.jpg",
    },
    {
      id: "perpus-web",
      role: "Full-Stack Developer",
      title: "Sistem Informasi Perpustakaan",
      desc: "Manajemen sirkulasi buku praktikum dengan fitur peminjaman dan manajemen anggota.",
      image: "/perpus-login.jpg",
    },
    {
      id: "kas-masjid",
      role: "Web Developer",
      title: "Sistem Monitoring Kas Masjid",
      desc: "Digitalisasi laporan keuangan umat berbasis Laravel untuk transparansi kas masjid.",
      image: "/masjid.jpg",
    },
  ];

  return (
    <div className="w-full bg-zinc-950 text-zinc-300 font-sans selection:bg-emerald-500/30 relative">
      
      {/* --- FLOATING SOCIAL BAR (DESKTOP) --- */}
      {/* Muncul di pojok kiri bawah dengan efek garis estetik pada layar Desktop */}
      <div className="hidden md:flex fixed bottom-0 left-8 xl:left-12 flex-col items-center gap-6 z-50">
        <a href="https://github.com/rizkyJan" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300" aria-label="GitHub">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
        </a>
        <a href="https://instagram.com/rzkyja" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300" aria-label="Instagram">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/riski-januar-0a9586320/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <div className="w-px h-24 bg-gradient-to-b from-zinc-600 to-transparent"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Grids & Glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500 mb-6 drop-shadow-sm">
            Rizky Januar Afrizal
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light mb-12 h-10 flex items-center justify-center gap-2">
            Specialized in{" "}
            <span className="font-semibold text-emerald-400">
              {specialties[currentSpecialty]}
            </span>
            <span className="w-1.5 h-6 bg-emerald-500 animate-pulse"></span>
          </p>

          <a
            href="#about"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white transition-all duration-200 bg-emerald-600 border border-transparent rounded-sm hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
          >
            START EXPLORING
            <span className="ml-2 group-hover:translate-y-1 transition-transform duration-200">&darr;</span>
          </a>

          {/* Social Links Khusus Mobile (Sembunyi di layar Desktop) */}
          <div className="flex md:hidden items-center gap-8 mt-12">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-emerald-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-emerald-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-emerald-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section
        id="about"
        className="relative max-w-6xl mx-auto px-6 py-32"
      >
        {/* Decorative line top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-emerald-500"></span>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
                About Me
              </h2>
            </div>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Fresh Graduate S1 Teknik Informatika
              yang berdomisili di Karanganyar. Memiliki ketertarikan kuat dalam
              pengembangan aplikasi web terpadu, infrastruktur server, dan
              otomatisasi sistem.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Berpengalaman dalam merancang perangkat lunak secara <span className="text-zinc-200">end-to-end</span>,
              mulai dari full-stack development, eksplorasi local hosting
              menggunakan STB dengan Os Debian, manajemen VPS (Linux/Cloud), hingga membangun
              ekosistem bot cerdas bertenaga AI untuk efisiensi alur kerja
              digital.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex flex-col px-4 py-2 bg-zinc-900/50 border border-zinc-800/50 rounded-md">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Status</span>
                <span className="text-emerald-400 text-sm font-mono">Student</span>
              </div>
              <div className="flex flex-col px-4 py-2 bg-zinc-900/50 border border-zinc-800/50 rounded-md">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Location</span>
                <span className="text-emerald-400 text-sm font-mono">Karanganyar</span>
              </div>
            </div>
          </div>
          
          {/* Foto Profil */}
          <div className="lg:col-span-5 relative group">
            {/* Dekorasi Bingkai Estetik */}
            <div className="absolute -inset-4 border border-zinc-800/50 bg-zinc-900/20 transform rotate-3 group-hover:rotate-1 transition-transform duration-500 rounded-lg"></div>
            <div className="absolute -inset-4 border border-emerald-500/20 transform -rotate-3 group-hover:-rotate-1 transition-transform duration-500 rounded-lg"></div>
            
            <div className="aspect-[3/4] w-full max-w-sm mx-auto relative overflow-hidden rounded-md shadow-2xl z-10">
              <img
                src="/foto-pas.jpg"
                alt="Rizky Januar Afrizal"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 scale-105 hover:scale-100 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="relative bg-zinc-900/30 border-y border-zinc-800/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.03),transparent_50%)]"></div>
        
        <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-3">Arsenal</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
              Technical Proficiencies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Development */}
            <div className="bg-zinc-950/50 backdrop-blur-sm border border-zinc-800/50 p-8 rounded-xl hover:border-emerald-500/30 transition-colors duration-300 group">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-6">Development</h3>
              <div className="flex flex-wrap gap-2.5">
                {["PHP & Laravel", "React.js", "Node.js", "Python", "Tailwind CSS", "MySQL"].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono rounded-md hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-zinc-950/50 backdrop-blur-sm border border-zinc-800/50 p-8 rounded-xl hover:border-emerald-500/30 transition-colors duration-300 group">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-6">Infrastructure</h3>
              <div className="flex flex-wrap gap-2.5">
                {["Linux (Ubuntu)", "Nginx", "VPS (DO/Azure)", "STB Hosting (Debian)", "SSH & Cron"].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono rounded-md hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Automation & AI */}
            <div className="bg-zinc-950/50 backdrop-blur-sm border border-zinc-800/50 p-8 rounded-xl hover:border-emerald-500/30 transition-colors duration-300 group">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-6">Automation & AI</h3>
              <div className="flex flex-wrap gap-2.5">
                {["Gemini AI", "Groq (Whisper)", "FFmpeg & yt-dlp", "Google Drive API", "Youtube API", "Telegram/WA Bot"].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono rounded-md hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
        <div className="flex items-center gap-4 mb-16">
          <span className="h-px w-12 bg-emerald-500"></span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
            Integrated Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col h-full bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(16,185,129,0.2)] hover:border-emerald-500/50 transition-all duration-500 ease-out"
            >
              {/* Image Container */}
              <div className="h-56 bg-zinc-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                {/* Gradient Overlay for smooth transition to text */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-900 to-transparent z-20"></div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow relative z-30 bg-zinc-900">
                <p className="text-emerald-400 text-[10px] font-mono font-bold mb-3 tracking-widest uppercase">
                  {project.role}
                </p>
                <h3 className="text-xl font-bold text-zinc-100 mb-3 leading-snug group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-8 flex-grow leading-relaxed">
                  {project.desc}
                </p>
                <Link
                  to={`/detail/${project.id}`}
                  className="inline-flex items-center gap-2 mt-auto text-emerald-400 text-sm font-semibold group/link"
                >
                  View Case Study 
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}