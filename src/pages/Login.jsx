import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0f172a] to-[#1e1b4b] flex items-center justify-center px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 shadow-2xl">

        {/* Header */}
        <div className="text-center mb-10">

          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r from-blue-500 to-violet-600 flex items-center justify-center mb-6 shadow-2xl">

            <span className="text-3xl">
              🎓
            </span>

          </div>

          <h1 className="text-4xl font-bold text-white mb-3">
            Acceso Institucional
          </h1>

          <p className="text-slate-400">
            Inicia sesión para continuar
          </p>

        </div>

        {/* Form */}
        <div className="space-y-6">

          {/* Email */}
          <div>

            <label className="text-slate-300 text-sm block mb-2">
              Correo Institucional
            </label>

            <input
              type="email"
              placeholder="admin@instituto.edu"
              className="
                w-full
                bg-white/10
                border border-white/10
                rounded-2xl
                px-5
                py-4
                text-white
                placeholder-slate-500
                focus:outline-none
                focus:ring-2
                focus:ring-violet-500
              "
            />

          </div>

          {/* Password */}
          <div>

            <label className="text-slate-300 text-sm block mb-2">
              Contraseña
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="
                w-full
                bg-white/10
                border border-white/10
                rounded-2xl
                px-5
                py-4
                text-white
                placeholder-slate-500
                focus:outline-none
                focus:ring-2
                focus:ring-violet-500
              "
            />

          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-slate-400">

              <input type="checkbox" />

              Recordarme

            </label>

            <button className="text-violet-400 hover:text-violet-300">
              ¿Olvidaste tu contraseña?
            </button>

          </div>

          {/* Button */}
          <button
            onClick={() => navigate("/dashboard")}
            className="
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-blue-500
              to-violet-600
              text-white
              font-semibold
              text-lg
              shadow-2xl
              hover:scale-[1.02]
              transition-all
            "
          >
            Ingresar
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;