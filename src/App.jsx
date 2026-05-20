import Dashboard from "./pages/Dashboard";
import MatriculaWizard from "./pages/MatriculaWizard";
import Matricula from "./pages/Matricula";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/matricula" element={<MatriculaWizard />} />
        <Route path="/matricula/legacy" element={<Matricula />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;