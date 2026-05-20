import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  Calendar,
  CreditCard,
  Settings,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";

function MainLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white overflow-hidden relative">

      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-30"></div>

      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-30"></div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:relative z-50
          w-72 h-screen
          bg-white/5 backdrop-blur-xl
          border-r border-white/10
          p-6
          transition-all duration-300
          ${open ? "left-0" : "-left-80"}
          lg:left-0
        `}
      >

        {/* CLOSE BUTTON MOBILE */}
        <button
          onClick={() => setOpen(false)}
          className="lg:hidden absolute top-6 right-6"
        >
          <X />
        </button>

        {/* LOGO */}
        <div className="flex items-center gap-4 mb-12">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <GraduationCap size={28} />
          </div>

          <div>
            <h1 className="font-bold text-xl">
              EduSystem
            </h1>

            <p className="text-sm text-gray-400">
              Gestión Académica
            </p>
          </div>

        </div>

        {/* MENU */}
        <nav className="space-y-3">

          <Link
            to="/"
            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 transition"
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/matricula"
            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 transition"
          >
            <BookOpen size={20} />
            <span>Matrícula</span>
          </Link>

          <Link
            to="/horarios"
            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 transition"
          >
            <Calendar size={20} />
            <span>Horarios</span>
          </Link>

          <Link
            to="/pagos"
            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 transition"
          >
            <CreditCard size={20} />
            <span>Pagos</span>
          </Link>

          <Link
            to="/configuracion"
            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/10 transition"
          >
            <Settings size={20} />
            <span>Configuración</span>
          </Link>

        </nav>

      </aside>

      {/* MAIN */}
      <main className="flex-1 p-4 md:p-8 relative z-10 overflow-y-auto w-full">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* MENU BUTTON MOBILE */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center"
            >
              <Menu />
            </button>

            <div>
              <h1 className="text-2xl md:text-4xl font-bold">
                Sistema Académico
              </h1>

              <p className="text-gray-400 mt-1 text-sm md:text-base">
                Plataforma institucional moderna
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 w-full md:w-auto">

            {/* SEARCH */}
            <div className="relative flex-1 md:flex-none">

              <Search
                className="absolute left-4 top-3.5 text-gray-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Buscar..."
                className="
                  w-full md:w-72
                  bg-white/10
                  border border-white/10
                  rounded-2xl
                  py-3
                  pl-12
                  pr-5
                  outline-none
                  focus:ring-2
                  focus:ring-purple-500
                "
              />

            </div>

            {/* NOTIFICATION */}
            <button className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition">
              <Bell />
            </button>

          </div>

        </header>

        {/* CONTENT */}
        {children}

      </main>

    </div>
  );
}

export default MainLayout;