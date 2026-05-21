import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout({ children, activePage, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white overflow-hidden relative font-sans">
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]"></div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <Sidebar
        open={open}
        setOpen={setOpen}
        activePage={activePage}
        onNavigate={onNavigate}
      />

      {/* MAIN */}
      <main className="flex-1 p-4 md:p-8 relative z-10 overflow-y-auto w-full">
        {/* HEADER */}
        <Header onOpenSidebar={() => setOpen(true)} />

        {/* CONTENT */}
        {children}
      </main>
    </div>
  );
}
