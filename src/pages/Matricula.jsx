import MainLayout from "../Layout/MainLayout";
import { useState } from "react";

function Matricula() {

  const cursosDisponibles = [
    {
      id: 1,
      nombre: "Programación Web",
      creditos: 4,
      costo: 250,
    },
    {
      id: 2,
      nombre: "Base de Datos",
      creditos: 5,
      costo: 300,
    },
  ];

  const [seleccionados, setSeleccionados] = useState([]);

  const MAX_CREDITOS = 22;

  const totalCreditos = seleccionados.reduce(
    (acc, curso) => acc + curso.creditos,
    0
  );

  const totalCosto = seleccionados.reduce(
    (acc, curso) => acc + curso.costo,
    0
  );

  const agregarCurso = (curso) => {

    const existe = seleccionados.find(
      (item) => item.id === curso.id
    );

    if (existe) return;

    if (totalCreditos + curso.creditos > MAX_CREDITOS) {
      alert("Máximo de créditos excedido");
      return;
    }

    setSeleccionados([...seleccionados, curso]);
  };

  const eliminarCurso = (id) => {
    setSeleccionados(
      seleccionados.filter((curso) => curso.id !== id)
    );
  };

  return (
    <MainLayout>

      <div className="space-y-6">

        <h1 className="text-4xl font-bold">
          Matrícula Académica
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* CURSOS */}
          <div className="space-y-4">

            {cursosDisponibles.map((curso) => (

              <div
                key={curso.id}
                className="bg-white/10 border border-white/10 rounded-3xl p-6"
              >

                <h2 className="text-2xl font-bold">
                  {curso.nombre}
                </h2>

                <p className="text-gray-400 mt-2">
                  Créditos: {curso.creditos}
                </p>

                <button
                  onClick={() => agregarCurso(curso)}
                  className="
                    mt-4
                    bg-gradient-to-r
                    from-blue-500
                    to-purple-600
                    px-5
                    py-3
                    rounded-2xl
                  "
                >
                  Agregar
                </button>

              </div>

            ))}

          </div>

          {/* RESUMEN */}
          <div className="bg-white/10 border border-white/10 rounded-3xl p-6">

            <h2 className="text-3xl font-bold mb-6">
              Resumen
            </h2>

            <div className="space-y-4">

              {seleccionados.map((curso) => (

                <div
                  key={curso.id}
                  className="bg-white/5 rounded-2xl p-4 flex justify-between"
                >

                  <div>
                    <h3>{curso.nombre}</h3>
                    <p className="text-gray-400 text-sm">
                      {curso.creditos} créditos
                    </p>
                  </div>

                  <button
                    onClick={() => eliminarCurso(curso.id)}
                    className="text-red-400"
                  >
                    Quitar
                  </button>

                </div>

              ))}

            </div>

            <div className="border-t border-white/10 mt-6 pt-6 space-y-3">

              <div className="flex justify-between">
                <span>Créditos</span>
                <span>{totalCreditos}</span>
              </div>

              <div className="flex justify-between">
                <span>Costo</span>
                <span>S/. {totalCosto}</span>
              </div>

              <div className="flex justify-between">
                <span>Límite</span>
                <span>
                  {totalCreditos} / {MAX_CREDITOS}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default Matricula;