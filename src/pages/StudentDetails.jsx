import { defaultUser } from "../utils/constants";

export default function StudentDetails() {
  return (
    <div className="max-w-5xl mx-auto py-6 font-sans">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          {/* Student Photo/Name Card */}
          <div className="w-full lg:w-1/3 rounded-3xl bg-slate-950/70 p-6 text-center border border-white/10">
            <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 text-4xl font-bold shadow-lg shadow-purple-500/30 text-white">
              JC
            </div>
            <h2 className="text-2xl font-bold text-white">{defaultUser.name}</h2>
            <p className="mt-2 text-sm text-gray-400">Código: {defaultUser.code}</p>
            <span className="mt-4 inline-flex rounded-full bg-emerald-500/20 px-4 py-1 text-sm text-emerald-200 border border-emerald-500/20">
              {defaultUser.status}
            </span>
          </div>

          {/* Info Cards */}
          <div className="w-full lg:w-2/3 grid gap-4 sm:grid-cols-2">
            {/* Personal Info */}
            <div className="rounded-3xl bg-slate-950/70 p-6 border border-white/10">
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold mb-4">
                Información Personal
              </h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p><span className="font-semibold text-white">Email:</span> {defaultUser.email}</p>
                <p><span className="font-semibold text-white">Teléfono:</span> {defaultUser.phone}</p>
                <p><span className="font-semibold text-white">Carrera:</span> {defaultUser.career}</p>
              </div>
            </div>

            {/* Academic Info */}
            <div className="rounded-3xl bg-slate-950/70 p-6 border border-white/10">
              <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold mb-4">
                Información Académica
              </h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p><span className="font-semibold text-white">Ciclo Actual:</span> {defaultUser.academicCycle}</p>
                <p><span className="font-semibold text-white">Créditos Aprobados:</span> {defaultUser.approvedCredits}</p>
                <p><span className="font-semibold text-white">Estado:</span> {defaultUser.academicStatus}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Details */}
        <div className="mt-8 rounded-3xl bg-slate-950/70 p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Resumen de registro</h3>
            <button className="rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20 cursor-pointer">
              Editar información
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#111827]/90 p-4 border border-white/5">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                Información Personal
              </p>
              <p className="mt-3 text-sm text-gray-300">{defaultUser.name}</p>
              <p className="text-sm text-gray-300">DNI: 12345678</p>
              <p className="text-sm text-gray-300">{defaultUser.email}</p>
            </div>

            <div className="rounded-3xl bg-[#111827]/90 p-4 border border-white/5">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                Información de Contacto
              </p>
              <p className="mt-3 text-sm text-gray-300">Av. Los Próceres 123, San Miguel</p>
              <p className="text-sm text-gray-300">Lima, Lima</p>
              <p className="text-sm text-gray-300">{defaultUser.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
