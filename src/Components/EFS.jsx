// import { useState } from "react"; // Import React and useState

// // Placeholder Card components (already defined in previous conversions, but included here for self-containment)
// const Card = ({ children, className }) => (
//   <div className={`bg-white p-6 rounded-lg shadow-md ${className || ""}`}>
//     {children}
//   </div>
// );

// const CardHeader = ({ children, className }) => (
//   <div className={`mb-4 ${className || ""}`}>{children}</div>
// );

// const CardTitle = ({ children, className }) => (
//   <h3 className={`text-xl font-semibold text-gray-800 ${className || ""}`}>
//     {children}
//   </h3>
// );

// const CardDescription = ({ children, className }) => (
//   <p className={`text-sm text-gray-500 ${className || ""}`}>
//     {" "}
//     {/* Replaced text-muted-foreground */}
//     {children}
//   </p>
// );

// const CardContent = ({ children, className }) => (
//   <div className={`text-gray-700 ${className || ""}`}>{children}</div>
// );

// // Replaced Button component with a simple button and Tailwind classes (from Sidebar conversion)
// const Button = ({ children, onClick, className, variant, size }) => {
//   let baseClasses =
//     "px-4 py-2 rounded-md transition-all duration-200 hover:scale-105";
//   let variantClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300"; // default ghost variant

//   if (variant === "outline") {
//     // Specific for outline variant, which this button uses
//     variantClasses = "border border-gray-300 text-gray-700 hover:bg-gray-100";
//   }
//   // Adjust padding for size="icon"
//   if (size === "icon") {
//     baseClasses = "p-2 rounded-md transition-all duration-200 hover:scale-105";
//   }

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseClasses} ${variantClasses} ${className || ""}`}
//     >
//       {children}
//     </button>
//   );
// };

// // Replaced Lucide icons with inline SVGs (from Sidebar conversion)
// const MoonIcon = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={props.className}
//   >
//     <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
//   </svg>
// );

// const SunIcon = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={props.className}
//   >
//     <circle cx="12" cy="12" r="4" />
//     <path d="M12 2v2" />
//     <path d="M12 20v2" />
//     <path d="m4.93 4.93 1.41 1.41" />
//     <path d="m17.66 17.66 1.41 1.41" />
//     <path d="M2 12h2" />
//     <path d="M20 12h2" />
//     <path d="m4.93 19.07 1.41-1.41" />
//     <path d="m17.66 6.34 1.41-1.41" />
//   </svg>
// );

// // Import converted components (assuming they are in the same structure or available)
// // Corrected import paths to use relative paths (./)
// import Sidebar from "./Sidebar";
// import OverviewDashboard from "./OverviewDashboard";
// import ScatterPlotChart from "./ScatterPlotChart";
// import PieChartDistribution from "./PieChartDistribution";
// import LineChartEvolution from "./LineChartEvolution";
// import RadarChart from "./RadarChartComponent";
// import SportsByBMICategory from "./SportsByBMICategory";
// import SportsByIntelligence from "./SportsByIntelligence";
// import RavenScoresByBMI from "./RavenScoresByBMI";
// import WHOComparison from "./WHOComparison";
// import StackedBarChart from "./StackedBarChart";

// // Placeholder components for any that haven't been explicitly converted yet
// const BarChartComparison = ({ data }) => (
//   <div className="p-8 text-center bg-gray-100 rounded-lg">
//     BarChartComparison (Placeholder)
//   </div>
// );
// const GroupedBarChart = ({ data }) => (
//   <div className="p-8 text-center bg-gray-100 rounded-lg">
//     GroupedBarChart (Placeholder)
//   </div>
// );
// const BoxPlotChart = ({ data }) => (
//   <div className="p-8 text-center bg-gray-100 rounded-lg">
//     BoxPlotChart (Placeholder)
//   </div>
// );
// const HeatmapChart = ({ data }) => (
//   <div className="p-8 text-center bg-gray-100 rounded-lg">
//     HeatmapChart (Placeholder)
//   </div>
// );
// const AreaChart = ({ data }) => (
//   <div className="p-8 text-center bg-gray-100 rounded-lg">
//     AreaChart (Placeholder)
//   </div>
// );
// const BubbleChart = ({ data }) => (
//   <div className="p-8 text-center bg-gray-100 rounded-lg">
//     BubbleChart (Placeholder)
//   </div>
// );
// const InsightsPanel = ({ data }) => (
//   <div className="p-8 text-center bg-gray-100 rounded-lg">
//     InsightsPanel (Placeholder)
//   </div>
// );
// const GenderDistribution = ({ data }) => (
//   <div className="p-8 text-center bg-gray-100 rounded-lg">
//     GenderDistribution (Placeholder)
//   </div>
// );
// const BMICategoryDistribution = ({ data }) => (
//   <div className="p-8 text-center bg-gray-100 rounded-lg">
//     BMICategoryDistribution (Placeholder)
//   </div>
// );
// const BMIRavenCorrelation = ({ data }) => (
//   <div className="p-8 text-center bg-gray-100 rounded-lg">
//     BMIRavenCorrelation (Placeholder)
//   </div>
// );
// const IntelligenceByClass = ({ data }) => (
//   <div className="p-8 text-center bg-gray-100 rounded-lg">
//     IntelligenceByClass (Placeholder)
//   </div>
// );
// const BMIByAge = ({ data }) => (
//   <div className="p-8 text-center bg-gray-100 rounded-lg">
//     BMIByAge (Placeholder)
//   </div>
// );
// const IntelligencePercentageByBMI = ({ data }) => (
//   <div className="p-8 text-center bg-gray-100 rounded-lg">
//     IntelligencePercentageByBMI (Placeholder)
//   </div>
// );
// const BMIBySex = ({ data }) => (
//   <div className="p-8 text-center bg-gray-100 rounded-lg">
//     BMIBySex (Placeholder)
//   </div>
// );

// // Directly embedded studentsData here since it was part of page.tsx
// const studentsData = [
//   {
//     id: "AB01",
//     sex: "baiat",
//     clasa: "a V-a",
//     varsta: 11,
//     IMC: 19.8,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 42,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "CD02",
//     sex: "baiat",
//     clasa: "a V-a",
//     varsta: 11,
//     IMC: 22.4,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 41,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "EF03",
//     sex: "baiat",
//     clasa: "a V-a",
//     varsta: 11,
//     IMC: 28.6,
//     categorie_IMC: "supraponderal",
//     rezultat_test_inteligenta: 34,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "GH04",
//     sex: "baiat",
//     clasa: "a V-a",
//     varsta: 11,
//     IMC: 17.2,
//     categorie_IMC: "subponderal",
//     rezultat_test_inteligenta: 37,
//     nivel_inteligenta: "peste medie",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "IJ05",
//     sex: "baiat",
//     clasa: "a VI-a",
//     varsta: 12,
//     IMC: 21.5,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 43,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "KL06",
//     sex: "baiat",
//     clasa: "a VI-a",
//     varsta: 12,
//     IMC: 32.1,
//     categorie_IMC: "obez",
//     rezultat_test_inteligenta: 30,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "MN07",
//     sex: "baiat",
//     clasa: "a VI-a",
//     varsta: 12,
//     IMC: 23.7,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 44,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "OP08",
//     sex: "baiat",
//     clasa: "a VI-a",
//     varsta: 13,
//     IMC: 19.8,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 46,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "QR09",
//     sex: "baiat",
//     clasa: "a VII-a",
//     varsta: 13,
//     IMC: 27.5,
//     categorie_IMC: "supraponderal",
//     rezultat_test_inteligenta: 36,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "ST10",
//     sex: "baiat",
//     clasa: "a VII-a",
//     varsta: 13,
//     IMC: 20.3,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 47,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "UV11",
//     sex: "baiat",
//     clasa: "a VII-a",
//     varsta: 13,
//     IMC: 16.8,
//     categorie_IMC: "subponderal",
//     rezultat_test_inteligenta: 40,
//     nivel_inteligenta: "peste medie",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "WX12",
//     sex: "baiat",
//     clasa: "a VII-a",
//     varsta: 14,
//     IMC: 33.4,
//     categorie_IMC: "obez",
//     rezultat_test_inteligenta: 32,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "YZ13",
//     sex: "baiat",
//     clasa: "a VII-a",
//     varsta: 14,
//     IMC: 22.9,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 48,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "AA14",
//     sex: "baiat",
//     clasa: "a VIII-a",
//     varsta: 14,
//     IMC: 21.7,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 47,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "BB15",
//     sex: "baiat",
//     clasa: "a VIII-a",
//     varsta: 14,
//     IMC: 29.3,
//     categorie_IMC: "supraponderal",
//     rezultat_test_inteligenta: 37,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "CC16",
//     sex: "baiat",
//     clasa: "a VIII-a",
//     varsta: 14,
//     IMC: 18.4,
//     categorie_IMC: "subponderal",
//     rezultat_test_inteligenta: 41,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "DD17",
//     sex: "baiat",
//     clasa: "a VIII-a",
//     varsta: 15,
//     IMC: 21.9,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 48,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "EE18",
//     sex: "baiat",
//     clasa: "a VIII-a",
//     varsta: 15,
//     IMC: 34.2,
//     categorie_IMC: "obez",
//     rezultat_test_inteligenta: 33,
//     nivel_inteligenta: "scazut",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "FF19",
//     sex: "baiat",
//     clasa: "a V-a",
//     varsta: 11,
//     IMC: 22.1,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 40,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "GG20",
//     sex: "baiat",
//     clasa: "a V-a",
//     varsta: 11,
//     IMC: 19.5,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 41,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "HH21",
//     sex: "baiat",
//     clasa: "a VI-a",
//     varsta: 12,
//     IMC: 28.8,
//     categorie_IMC: "supraponderal",
//     rezultat_test_inteligenta: 35,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "II22",
//     sex: "baiat",
//     clasa: "a VI-a",
//     varsta: 13,
//     IMC: 23.5,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 46,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "JJ23",
//     sex: "baiat",
//     clasa: "a VII-a",
//     varsta: 13,
//     IMC: 31.7,
//     categorie_IMC: "obez",
//     rezultat_test_inteligenta: 31,
//     nivel_inteligenta: "scazut",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "KK24",
//     sex: "baiat",
//     clasa: "a VII-a",
//     varsta: 14,
//     IMC: 20.8,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 47,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "LL25",
//     sex: "baiat",
//     clasa: "a VIII-a",
//     varsta: 14,
//     IMC: 17.6,
//     categorie_IMC: "subponderal",
//     rezultat_test_inteligenta: 42,
//     nivel_inteligenta: "peste medie",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "MM26",
//     sex: "baiat",
//     clasa: "a VIII-a",
//     varsta: 15,
//     IMC: 22.6,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 48,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "NN27",
//     sex: "baiat",
//     clasa: "a V-a",
//     varsta: 11,
//     IMC: 30.2,
//     categorie_IMC: "obez",
//     rezultat_test_inteligenta: 29,
//     nivel_inteligenta: "scazut",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "OO28",
//     sex: "baiat",
//     clasa: "a VI-a",
//     varsta: 12,
//     IMC: 21.3,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 43,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "PP29",
//     sex: "baiat",
//     clasa: "a VII-a",
//     varsta: 13,
//     IMC: 22.4,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 46,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "QQ30",
//     sex: "baiat",
//     clasa: "a VIII-a",
//     varsta: 14,
//     IMC: 27.9,
//     categorie_IMC: "supraponderal",
//     rezultat_test_inteligenta: 37,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "RR31",
//     sex: "fata",
//     clasa: "a V-a",
//     varsta: 11,
//     IMC: 20.8,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 41,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "SS32",
//     sex: "fata",
//     clasa: "a V-a",
//     varsta: 11,
//     IMC: 28.7,
//     categorie_IMC: "supraponderal",
//     rezultat_test_inteligenta: 34,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "TT33",
//     sex: "fata",
//     clasa: "a V-a",
//     varsta: 11,
//     IMC: 17.5,
//     categorie_IMC: "subponderal",
//     rezultat_test_inteligenta: 37,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "UU34",
//     sex: "fata",
//     clasa: "a V-a",
//     varsta: 11,
//     IMC: 21.4,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 40,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "VV35",
//     sex: "fata",
//     clasa: "a VI-a",
//     varsta: 12,
//     IMC: 33.2,
//     categorie_IMC: "obez",
//     rezultat_test_inteligenta: 30,
//     nivel_inteligenta: "scazut",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "WW36",
//     sex: "fata",
//     clasa: "a VI-a",
//     varsta: 12,
//     IMC: 22.1,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 43,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "XX37",
//     sex: "fata",
//     clasa: "a VI-a",
//     varsta: 12,
//     IMC: 19.3,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 42,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "YY38",
//     sex: "fata",
//     clasa: "a VI-a",
//     varsta: 13,
//     IMC: 22.8,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 46,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "ZZ39",
//     sex: "fata",
//     clasa: "a VII-a",
//     varsta: 13,
//     IMC: 28.4,
//     categorie_IMC: "supraponderal",
//     rezultat_test_inteligenta: 36,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "AB40",
//     sex: "fata",
//     clasa: "a VII-a",
//     varsta: 13,
//     IMC: 16.9,
//     categorie_IMC: "subponderal",
//     rezultat_test_inteligenta: 40,
//     nivel_inteligenta: "peste medie",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "CD41",
//     sex: "fata",
//     clasa: "a VII-a",
//     varsta: 13,
//     IMC: 20.5,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 46,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "EF42",
//     sex: "fata",
//     clasa: "a VII-a",
//     varsta: 14,
//     IMC: 32.8,
//     categorie_IMC: "obez",
//     rezultat_test_inteligenta: 32,
//     nivel_inteligenta: "scazut",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "GH43",
//     sex: "fata",
//     clasa: "a VII-a",
//     varsta: 14,
//     IMC: 21.7,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 47,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "IJ44",
//     sex: "fata",
//     clasa: "a VIII-a",
//     varsta: 14,
//     IMC: 20.9,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 48,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "KL45",
//     sex: "fata",
//     clasa: "a VIII-a",
//     varsta: 14,
//     IMC: 29.7,
//     categorie_IMC: "supraponderal",
//     rezultat_test_inteligenta: 37,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "MN46",
//     sex: "fata",
//     clasa: "a VIII-a",
//     varsta: 14,
//     IMC: 17.1,
//     categorie_IMC: "subponderal",
//     rezultat_test_inteligenta: 42,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "OP47",
//     sex: "fata",
//     clasa: "a VIII-a",
//     varsta: 15,
//     IMC: 22.3,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 48,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "QR48",
//     sex: "fata",
//     clasa: "a VIII-a",
//     varsta: 15,
//     IMC: 35.1,
//     categorie_IMC: "obez",
//     rezultat_test_inteligenta: 33,
//     nivel_inteligenta: "scazut",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "ST49",
//     sex: "fata",
//     clasa: "a V-a",
//     varsta: 11,
//     IMC: 23.4,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 40,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "UV50",
//     sex: "fata",
//     clasa: "a V-a",
//     varsta: 11,
//     IMC: 20.4,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 41,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "WX51",
//     sex: "fata",
//     clasa: "a VI-a",
//     varsta: 12,
//     IMC: 27.6,
//     categorie_IMC: "supraponderal",
//     rezultat_test_inteligenta: 35,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "YZ52",
//     sex: "fata",
//     clasa: "a VI-a",
//     varsta: 13,
//     IMC: 21.9,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 46,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "AA53",
//     sex: "fata",
//     clasa: "a VII-a",
//     varsta: 13,
//     IMC: 30.4,
//     categorie_IMC: "obez",
//     rezultat_test_inteligenta: 31,
//     nivel_inteligenta: "scazut",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "BB54",
//     sex: "fata",
//     clasa: "a VII-a",
//     varsta: 14,
//     IMC: 19.7,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 47,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "CC55",
//     sex: "fata",
//     clasa: "a VIII-a",
//     varsta: 14,
//     IMC: 18.3,
//     categorie_IMC: "subponderal",
//     rezultat_test_inteligenta: 42,
//     nivel_inteligenta: "peste medie",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "DD56",
//     sex: "fata",
//     clasa: "a VIII-a",
//     varsta: 15,
//     IMC: 21.8,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 48,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "EE57",
//     sex: "fata",
//     clasa: "a V-a",
//     varsta: 11,
//     IMC: 31.6,
//     categorie_IMC: "obez",
//     rezultat_test_inteligenta: 29,
//     nivel_inteligenta: "scazut",
//     practica_sport_extrascolar: false,
//   },
//   {
//     id: "FF58",
//     sex: "fata",
//     clasa: "a VI-a",
//     varsta: 12,
//     IMC: 22.5,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 43,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "GG59",
//     sex: "fata",
//     clasa: "a VII-a",
//     varsta: 13,
//     IMC: 23.1,
//     categorie_IMC: "normal",
//     rezultat_test_inteligenta: 46,
//     nivel_inteligenta: "foarte bun",
//     practica_sport_extrascolar: true,
//   },
//   {
//     id: "HH60",
//     sex: "fata",
//     clasa: "a VIII-a",
//     varsta: 14,
//     IMC: 28.9,
//     categorie_IMC: "supraponderal",
//     rezultat_test_inteligenta: 37,
//     nivel_inteligenta: "mediu",
//     practica_sport_extrascolar: false,
//   },
// ];

// export default function Home() {
//   const [activeChart, setActiveChart] = useState("overview");
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle("dark");
//   };

//   const renderChart = () => {
//     const chartTitles = {
//       overview: {
//         title: "Dashboard Principal",
//         description: "Prezentare generală a datelor și statistici cheie",
//       },
//       scatter: {
//         title: "Corelația IMC-Inteligență",
//         description:
//           "Analiza relației dintre Indicele de Masă Corporală și performanța cognitivă",
//       },
//       bar: {
//         title: "Performanța pe Categorii IMC",
//         description:
//           "Comparația scorurilor de inteligență între diferitele categorii de IMC",
//       },
//       pie: {
//         title: "Distribuția Categoriilor IMC",
//         description:
//           "Proporția elevilor în fiecare categorie de Indice de Masă Corporală",
//       },
//       line: {
//         title: "Evoluția pe Vârste",
//         description:
//           "Tendințele IMC și inteligență în funcție de vârstă și gen",
//       },
//       grouped: {
//         title: "Comparația pe Gen",
//         description:
//           "Diferențele de performanță între băieți și fete pe categorii IMC",
//       },
//       box: {
//         title: "Analiza Statistică Detaliată",
//         description:
//           "Distribuția statistică a scorurilor de inteligență (mediana, quartile, extreme)",
//       },
//       radar: {
//         title: "Profil Multidimensional",
//         description:
//           "Vizualizarea simultană a mai multor variabile pentru fiecare categorie IMC",
//       },
//       heatmap: {
//         title: "Matricea de Corelații",
//         description:
//           "Intensitatea relațiilor dintre toate variabilele studiate",
//       },
//       stacked: {
//         title: "Distribuția Inteligență/IMC",
//         description:
//           "Proporția nivelurilor de inteligență în fiecare categorie IMC",
//       },
//       area: {
//         title: "Progresul pe Clase",
//         description:
//           "Evoluția nivelurilor de inteligență de la clasa a V-a la a VIII-a",
//       },
//       bubble: {
//         title: "Analiza Complexă 3D",
//         description:
//           "Vizualizarea simultană a IMC, inteligență și vârstă cu diferențiere pe gen și sport",
//       },
//       genderDist: {
//         title: "Distribuția pe Gen",
//         description: "Proporția elevilor în funcție de gen",
//       },
//       bmiCategoryDist: {
//         title: "Categorii IMC Detaliate",
//         description: "Distribuția detaliată a elevilor pe categorii de IMC",
//       },
//       bmiRavenCorr: {
//         title: "Corelația IMC-Raven",
//         description:
//           "Analiza corelației dintre IMC și scorurile testului Raven",
//       },
//       sportsByBMI: {
//         title: "Sport pe Categorii IMC",
//         description:
//           "Participarea la sport extrașcolar în funcție de categoria IMC",
//       },
//       intelligenceByClass: {
//         title: "Inteligență pe Clase",
//         description: "Media scorurilor de inteligență pe clase școlare",
//       },
//       bmiByAge: {
//         title: "IMC pe Vârste",
//         description: "Evoluția IMC-ului mediu pe grupe de vârstă",
//       },
//       intelligencePercentByBMI: {
//         title: "% Inteligență/IMC",
//         description:
//           "Procentul de elevi cu niveluri specifice de inteligență în fiecare categorie IMC",
//       },
//       bmiBySex: {
//         title: "IMC pe Gen",
//         description: "Comparația IMC-ului mediu între băieți și fete",
//       },
//       sportsByIntelligence: {
//         title: "Sport/Inteligență",
//         description:
//           "Relația dintre participarea la sport și nivelurile de inteligență",
//       },
//       ravenByBMI: {
//         title: "Raven pe IMC",
//         description:
//           "Analiza scorurilor Raven detaliată pe categorii de IMC (Box Plot și Scatter)",
//       },
//       whoComparison: {
//         title: "Comparație cu Standardele OMS",
//         description:
//           "Comparația datelor studiului cu standardele de IMC ale Organizației Mondiale a Sănătății",
//       },
//     };

//     const currentChart = chartTitles[activeChart] || {
//       title: "Analiză",
//       description: "Vizualizare de date",
//     };

//     const chartComponent = (() => {
//       switch (activeChart) {
//         case "overview":
//           return <OverviewDashboard data={studentsData} />;
//         case "scatter":
//           return <ScatterPlotChart data={studentsData} />;
//         case "bar":
//           return <BarChartComparison data={studentsData} />;
//         case "pie":
//           return <PieChartDistribution data={studentsData} />;
//         case "line":
//           return <LineChartEvolution data={studentsData} />;
//         case "grouped":
//           return <GroupedBarChart data={studentsData} />;
//         case "box":
//           return <BoxPlotChart data={studentsData} />;
//         case "radar":
//           return <RadarChart data={studentsData} />;
//         case "heatmap":
//           return <HeatmapChart data={studentsData} />;
//         case "stacked":
//           return <StackedBarChart data={studentsData} />;
//         case "area":
//           return <AreaChart data={studentsData} />;
//         case "bubble":
//           return <BubbleChart data={studentsData} />;
//         case "genderDist":
//           return <GenderDistribution data={studentsData} />;
//         case "bmiCategoryDist":
//           return <BMICategoryDistribution data={studentsData} />;
//         case "bmiRavenCorr":
//           return <BMIRavenCorrelation data={studentsData} />;
//         case "sportsByBMI":
//           return <SportsByBMICategory data={studentsData} />;
//         case "intelligenceByClass":
//           return <IntelligenceByClass data={studentsData} />;
//         case "bmiByAge":
//           return <BMIByAge data={studentsData} />;
//         case "intelligencePercentByBMI":
//           return <IntelligencePercentageByBMI data={studentsData} />;
//         case "bmiBySex":
//           return <BMIBySex data={studentsData} />;
//         case "sportsByIntelligence":
//           return <SportsByIntelligence data={studentsData} />;
//         case "ravenByBMI":
//           return <RavenScoresByBMI data={studentsData} />;
//         case "whoComparison":
//           return <WHOComparison data={studentsData} />;
//         default:
//           return <OverviewDashboard data={studentsData} />;
//       }
//     })();

//     if (activeChart === "overview") {
//       return chartComponent;
//     }

//     return (
//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle>{currentChart.title}</CardTitle>
//           <CardDescription>{currentChart.description}</CardDescription>
//         </CardHeader>
//         <CardContent>{chartComponent}</CardContent>
//       </Card>
//     );
//   };

//   return (
//     <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
//       <div className="flex bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//         {/* Sidebar component - make sure it uses the new Button, Card, Separator, and Icon placeholders */}
//         <Sidebar activeChart={activeChart} setActiveChart={setActiveChart} />

//         <main className="flex-1 p-6">
//           <div className="flex justify-between items-center mb-6">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
//                 Studiu: Relația dintre IMC și Inteligență
//               </h1>
//               <p className="text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-300">
//                 Analiza datelor pentru 60 de elevi din clasele V-VIII
//               </p>
//             </div>
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={toggleDarkMode}
//               className="transition-all duration-200 hover:scale-105"
//             >
//               {isDarkMode ? (
//                 <SunIcon className="h-4 w-4" />
//               ) : (
//                 <MoonIcon className="h-4 w-4" />
//               )}
//             </Button>
//           </div>

//           <div className="space-y-6">
//             {renderChart()}
//             {activeChart !== "overview" && (
//               <InsightsPanel data={studentsData} />
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
