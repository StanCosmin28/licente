import { LayoutDashboard, Mail } from "lucide-react";

export default function Licente() {
  return (
    // Main container for the light theme and centering
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        {/* Card 1: Licenta EFS */}
        <a
          href="/licenta-efs" // Placeholder link
          onClick={(e) => {
            e.preventDefault();
            console.log("Navigating to Licenta EFS page...");
            // In a real app, you would use a router here, e.g., navigate('/licenta-efs');
          }}
          className="flex flex-col items-center justify-center flex-1
                     bg-white
                     p-8 rounded-3xl shadow-xl hover:shadow-2xl
                     transform hover:-translate-y-2 transition-all duration-300 ease-in-out
                     border border-gray-200 hover:border-blue-500
                     group" // Added group for group-hover effects
        >
          <LayoutDashboard
            className="w-16 h-16 text-blue-600 mb-4
                                     group-hover:text-blue-500 transition-colors duration-300"
          />
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight text-center">
            Licenta EFS
          </h2>
          <p className="text-gray-700 text-lg text-center leading-relaxed">
            STUDIU TEHNIC ȘI METODOLOGIC DINTRE INDICELE DE MASĂ CORPORALĂ (IMC)
            ȘI NIVELUL DE INTELIGENȚĂ AL ELEVILOR DIN CICLUL GIMNAZIAL
          </p>
        </a>

        {/* Card 2: Licenta KMS */}
        <a
          href="/licenta-kms" // Placeholder link
          onClick={(e) => {
            e.preventDefault();
            console.log("Navigating to Licenta KMS page...");
            // In a real app, you would use a router here, e.g., navigate('/licenta-kms');
          }}
          className="flex flex-col items-center justify-center flex-1
                     bg-white
                     p-8 rounded-3xl shadow-xl hover:shadow-2xl
                     transform hover:-translate-y-2 transition-all duration-300 ease-in-out
                     border border-gray-200 hover:border-purple-600
                     group" // Added group for group-hover effects
        >
          <Mail
            className="w-16 h-16 text-purple-600 mb-4
                          group-hover:text-purple-500 transition-colors duration-300"
          />
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight text-center">
            Licenta KMS
          </h2>
          <p className="text-gray-700 text-lg text-center leading-relaxed">
            CORECTAREA POSTURILOR DEFICITARE ALE COLOANEI VERTEBRALE PRIN ÎNOTUL
            SPORTIV
          </p>
        </a>
      </div>
    </div>
  );
}
