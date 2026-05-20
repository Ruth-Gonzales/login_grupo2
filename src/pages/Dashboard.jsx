function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-6">
        Dashboard Académico
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white/10 rounded-3xl p-6 border border-white/10">
          <h2 className="text-2xl font-semibold mb-2">
            Matrícula
          </h2>

          <p className="text-slate-400">
            Gestiona el proceso de inscripción.
          </p>
        </div>

        <div className="bg-white/10 rounded-3xl p-6 border border-white/10">
          <h2 className="text-2xl font-semibold mb-2">
            Cursos
          </h2>

          <p className="text-slate-400">
            Visualiza las materias registradas.
          </p>
        </div>

        <div className="bg-white/10 rounded-3xl p-6 border border-white/10">
          <h2 className="text-2xl font-semibold mb-2">
            Perfil
          </h2>

          <p className="text-slate-400">
            Información personal del estudiante.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;