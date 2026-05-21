import Dashboard from "./pages/Dashboard";
import MatriculaWizard from "./pages/MatriculaWizard";
import Matricula from "./pages/Matricula";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

import { useState } from 'react'

const defaultUser = {
  name: 'Juan Carlos Pérez',
  code: '20231045',
  status: 'Activo',
  email: 'juan.perez@universidad.edu',
  phone: '+51 987 654 321',
  career: 'Ingeniería de Sistemas',
  academicCycle: 'V Ciclo',
  approvedCredits: 72,
  gpa: '10.0',
  academicStatus: 'Regular',
}

function App() {
  const [page, setPage] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    if (!email || !password) {
      setError('Por favor ingresa correo y contraseña.')
      return
    }
    if (!email.includes('@')) {
      setError('Ingresa un correo válido.')
      return
    }
    setError('')
    setPage('dashboard')
  }

  const handleLogout = () => {
    setPage('login')
    setEmail('')
    setPassword('')
    setRemember(false)
    setError('')
  }

  const renderLogin = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50"></div>
      <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-50"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50"></div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] w-full max-w-md z-10 text-white">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 transform rotate-3">
            <svg className="w-8 h-8 text-white transform -rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mb-2">
          Portal Académico
        </h2>
        <p className="text-center text-gray-300 text-sm mb-8">Ingresa tus credenciales para continuar</p>

        {error && <p className="text-red-300 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="email">Correo electrónico</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@universidad.edu"
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="password">Contraseña</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="mr-2 h-4 w-4 rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-500"
              />
              <span className="text-gray-300 group-hover:text-white transition-colors">Recordarme</span>
            </label>
            <button type="button" className="text-purple-400 hover:text-purple-300 transition-colors hover:underline text-xs">
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-purple-500/30 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  )

  const renderDashboard = () => (
    <div className="min-h-screen bg-[#0b1223] text-white px-6 py-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <p className="text-sm text-gray-400">Bienvenido, Administrador</p>
            <h1 className="text-3xl font-extrabold">Panel Administrativo</h1>
            <p className="text-gray-400 mt-2">Gestiona los módulos del sistema</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setPage('studentDetails')}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
            >
              Ver Estudiante
            </button>
            <button
              onClick={handleLogout}
              className="rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 hover:opacity-95"
            >
              Cerrar Sesión
            </button>
          </div>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 mb-8">
          {[
            { title: 'Estudiantes', subtitle: 'Gestionar estudiantes', icon: '👩‍🎓' },
            { title: 'Matrícula', subtitle: 'Procesos de matrícula', icon: '🧾' },
            { title: 'Cursos', subtitle: 'Administrar cursos', icon: '📚' },
            { title: 'Docentes', subtitle: 'Gestionar docentes', icon: '👨‍🏫' },
            { title: 'Reportes', subtitle: 'Reportes y estadísticas', icon: '📊' },
            { title: 'Pagos', subtitle: 'Gestión de pagos', icon: '💳' },
            { title: 'Configuración', subtitle: 'Ajustes del sistema', icon: '⚙️' },
            { title: 'Usuarios', subtitle: 'Administrar usuarios', icon: '👥' },
          ].map((item) => (
            <div key={item.title} className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-400/40 hover:bg-white/10">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-400">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">Resumen rápido</h2>
              <p className="text-gray-400 mt-1">Accede a los módulos principales y consulta información clave.</p>
            </div>
            <div className="text-sm text-gray-400">Sesión activa: {remember ? 'Recordada' : 'No recordada'}</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-slate-950/70 p-5">
              <p className="text-sm text-gray-400">Estudiantes registrados</p>
              <p className="mt-3 text-3xl font-bold">1,260</p>
            </div>
            <div className="rounded-3xl bg-slate-950/70 p-5">
              <p className="text-sm text-gray-400">Matrículas hoy</p>
              <p className="mt-3 text-3xl font-bold">42</p>
            </div>
            <div className="rounded-3xl bg-slate-950/70 p-5">
              <p className="text-sm text-gray-400">Promedio general</p>
              <p className="mt-3 text-3xl font-bold">{defaultUser.gpa}</p>
            </div>
            <div className="rounded-3xl bg-slate-950/70 p-5">
              <p className="text-sm text-gray-400">Ciclo actual</p>
              <p className="mt-3 text-3xl font-bold">{defaultUser.academicCycle}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )

  const renderStudentDetails = () => (
    <div className="min-h-screen bg-[#0b1223] text-white px-6 py-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setPage('dashboard')}
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
          >
            ← Volver al panel
          </button>
          <button
            onClick={handleLogout}
            className="rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 hover:opacity-95"
          >
            Cerrar Sesión
          </button>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div className="w-full lg:w-1/3 rounded-3xl bg-slate-950/70 p-6 text-center">
              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 text-4xl shadow-lg shadow-purple-500/30">JC</div>
              <h2 className="text-2xl font-bold">{defaultUser.name}</h2>
              <p className="mt-2 text-sm text-gray-400">Código: {defaultUser.code}</p>
              <span className="mt-4 inline-flex rounded-full bg-emerald-500/20 px-4 py-1 text-sm text-emerald-200">{defaultUser.status}</span>
            </div>

            <div className="w-full lg:w-2/3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/70 p-6">
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400">Información Personal</h3>
                <div className="mt-5 space-y-3 text-sm text-gray-300">
                  <p><span className="font-semibold text-white">Email:</span> {defaultUser.email}</p>
                  <p><span className="font-semibold text-white">Teléfono:</span> {defaultUser.phone}</p>
                  <p><span className="font-semibold text-white">Carrera:</span> {defaultUser.career}</p>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-6">
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400">Información Académica</h3>
                <div className="mt-5 space-y-3 text-sm text-gray-300">
                  <p><span className="font-semibold text-white">Ciclo Actual:</span> {defaultUser.academicCycle}</p>
                  <p><span className="font-semibold text-white">Créditos Aprobados:</span> {defaultUser.approvedCredits}</p>
                  <p><span className="font-semibold text-white">Estado:</span> {defaultUser.academicStatus}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-slate-950/70 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Resumen de registro</h3>
              <button className="rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20">Editar información</button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#111827]/90 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Información Personal</p>
                <p className="mt-3 text-sm text-gray-300">{defaultUser.name}</p>
                <p className="text-sm text-gray-300">DNI: 12345678</p>
                <p className="text-sm text-gray-300">{defaultUser.email}</p>
              </div>
              <div className="rounded-3xl bg-[#111827]/90 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Información de Contacto</p>
                <p className="mt-3 text-sm text-gray-300">Av. Los Próceres 123, San Miguel</p>
                <p className="text-sm text-gray-300">Lima, Lima</p>
                <p className="text-sm text-gray-300">{defaultUser.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {page === 'login' && renderLogin()}
      {page === 'dashboard' && renderDashboard()}
      {page === 'studentDetails' && renderStudentDetails()}
    </>
  )
}

export default App;