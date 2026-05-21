import { useState } from "react";

export default function Matricula() {
  const cursosDisponibles = [
    { id: 1, nombre: "Programación Web", creditos: 4, costo: 250 },
    { id: 2, nombre: "Base de Datos", creditos: 5, costo: 300 },
    { id: 3, nombre: "Arquitectura de Software", creditos: 4, costo: 280 },
    { id: 4, nombre: "Inteligencia Artificial", creditos: 5, costo: 350 },
    { id: 5, nombre: "Seguridad de la Información", creditos: 4, costo: 270 },
  ];

  const [seleccionados, setSeleccionados] = useState([]);
  const MAX_CREDITOS = 22;

  const totalCreditos = seleccionados.reduce((acc, curso) => acc + curso.creditos, 0);
  const totalCosto = seleccionados.reduce((acc, curso) => acc + curso.costo, 0);

  const agregarCurso = (curso) => {
    const existe = seleccionados.find((item) => item.id === curso.id);
    if (existe) return;

    if (totalCreditos + curso.creditos > MAX_CREDITOS) {
      alert("Máximo de créditos excedido");
      return;
    }
    setSeleccionados([...seleccionados, curso]);
  };

  const eliminarCurso = (id) => {
    setSeleccionados(seleccionados.filter((curso) => curso.id !== id));
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto py-2 font-sans">
      <h1 className="text-4xl font-bold text-white">Matrícula Académica</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CURSOS */}
        <div className="space-y-4">
          {cursosDisponibles.map((curso) => (
            <div key={curso.id} className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-white">{curso.nombre}</h2>
              <p className="text-gray-400 mt-2">Créditos: {curso.creditos}</p>
              <p className="text-gray-400">Costo: S/. {curso.costo}</p>
              <button
                onClick={() => agregarCurso(curso)}
                className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 rounded-2xl text-white font-semibold hover:opacity-95 cursor-pointer transition-all"
              >
                Agregar
              </button>
            </div>
          ))}
        </div>

        {/* RESUMEN */}
        <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur-xl h-fit">
          <h2 className="text-3xl font-bold mb-6 text-white">Resumen</h2>
          <div className="space-y-4">
            {seleccionados.length === 0 ? (
              <p className="text-gray-400 text-center py-6">No has seleccionado ningún curso todavía.</p>
            ) : (
              seleccionados.map((curso) => (
                <div key={curso.id} className="bg-white/5 rounded-2xl p-4 flex justify-between items-center border border-white/5">
                  <div>
                    <h3 className="text-white font-semibold">{curso.nombre}</h3>
                    <p className="text-gray-400 text-sm">{curso.creditos} créditos - S/. {curso.costo}</p>
                  </div>
                  <button
                    onClick={() => eliminarCurso(curso.id)}
                    className="text-red-400 hover:text-red-300 font-semibold cursor-pointer transition-colors"
                  >
                    Quitar
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-white/10 mt-6 pt-6 space-y-3">
            <div className="flex justify-between text-gray-300">
              <span>Créditos Seleccionados</span>
              <span className="text-white font-bold">{totalCreditos}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Costo Total</span>
              <span className="text-white font-bold">S/. {totalCosto}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Límite de créditos</span>
              <span className="text-white font-bold">{totalCreditos} / {MAX_CREDITOS}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}