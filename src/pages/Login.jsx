import { useState } from "react";

export default function Login({ onNavigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Por favor ingresa correo y contraseña.");
      return;
    }
    if (!email.includes("@")) {
      setError("Ingresa un correo válido.");
      return;
    }
    setError("");
    onNavigate("dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0f172a] to-[#1e1b4b] flex items-center justify-center px-6 overflow-hidden relative font-sans">
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r from-blue-500 to-violet-600 flex items-center justify-center mb-6 shadow-2xl">
            <span className="text-3xl">🎓</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Acceso Institucional</h1>
          <p className="text-slate-400">Inicia sesión para continuar</p>
        </div>

        {/* Error */}
        {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}

        {/* Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="text-slate-300 text-sm block mb-2" htmlFor="email">
              Correo Institucional
            </label>
            <input
              id="email"
              type="email"
              placeholder="admin@instituto.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 font-sans"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-slate-300 text-sm block mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 font-sans"
            />
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="rounded border-white/10 bg-white/10 text-violet-500 focus:ring-violet-500"
              />
              Recordarme
            </label>
            <button type="button" className="text-violet-400 hover:text-violet-300 text-xs cursor-pointer">
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold text-lg shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
