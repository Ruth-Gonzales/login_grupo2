import React, { useState } from 'react';
import {
  User,
  Camera,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  CreditCard,
  Upload,
  CheckCircle,
  AlertCircle,
  Send,
  GraduationCap,
  Building,
  Menu,
  X,
  Users,
  LogOut,
} from 'lucide-react';

const SmartphoneIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    ></path>
  </svg>
);

const MatriculaPage = ({ onLogout }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const cursosDisponibles = [
    {
      id: 'DS301',
      nombre: 'Programación Web',
      creditos: 4,
      horario: 'Lun/Mie 19:00 - 22:00',
    },
    {
      id: 'DS302',
      nombre: 'Base de Datos',
      creditos: 5,
      horario: 'Mar/Jue 19:00 - 22:00',
    },
    {
      id: 'DS303',
      nombre: 'Ingeniería de Software',
      creditos: 5,
      horario: 'Lun/Mie 19:00 - 22:00',
    },
    {
      id: 'DS304',
      nombre: 'Redes y Comunicaciones',
      creditos: 4,
      horario: 'Mar/Jue 19:00 - 22:00',
    },
    {
      id: 'DS305',
      nombre: 'Seguridad Informática',
      creditos: 3,
      horario: 'Vie 19:00 - 23:00',
    },
  ];

  const steps = [
    'Datos Personales',
    'Información Académica',
    'Selección de Cursos',
    'Datos del Apoderado',
    'Pago Virtual',
    'Confirmación Final',
  ];

  const toggleCurso = (curso) => {
    if (selectedCourses.find((c) => c.id === curso.id)) {
      setSelectedCourses(
        selectedCourses.filter((c) => c.id !== curso.id)
      );
    } else {
      setSelectedCourses([...selectedCourses, curso]);
    }
  };

  const totalCreditos = selectedCourses.reduce(
    (sum, c) => sum + c.creditos,
    0
  );

  const inputStyle =
    'w-full mt-1 px-4 py-3 bg-white/10 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500';

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border-b border-white/10 px-6 py-5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <User className="w-5 h-5" />
                Datos Personales
              </h2>
            </div>

            <div className="p-6">
              <div className="flex flex-col items-center mb-8 pb-6 border-b border-white/10">
                <div className="relative">
                  <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/40">
                    <User className="w-10 h-10 text-white" />
                  </div>

                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg">
                    <Camera className="w-4 h-4 text-purple-600" />
                  </button>
                </div>

                <button className="text-sm text-purple-400 mt-3 hover:text-purple-300 transition-all">
                  Cambiar foto
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-gray-300">
                    Nombres
                  </label>
                  <input
                    type="text"
                    defaultValue="Juan Carlos"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    defaultValue="Pérez García"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300">DNI</label>
                  <input
                    type="text"
                    defaultValue="12345678"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300">
                    Fecha nacimiento
                  </label>
                  <input
                    type="date"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300">Sexo</label>
                  <select className={inputStyle}>
                    <option className="bg-[#111827]">Masculino</option>
                    <option className="bg-[#111827]">Femenino</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-300">
                    Correo institucional
                  </label>
                  <input
                    type="email"
                    defaultValue="juan@instituto.edu.pe"
                    className={inputStyle}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm text-gray-300">
                    Dirección actual
                  </label>
                  <textarea
                    rows="3"
                    className={inputStyle}
                    defaultValue="Av. Los Ingenieros 123"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-b border-white/10 px-6 py-5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Información Académica
              </h2>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                ['Código', 'ITC-2023-00125'],
                ['Carrera', 'Desarrollo de Sistemas'],
                ['Ciclo', 'III'],
                ['Turno', 'Noche'],
                ['Modalidad', 'Virtual'],
                ['Periodo', '2025 - I'],
              ].map(([titulo, valor]) => (
                <div
                  key={titulo}
                  className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-lg"
                >
                  <p className="text-sm text-gray-400">{titulo}</p>
                  <p className="text-lg font-semibold text-white mt-1">
                    {valor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-b border-white/10 px-6 py-5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Selección de Cursos
              </h2>
            </div>

            <div className="p-6 overflow-x-auto">
              <table className="w-full text-white">
                <thead className="bg-white/10 text-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left">Código</th>
                    <th className="px-4 py-3 text-left">Curso</th>
                    <th className="px-4 py-3 text-center">
                      Créditos
                    </th>
                    <th className="px-4 py-3 text-left">Horario</th>
                    <th className="px-4 py-3 text-center"></th>
                  </tr>
                </thead>

                <tbody>
                  {cursosDisponibles.map((curso) => (
                    <tr
                      key={curso.id}
                      className="border-b border-white/10 hover:bg-white/5 transition-all"
                    >
                      <td className="px-4 py-4 text-purple-400 font-mono">
                        {curso.id}
                      </td>

                      <td className="px-4 py-4">
                        {curso.nombre}
                      </td>

                      <td className="px-4 py-4 text-center">
                        {curso.creditos}
                      </td>

                      <td className="px-4 py-4 text-gray-400 text-sm">
                        {curso.horario}
                      </td>

                      <td className="px-4 py-4 text-center">
                        <button
                          onClick={() => toggleCurso(curso)}
                          className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all
                          ${
                            selectedCourses.find(
                              (c) => c.id === curso.id
                            )
                              ? 'bg-purple-600 border-purple-600'
                              : 'border-gray-400'
                          }`}
                        >
                          {selectedCourses.find(
                            (c) => c.id === curso.id
                          ) && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">
                    Total de créditos
                  </span>

                  <span className="text-3xl font-bold text-purple-400">
                    {totalCreditos}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-b border-white/10 px-6 py-5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5" />
                Datos del Apoderado
              </h2>
            </div>

            <div className="p-6 space-y-5">
              <input
                type="text"
                placeholder="Nombre completo"
                className={inputStyle}
              />

              <input
                type="text"
                placeholder="DNI"
                className={inputStyle}
              />

              <input
                type="text"
                placeholder="Celular"
                className={inputStyle}
              />

              <input
                type="email"
                placeholder="Correo"
                className={inputStyle}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-b border-white/10 px-6 py-5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Pago Virtual
              </h2>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 text-white shadow-lg shadow-purple-500/30">
                  <Building className="mx-auto mb-2" />
                  Transferencia
                </button>

                <button className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white">
                  <CreditCard className="mx-auto mb-2" />
                  Tarjeta
                </button>

                <button className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white">
                  <SmartphoneIcon />
                  Pago móvil
                </button>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
                <p className="text-gray-400 text-sm">
                  Número de cuenta
                </p>
                <p className="text-2xl font-bold text-purple-400 mt-2">
                  000-123456789
                </p>
              </div>

              <div className="space-y-5">
                <input type="date" className={inputStyle} />

                <div className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center bg-white/5">
                  <Upload className="mx-auto text-purple-400 mb-3 w-10 h-10" />
                  <p className="text-purple-400">
                    Subir comprobante
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-b border-white/10 px-6 py-5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Confirmación Final
              </h2>
            </div>

            <div className="p-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
                <h3 className="font-semibold text-white mb-4">
                  Resumen de matrícula
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Alumno</span>
                    <span className="text-white">
                      Juan Carlos Pérez
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Carrera</span>
                    <span className="text-white">
                      Desarrollo de Sistemas
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Créditos</span>
                    <span className="text-purple-400 font-bold">
                      {totalCreditos}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4 flex gap-3">
                <AlertCircle className="text-yellow-400" />

                <p className="text-sm text-yellow-200">
                  Al confirmar tu matrícula recibirás una constancia en tu correo institucional.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#070B34] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-700/20 blur-3xl rounded-full"></div>

      {/* HEADER MOBILE */}
      <div className="lg:hidden bg-white/5 backdrop-blur-xl border-b border-white/10 fixed top-0 left-0 right-0 z-40 px-4 py-3 flex justify-between items-center">
        <button onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-5 h-5" />
        </button>

        <h1 className="font-bold">Portal Académico</h1>

        <button
          onClick={onLogout}
          className="w-9 h-9 rounded-full bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center hover:scale-105 transition-all"
        >
          <LogOut className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* MENU MOBILE */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/60 z-50">
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#111827] border-r border-white/10 p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-xl">Menú</h2>

              <button onClick={() => setMobileMenuOpen(false)}>
                <X />
              </button>
            </div>

            <div className="space-y-3">
              {[
                'Inicio',
                'Matrícula',
                'Cursos',
                'Pagos',
                'Perfil',
              ].map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-4 py-3 rounded-2xl hover:bg-white/10 transition-all"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Botón Cerrar Sesión en menú móvil */}
            <hr className="my-4 border-white/10" />
            <button
              onClick={onLogout}
              className="w-full text-left px-4 py-3 rounded-2xl hover:bg-red-500/20 transition-all text-red-400 flex items-center gap-3"
            >
              <LogOut className="w-5 h-5" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      )}

      {/* SIDEBAR */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-80 lg:flex-col bg-white/5 backdrop-blur-xl border-r border-white/10 shadow-2xl">
        <div className="px-6 py-8 border-b border-white/10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/40 mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-2xl font-bold text-white">
            Portal Académico
          </h1>

          <p className="text-gray-400 mt-2">
            Sistema Virtual de Matrícula
          </p>
        </div>

        <nav className="flex-1 px-4 py-6">
          {[
            'Inicio',
            'Matrícula',
            'Mis Cursos',
            'Pagos',
            'Perfil',
            'Ayuda',
          ].map((i) => (
            <button
              key={i}
              className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-300 mb-2 flex items-center gap-3
              ${
                i === 'Matrícula'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {i}
            </button>
          ))}
        </nav>

        {/* Botón Cerrar Sesión en sidebar */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={onLogout}
            className="w-full text-left px-4 py-3 rounded-2xl transition-all duration-300 flex items-center gap-3 text-red-400 hover:bg-red-500/20"
          >
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <div className="lg:pl-80 pt-20 lg:pt-0 relative z-10">
        <main className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            {/* PROGRESS */}
            <div className="hidden lg:block mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6">
              <div className="flex justify-between">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex-1 text-center">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto font-semibold transition-all duration-300
                      ${
                        currentStep > idx + 1
                          ? 'bg-green-500 text-white shadow-lg shadow-green-500/40'
                          : currentStep === idx + 1
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/40 scale-110'
                          : 'bg-white/10 text-gray-400'
                      }`}
                    >
                      {currentStep > idx + 1 ? '✓' : idx + 1}
                    </div>

                    <p className="text-xs text-gray-400 mt-3">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE BAR */}
            <div className="lg:hidden mb-5 bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Paso {currentStep} de 6</span>

                <span className="text-purple-400">
                  {steps[currentStep - 1]}
                </span>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  style={{
                    width: `${(currentStep / 6) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* CONTENT */}
            {renderStepContent()}

            {/* BUTTONS */}
            <div className="flex justify-between mt-8">
              <div className="flex gap-3">
                {currentStep > 1 && (
                  <button
                    onClick={() =>
                      setCurrentStep(currentStep - 1)
                    }
                    className="px-6 py-3 border border-white/10 bg-white/5 rounded-2xl flex items-center gap-2 hover:bg-white/10 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Anterior
                  </button>
                )}

                {/* Botón para regresar al Login */}
                <button
                  onClick={onLogout}
                  className="px-6 py-3 border border-red-500/30 bg-red-500/10 rounded-2xl flex items-center gap-2 hover:bg-red-500/20 transition-all text-red-400"
                >
                  <LogOut className="w-4 h-4" />
                  Salir
                </button>
              </div>

              {currentStep < 6 && (
                <button
                  onClick={() =>
                    setCurrentStep(currentStep + 1)
                  }
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-all duration-300 text-white rounded-2xl flex items-center gap-2 shadow-lg shadow-purple-500/30"
                >
                  Siguiente
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              {currentStep === 6 && (
                <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:scale-105 transition-all duration-300 text-white rounded-2xl flex items-center gap-2 shadow-lg shadow-green-500/30">
                  <Send className="w-4 h-4" />
                  Confirmar Matrícula
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MatriculaPage;