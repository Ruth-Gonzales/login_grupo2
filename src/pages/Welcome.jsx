import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0f172a] to-[#1e1b4b] flex items-center justify-center px-6 overflow-hidden">

      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      {/* Container */}
      <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>

          <div className="inline-block px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-6">
            Plataforma Académica Inteligente
          </div>

          <h1 className="text-white text-6xl font-black leading-tight mb-6">
            Sistema de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
              Matrícula Digital
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
            Gestiona estudiantes, matrículas y procesos académicos
            desde una plataforma moderna, elegante y segura para
            instituciones educativas.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold text-lg shadow-2xl hover:scale-105 transition duration-300"
          >
           Ingresar al Sistema
        </button>

        </div>

        {/* Right Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl">

          <div className="space-y-6">

            <div className="bg-slate-900/60 rounded-2xl p-6 border border-white/5">
              <h3 className="text-white text-xl font-semibold mb-2">
                Matrícula Segura
              </h3>

              <p className="text-slate-400">
                Protección de datos académicos y acceso seguro.
              </p>
            </div>

            <div className="bg-slate-900/60 rounded-2xl p-6 border border-white/5">
              <h3 className="text-white text-xl font-semibold mb-2">
                Gestión Inteligente
              </h3>

              <p className="text-slate-400">
                Organización eficiente de estudiantes y carreras.
              </p>
            </div>

            <div className="bg-slate-900/60 rounded-2xl p-6 border border-white/5">
              <h3 className="text-white text-xl font-semibold mb-2">
                Experiencia Moderna
              </h3>

              <p className="text-slate-400">
                Diseño premium adaptable para móviles y escritorio.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Welcome;