import "./App.css";
import { useState } from "react";
import BarAndPieChartsAppKMS from "./Components/BarAndPieChartsAppKMS";
import Licente from "./Components/Licente";
import BarAndPieChartsAppEFS from "./Components/BarAndPieChartsAppEFS";

function App() {
  const [activeComponent, setActiveComponent] = useState("kms"); // Default to KMS charts

  const renderComponent = () => {
    switch (activeComponent) {
      case "licente":
        return <Licente />;
      case "kms":
        return <BarAndPieChartsAppKMS />;
      case "efs":
        return <BarAndPieChartsAppEFS />;
      default:
        return <Licente />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-center space-x-4">
          <button
            onClick={() => setActiveComponent("licente")}
            className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
              activeComponent === "licente"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
            }`}
          >
            Licențe
          </button>
          <button
            onClick={() => setActiveComponent("kms")}
            className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
              activeComponent === "kms"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
            }`}
          >
            Grafice KMS
          </button>
          <button
            onClick={() => setActiveComponent("efs")}
            className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
              activeComponent === "efs"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
            }`}
          >
            Grafice EFS
          </button>
        </nav>
      </header>
      <main className="py-8">{renderComponent()}</main>
    </div>
  );
}

export default App;
