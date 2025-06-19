"use client";

import React from "react"; // Import React

// Replaced Lucide icons with inline SVGs (or simple text where SVG is too complex/not directly relevant to core functionality)
// For simplicity, providing basic SVG outlines. More complex icons would require specific SVG paths.

const BarChart3Icon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M10 12V20" />
    <path d="M14 8V20" />
    <path d="M5 16V20" />
    <path d="M19 4V20" />
  </svg>
);

const ScatterChartIcon = (
  props // Renamed from Scatter to ScatterChartIcon to avoid conflict with Recharts Scatter
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <circle cx="7.5" cy="7.5" r="3.5" />
    <circle cx="16.5" cy="16.5" r="3.5" />
    <path d="M21 11.5 16.5 7A2.5 2.5 0 0 0 14 5.5l-4.5-4.5" />
    <path d="m3 12.5 4.5 4A2.5 2.5 0 0 1 10 18.5l4.5 4.5" />
  </svg>
);

const PieChartIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);

const TrendingUpIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <polyline points="22 7 13 16 9 12 2 19" />
    <polyline points="18 7 22 7 22 11" />
  </svg>
);

const BarChart2Icon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const ActivityIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const RadarIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
    <path d="m15.5 15.5-3.1 3.1c-1.1-1.1-2.3-2.3-3.1-3.1" />
    <path d="m8.5 8.5 3.1-3.1c1.1 1.1 2.3 2.3 3.1 3.1" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);

const Grid3X3Icon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M3 15h18" />
    <path d="M9 3v18" />
    <path d="M15 3v18" />
  </svg>
);

const LayersIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="m12 18 8-4-8-4-8 4 8 4Z" />
    <path d="m20 10-8-4-8 4" />
    <path d="m20 14-8-4-8 4" />
  </svg>
);

const AreaChartIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M3 3v18h18" />
    <path d="M7 15l4-5 4 2 5-5" />
  </svg>
);

const CircleIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const UsersIconLucide = (
  props // Renamed to avoid conflict with UsersIcon defined in OverviewDashboard
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TargetIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const ZapIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const BookOpenIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const CalendarIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const PercentIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

const UserCheckIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
);

const TrophyIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4.5 22h15a2.5 2.5 0 0 0 0-5H4.5a2.5 2.5 0 0 0 0 5Z" />
    <path d="M12 17V2.5" />
    <path d="M12 22v-3" />
  </svg>
);

const TrendingDownIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <polyline points="22 17 13 8 9 12 2 5" />
    <polyline points="18 17 22 17 22 13" />
  </svg>
);

const GlobeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);

// Replaced Button component with a simple button and Tailwind classes
const Button = ({ children, onClick, className, variant }) => {
  let baseClasses =
    "px-4 py-2 rounded-md transition-all duration-200 hover:scale-105";
  let variantClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300"; // ghost by default

  if (variant === "default") {
    variantClasses = "bg-blue-600 text-white shadow-md hover:bg-blue-700";
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className || ""}`}
    >
      {children}
    </button>
  );
};

// Replaced Card component with a simple div and Tailwind classes (already defined in OverviewDashboard)
// const Card = ({ children, className }) => (
//   <div className={`bg-white p-6 rounded-lg shadow-md ${className || ''}`}>
//     {children}
//   </div>
// );

// Replaced Separator component with a simple div and Tailwind classes
const Separator = ({ className }) => (
  <div className={`my-4 bg-gray-200 h-px w-full ${className || ""}`}></div>
);

const chartSections = [
  {
    title: "Prezentare Generală",
    items: [
      { id: "overview", label: "Dashboard Principal", icon: BarChart3Icon },
    ], // Replaced icon
  },
  {
    title: "Analize Principale",
    items: [
      {
        id: "scatter",
        label: "Corelația IMC-Inteligență",
        icon: ScatterChartIcon,
      }, // Replaced icon
      { id: "bar", label: "Performanța pe Categorii IMC", icon: BarChart2Icon }, // Replaced icon
      { id: "pie", label: "Distribuția Categoriilor IMC", icon: PieChartIcon }, // Replaced icon
      { id: "line", label: "Evoluția pe Vârste", icon: TrendingUpIcon }, // Replaced icon
      { id: "grouped", label: "Comparația pe Gen", icon: BarChart3Icon }, // Replaced icon
      { id: "box", label: "Analiza Statistică Detaliată", icon: ActivityIcon }, // Replaced icon
      { id: "radar", label: "Profil Multidimensional", icon: RadarIcon }, // Replaced icon
      { id: "heatmap", label: "Matricea de Corelații", icon: Grid3X3Icon }, // Replaced icon
      { id: "stacked", label: "Distribuția Inteligență/IMC", icon: LayersIcon }, // Replaced icon
      { id: "area", label: "Progresul pe Clase", icon: AreaChartIcon }, // Replaced icon
      { id: "bubble", label: "Analiza Complexă 3D", icon: CircleIcon }, // Replaced icon
    ],
  },
  {
    title: "Analize Specializate",
    items: [
      { id: "genderDist", label: "Distribuția pe Gen", icon: UsersIconLucide }, // Replaced icon
      {
        id: "bmiCategoryDist",
        label: "Categorii IMC Detaliate",
        icon: TargetIcon,
      }, // Replaced icon
      { id: "bmiRavenCorr", label: "Corelația IMC-Raven", icon: ZapIcon }, // Replaced icon
      {
        id: "sportsByBMI",
        label: "Sport pe Categorii IMC",
        icon: ActivityIcon,
      }, // Replaced icon
      {
        id: "intelligenceByClass",
        label: "Inteligență pe Clase",
        icon: BookOpenIcon,
      }, // Replaced icon
      { id: "bmiByAge", label: "IMC pe Vârste", icon: CalendarIcon }, // Replaced icon
      {
        id: "intelligencePercentByBMI",
        label: "% Inteligență/IMC",
        icon: PercentIcon,
      }, // Replaced icon
      { id: "bmiBySex", label: "IMC pe Gen", icon: UserCheckIcon }, // Replaced icon
      {
        id: "sportsByIntelligence",
        label: "Sport/Inteligență",
        icon: TrophyIcon,
      }, // Replaced icon
      { id: "ravenByBMI", label: "Raven pe IMC", icon: TrendingDownIcon }, // Replaced icon
    ],
  },
  {
    title: "Comparații Internaționale",
    items: [{ id: "whoComparison", label: "Standarde OMS", icon: GlobeIcon }], // Replaced icon
  },
];

export default function Sidebar({ activeChart, setActiveChart }) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 dark:border-gray-700 h-screen overflow-y-auto transition-colors duration-300">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
          Analize BMI & Inteligență
        </h2>

        <div className="space-y-6">
          {chartSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-300">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={activeChart === item.id ? "default" : "ghost"}
                      className="w-full justify-start text-sm transition-all duration-200 hover:scale-105"
                      onClick={() => setActiveChart(item.id)}
                    >
                      <Icon className="h-4 w-4 mr-3" />
                      {item.label}
                    </Button>
                  );
                })}
              </div>
              {section.title !== "Comparații Internaționale" && (
                <Separator className="mt-4" />
              )}
            </div>
          ))}
        </div>

        {/* Card for Research Hypothesis - using simple div with Tailwind as Card component is already defined */}
        <div className="mt-6 p-4 rounded-lg shadow-md bg-white dark:bg-gray-700 transition-colors duration-300">
          <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-2 transition-colors duration-300">
            Ipoteza de Cercetare
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">
            "Elevii cu IMC normal au rezultate mai bune la testele de
            inteligență comparativ cu cei cu IMC extrem
            (subponderal/supraponderal/obez)."
          </p>
        </div>
      </div>
    </aside>
  );
}
