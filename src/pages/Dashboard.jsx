import { defaultUser } from "../utils/constants";

export default function Dashboard({ onNavigate }) {
  const modules = [
    { title: 'Estudiantes', subtitle: 'Gestionar estudiantes', icon: '👩‍🎓', id: 'studentDetails' },
    { title: 'Matrícula', subtitle: 'Procesos de matrícula', icon: '🧾', id: 'matricula' },
    { title: 'Wizard Matrícula', subtitle: 'Paso a paso', icon: '🪄', id: 'matriculaWizard' },
    { title: 'Cursos', subtitle: 'Administrar cursos', icon: '📚', id: 'horarios' }, // Redirige a coming soon o similar
    { title: 'Docentes', subtitle: 'Gestionar docentes', icon: '👨‍🏫', id: 'docentes' },
    { title: 'Reportes', subtitle: 'Reportes y estadísticas', icon: '📊', id: 'reportes' },
    { title: 'Pagos', subtitle: 'Gestión de pagos', icon: '💳', id: 'pagos' },
    { title: 'Configuración', subtitle: 'Ajustes del sistema', icon: '⚙️', id: 'configuracion' },
  ];

  return (
    <div className="max-w-6xl mx-auto py-2 font-sans">
      {/* Modules Grid */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 mb-8">
        {modules.map((item) => (
          <button 
            key={item.title} 
            onClick={() => onNavigate(item.id)}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-400/40 hover:bg-white/10 block w-full text-left cursor-pointer"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
              {item.title}
            </h2>
            <p className="text-sm text-gray-400">{item.subtitle}</p>
          </button>
        ))}
      </div>

      {/* Quick Summary Section */}
      <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Resumen rápido</h2>
            <p className="text-gray-400 mt-1 text-sm">Accede a los módulos principales y consulta información clave.</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-slate-950/70 p-5 border border-white/5">
            <p className="text-sm text-gray-400">Estudiantes registrados</p>
            <p className="mt-3 text-3xl font-bold text-white">1,260</p>
          </div>

          <div className="rounded-3xl bg-slate-950/70 p-5 border border-white/5">
            <p className="text-sm text-gray-400">Matrículas hoy</p>
            <p className="mt-3 text-3xl font-bold text-white">42</p>
          </div>

          <div className="rounded-3xl bg-slate-950/70 p-5 border border-white/5">
            <p className="text-sm text-gray-400">Promedio general</p>
            <p className="mt-3 text-3xl font-bold text-white">{defaultUser.gpa}</p>
          </div>

          <div className="rounded-3xl bg-slate-950/70 p-5 border border-white/5">
            <p className="text-sm text-gray-400">Ciclo actual</p>
            <p className="mt-3 text-3xl font-bold text-white">{defaultUser.academicCycle}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
