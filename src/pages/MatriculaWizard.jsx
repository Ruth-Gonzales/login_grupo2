import { useState } from "react";
import {
  User,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Edit3,
  ClipboardList,
} from "lucide-react";
import MainLayout from "../Layout/MainLayout";

function MatriculaWizard() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    tipoDocumento: "DNI",
    numeroDocumento: "",
    direccion: "",
    departamento: "",
    provincia: "",
    distrito: "",
    telefono: "",
    correo: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const goNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const editStep = (newStep) => {
    setStep(newStep);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const stepClasses = (index) =>
    `flex items-center justify-center w-10 h-10 rounded-full border transition ${
      step === index
        ? "bg-violet-500 text-white border-violet-500"
        : "bg-white/10 border-white/10 text-slate-300"
    }`;

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto py-6">
        <div className="bg-white/10 border border-white/10 rounded-[32px] p-8 shadow-2xl backdrop-blur-xl">
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-violet-300 font-semibold">
                  Matrícula - Paso {step} de 3
                </p>
                <h1 className="text-3xl font-bold text-white mt-3">
                  {step === 1 && "Información Personal"}
                  {step === 2 && "Información de Contacto"}
                  {step === 3 && "Revisa tu Información"}
                </h1>
                <p className="text-slate-400 mt-2 max-w-2xl">
                  {step === 1 && "Completa tus datos personales para continuar con tu proceso de matrícula."}
                  {step === 2 && "Completa tu información de contacto para poder comunicarnos contigo."}
                  {step === 3 && "Verifica que todos tus datos sean correctos antes de continuar."}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className={stepClasses(1)}>1</div>
                  <div className="w-16 h-1 rounded-full bg-white/10"></div>
                  <div className={stepClasses(2)}>2</div>
                  <div className="w-16 h-1 rounded-full bg-white/10"></div>
                  <div className={stepClasses(3)}>3</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950/80 rounded-3xl border border-white/10 p-8">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-violet-500/10 text-violet-400 flex items-center justify-center">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-3">Registro completado</h2>
                  <p className="text-slate-400 max-w-xl mx-auto">
                    Tu información ha sido confirmada correctamente. Pronto recibirás un correo con los detalles de tu proceso de matrícula.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-6">
                    {step === 1 && (
                      <div className="space-y-6">
                        <div className="grid gap-6">
                          <div>
                            <label className="text-sm text-slate-300 mb-2 block">Nombres</label>
                            <div className="relative">
                              <User className="absolute left-4 top-4 text-violet-400" size={18} />
                              <input
                                name="nombres"
                                value={form.nombres}
                                onChange={handleChange}
                                placeholder="Ingresa tu(s) nombre(s)"
                                className="w-full rounded-3xl bg-white/10 border border-white/10 px-14 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm text-slate-300 mb-2 block">Apellidos</label>
                            <div className="relative">
                              <User className="absolute left-4 top-4 text-violet-400" size={18} />
                              <input
                                name="apellidos"
                                value={form.apellidos}
                                onChange={handleChange}
                                placeholder="Ingresa tus apellidos"
                                className="w-full rounded-3xl bg-white/10 border border-white/10 px-14 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <label className="text-sm text-slate-300 mb-2 block">Tipo de Documento</label>
                            <select
                              name="tipoDocumento"
                              value={form.tipoDocumento}
                              onChange={handleChange}
                              className="w-full rounded-3xl bg-white/10 border border-white/10 px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                            >
                              <option>DNI</option>
                              <option>Carné de Extranjería</option>
                              <option>Pasaporte</option>
                              <option>Tarjeta de Identidad</option>
                            </select>
                          </div>

                          <div>
                            <label className="text-sm text-slate-300 mb-2 block">Número de Documento</label>
                            <input
                              name="numeroDocumento"
                              value={form.numeroDocumento}
                              onChange={handleChange}
                              placeholder="12345678"
                              className="w-full rounded-3xl bg-white/10 border border-white/10 px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <div>
                          <label className="text-sm text-slate-300 mb-2 block">Dirección</label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-4 text-violet-400" size={18} />
                            <input
                              name="direccion"
                              value={form.direccion}
                              onChange={handleChange}
                              placeholder="Ingresa tu dirección completa"
                              className="w-full rounded-3xl bg-white/10 border border-white/10 px-14 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <label className="text-sm text-slate-300 mb-2 block">Departamento</label>
                            <select
                              name="departamento"
                              value={form.departamento}
                              onChange={handleChange}
                              className="w-full rounded-3xl bg-white/10 border border-white/10 px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                            >
                              <option value="">Selecciona</option>
                              <option value="Lima">Lima</option>
                              <option value="Cusco">Cusco</option>
                              <option value="Arequipa">Arequipa</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm text-slate-300 mb-2 block">Provincia</label>
                            <select
                              name="provincia"
                              value={form.provincia}
                              onChange={handleChange}
                              className="w-full rounded-3xl bg-white/10 border border-white/10 px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                            >
                              <option value="">Selecciona</option>
                              <option value="Lima">Lima</option>
                              <option value="Cusco">Cusco</option>
                              <option value="Arequipa">Arequipa</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="text-sm text-slate-300 mb-2 block">Distrito</label>
                          <select
                            name="distrito"
                            value={form.distrito}
                            onChange={handleChange}
                            className="w-full rounded-3xl bg-white/10 border border-white/10 px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                          >
                            <option value="">Selecciona tu distrito</option>
                            <option value="San Miguel">San Miguel</option>
                            <option value="Miraflores">Miraflores</option>
                            <option value="Surco">Surco</option>
                          </select>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <label className="text-sm text-slate-300 mb-2 block">Teléfono</label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-4 text-violet-400" size={18} />
                              <input
                                name="telefono"
                                value={form.telefono}
                                onChange={handleChange}
                                placeholder="Ej: 987 654 321"
                                className="w-full rounded-3xl bg-white/10 border border-white/10 px-14 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm text-slate-300 mb-2 block">Correo Electrónico</label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-4 text-violet-400" size={18} />
                              <input
                                name="correo"
                                value={form.correo}
                                onChange={handleChange}
                                placeholder="ejemplo@correo.com"
                                className="w-full rounded-3xl bg-white/10 border border-white/10 px-14 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                                type="email"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-8">
                        <div className="bg-white/5 rounded-3xl border border-white/10 p-6">
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3 text-violet-300">
                              <ClipboardList size={20} />
                              <div>
                                <p className="text-sm uppercase tracking-[0.2em]">Información Personal</p>
                                <h2 className="text-xl font-semibold text-white">Resumen de Información</h2>
                              </div>
                            </div>
                            <button
                              onClick={() => editStep(1)}
                              className="text-violet-300 hover:text-violet-100 flex items-center gap-2"
                            >
                              <Edit3 size={16} /> Editar
                            </button>
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <div>
                              <p className="text-slate-400 text-sm">Nombres</p>
                              <p className="text-white mt-2">{form.nombres || "-"}</p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-sm">Apellidos</p>
                              <p className="text-white mt-2">{form.apellidos || "-"}</p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-sm">Tipo de Documento</p>
                              <p className="text-white mt-2">{form.tipoDocumento || "-"}</p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-sm">Número de Documento</p>
                              <p className="text-white mt-2">{form.numeroDocumento || "-"}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/5 rounded-3xl border border-white/10 p-6">
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3 text-violet-300">
                              <MapPin size={20} />
                              <div>
                                <p className="text-sm uppercase tracking-[0.2em]">Información de Contacto</p>
                                <h2 className="text-xl font-semibold text-white">Detalles de ubicación</h2>
                              </div>
                            </div>
                            <button
                              onClick={() => editStep(2)}
                              className="text-violet-300 hover:text-violet-100 flex items-center gap-2"
                            >
                              <Edit3 size={16} /> Editar
                            </button>
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <div>
                              <p className="text-slate-400 text-sm">Dirección</p>
                              <p className="text-white mt-2">{form.direccion || "-"}</p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-sm">Departamento</p>
                              <p className="text-white mt-2">{form.departamento || "-"}</p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-sm">Provincia</p>
                              <p className="text-white mt-2">{form.provincia || "-"}</p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-sm">Distrito</p>
                              <p className="text-white mt-2">{form.distrito || "-"}</p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-sm">Teléfono</p>
                              <p className="text-white mt-2">{form.telefono || "-"}</p>
                            </div>
                            <div>
                              <p className="text-slate-400 text-sm">Correo Electrónico</p>
                              <p className="text-white mt-2">{form.correo || "-"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {!submitted && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                      <button
                        onClick={goBack}
                        disabled={step === 1}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <ArrowLeft size={18} /> Atrás
                      </button>

                      <button
                        onClick={step === 3 ? handleSubmit : goNext}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-blue-500 to-violet-600 px-8 py-4 text-white font-semibold shadow-2xl hover:scale-[1.02] transition"
                      >
                        {step === 3 ? "Confirmar y Continuar" : "Continuar"}
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default MatriculaWizard;
