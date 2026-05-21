import { X, GraduationCap, LayoutDashboard, BookOpen, User, Calendar, CreditCard, Settings, LogOut } from "lucide-react";

export default function Sidebar({ open, setOpen, activePage, onNavigate }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { id: "matricula", label: "Matrícula", icon: <BookOpen size={20} /> },
    { id: "matriculaWizard", label: "Wizard Matrícula", icon: <GraduationCap size={20} /> },
    { id: "studentDetails", label: "Mi Perfil", icon: <User size={20} /> },
    { id: "horarios", label: "Horarios", icon: <Calendar size={20} /> },
    { id: "pagos", label: "Pagos", icon: <CreditCard size={20} /> },
    { id: "configuracion", label: "Configuración", icon: <Settings size={20} /> },
  ];

  return (
    <aside
      className={`
        fixed lg:relative z-50
        w-72 h-screen
        bg-white/5 backdrop-blur-xl
        border-r border-white/10
        p-6
        flex flex-col
        transition-all duration-300
        ${open ? "left-0" : "-left-80"}
        lg:left-0
      `}
    >
      {/* CLOSE BUTTON MOBILE */}
      <button
        onClick={() => setOpen(false)}
        className="lg:hidden absolute top-6 right-6 text-white hover:text-purple-300 cursor-pointer"
      >
        <X size={24} />
      </button>

      {/* LOGO */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
          <GraduationCap size={28} />
        </div>
        <div>
          <h1 className="font-bold text-xl text-white">EduSystem</h1>
          <p className="text-sm text-gray-400">Gestión Académica</p>
        </div>
      </div>

      {/* MENU */}
      <nav className="space-y-2 flex-1 overflow-y-auto pr-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              onNavigate(item.id);
              setOpen(false);
            }}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition cursor-pointer text-left ${
              activePage === item.id
                ? "bg-white/10 text-white font-semibold border-l-4 border-purple-500"
                : "text-gray-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* LOGOUT BUTTON */}
      <div className="mt-auto pt-6 border-t border-white/10">
        <button
          onClick={() => onNavigate("login")}
          className="flex w-full items-center gap-4 p-4 rounded-2xl hover:bg-red-500/20 text-red-200 transition cursor-pointer"
        >
          <LogOut size={20} />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}
