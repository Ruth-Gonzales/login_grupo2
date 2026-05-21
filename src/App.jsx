import { useState } from "react";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StudentDetails from "./pages/StudentDetails";
import Matricula from "./pages/Matricula";
import MatriculaWizard from "./pages/MatriculaWizard";
import ComingSoon from "./pages/ComingSoon";
import MainLayout from "./Components/MainLayout";

function App() {
  const [page, setPage] = useState("welcome");

  // Handler for navigation
  const handleNavigation = (targetPage) => {
    setPage(targetPage);
  };

  // Helper for conditional rendering within layout
  const renderSubView = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard onNavigate={handleNavigation} />;
      case "studentDetails":
        return <StudentDetails />;
      case "matricula":
        return <Matricula />;
      case "matriculaWizard":
        return <MatriculaWizard />;
      case "horarios":
        return <ComingSoon title="Horarios Académicos" />;
      case "pagos":
        return <ComingSoon title="Pagos y Pensiones" />;
      case "configuracion":
        return <ComingSoon title="Configuración del Sistema" />;
      default:
        return <Dashboard onNavigate={handleNavigation} />;
    }
  };

  // If outside main app layout (welcome and login screens)
  if (page === "welcome") {
    return <Welcome onNavigate={handleNavigation} />;
  }

  if (page === "login") {
    return <Login onNavigate={handleNavigation} />;
  }

  // Inside layout wrapper (sidebar navigation)
  return (
    <MainLayout activePage={page} onNavigate={handleNavigation}>
      {renderSubView()}
    </MainLayout>
  );
}

export default App;