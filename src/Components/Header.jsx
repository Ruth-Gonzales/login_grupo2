import { Menu, Search, Bell } from "lucide-react";

export default function Header({ onOpenSidebar }) {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {/* MENU BUTTON MOBILE */}
        <button
          onClick={onOpenSidebar}
          className="lg:hidden w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition cursor-pointer"
        >
          <Menu />
        </button>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-white">Sistema Académico</h1>
          <p className="text-gray-400 mt-1 text-sm md:text-base">Plataforma institucional moderna</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        {/* SEARCH */}
        <div className="relative flex-1 md:flex-none">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full md:w-72 bg-white/10 border border-white/10 rounded-2xl py-3 pl-12 pr-5 outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
          />
        </div>
        {/* NOTIFICATION */}
        <button className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition cursor-pointer text-white">
          <Bell />
        </button>
      </div>
    </header>
  );
}
