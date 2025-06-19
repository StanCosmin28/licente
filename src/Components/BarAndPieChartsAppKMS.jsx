// import { LayoutDashboard, Mail } from "lucide-react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  defaults,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import BarAndPieChartsAppEFS from "./BarAndPieChartsAppEFS";
import Licente from "./Licente";

// Register Chart.js components globally for use with react-chartjs-2
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

// Set Chart.js defaults for better aesthetics and responsiveness
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.font.family = "Inter, sans-serif";
defaults.plugins.tooltip.backgroundColor = "rgba(0, 0, 0, 0.7)";
defaults.plugins.tooltip.bodyColor = "#fff";
defaults.plugins.tooltip.titleColor = "#fff";

// Raw survey data from chestionar_kms.json
const surveyData = {
  respondenti: [
    {
      id: 1,
      intrebarea_1: 3,
      intrebarea_5: "Nu",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 4,
      intrebarea_17: 5,
      intrebarea_18: 4,
      intrebarea_19: "Da",
      intrebarea_23: 5,
      intrebarea_24: "Da",
      intrebarea_25: "Exerciții bras, craul spate",
      intrebarea_26: 5,
      intrebarea_29: "Da",
      intrebarea_30: "Da",
    },
    {
      id: 2,
      intrebarea_1: 2,
      intrebarea_5: "Nu",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 3,
      intrebarea_17: 4,
      intrebarea_18: 3,
      intrebarea_19: "Da",
      intrebarea_23: 4,
      intrebarea_24: "Da",
      intrebarea_25: "Exerciții craul spate",
      intrebarea_26: 4,
      intrebarea_29: "Nu",
      intrebarea_30: "Da",
    },
    {
      id: 3,
      intrebarea_1: 4,
      intrebarea_5: "Nu",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 5,
      intrebarea_17: 5,
      intrebarea_18: 5,
      intrebarea_19: "Da",
      intrebarea_23: 5,
      intrebarea_24: "Da",
      intrebarea_25: "Bras, exerciții complementare",
      intrebarea_26: 5,
      intrebarea_29: "Da",
      intrebarea_30: "Da",
    },
    {
      id: 4,
      intrebarea_1: 3,
      intrebarea_5: "Nu",
      intrebarea_10: "Nu",
      intrebarea_14: "Da",
      intrebarea_15: 4,
      intrebarea_17: 4,
      intrebarea_18: 3,
      intrebarea_19: "Nu",
      intrebarea_23: 4,
      intrebarea_24: "Da",
      intrebarea_25: "Craul spate",
      intrebarea_26: 4,
      intrebarea_29: "Nu",
      intrebarea_30: "Da",
    },
    {
      id: 5,
      intrebarea_1: 2,
      intrebarea_5: "Da",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 3,
      intrebarea_17: 4,
      intrebarea_18: 4,
      intrebarea_19: "Da",
      intrebarea_23: 4,
      intrebarea_24: "Nu",
      intrebarea_25: "Exerciții bras",
      intrebarea_26: 3,
      intrebarea_29: "Da",
      intrebarea_30: "Nu",
    },
    {
      id: 6,
      intrebarea_1: 3,
      intrebarea_5: "Nu",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 4,
      intrebarea_17: 5,
      intrebarea_18: 4,
      intrebarea_19: "Da",
      intrebarea_23: 5,
      intrebarea_24: "Da",
      intrebarea_25: "Bras, craul spate",
      intrebarea_26: 5,
      intrebarea_29: "Da",
      intrebarea_30: "Da",
    },
    {
      id: 7,
      intrebarea_1: 3,
      intrebarea_5: "Nu",
      intrebarea_10: "Nu",
      intrebarea_14: "Da",
      intrebarea_15: 3,
      intrebarea_17: 4,
      intrebarea_18: 4,
      intrebarea_19: "Da",
      intrebarea_23: 4,
      intrebarea_24: "Da",
      intrebarea_25: "Craul spate",
      intrebarea_26: 4,
      intrebarea_29: "Nu",
      intrebarea_30: "Da",
    },
    {
      id: 8,
      intrebarea_1: 2,
      intrebarea_5: "Nu",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 5,
      intrebarea_17: 5,
      intrebarea_18: 5,
      intrebarea_19: "Da",
      intrebarea_23: 5,
      intrebarea_24: "Da",
      intrebarea_25: "Bras, exerciții complementare",
      intrebarea_26: 5,
      intrebarea_29: "Da",
      intrebarea_30: "Da",
    },
    {
      id: 9,
      intrebarea_1: 3,
      intrebarea_5: "Da",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 4,
      intrebarea_17: 4,
      intrebarea_18: 4,
      intrebarea_19: "Nu",
      intrebarea_23: 4,
      intrebarea_24: "Nu",
      intrebarea_25: "Exerciții bras",
      intrebarea_26: 3,
      intrebarea_29: "Da",
      intrebarea_30: "Nu",
    },
    {
      id: 10,
      intrebarea_1: 2,
      intrebarea_5: "Nu",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 5,
      intrebarea_17: 5,
      intrebarea_18: 5,
      intrebarea_19: "Da",
      intrebarea_23: 5,
      intrebarea_24: "Da",
      intrebarea_25: "Craul spate, bras",
      intrebarea_26: 5,
      intrebarea_29: "Da",
      intrebarea_30: "Da",
    },
    {
      id: 11,
      intrebarea_1: 3,
      intrebarea_5: "Nu",
      intrebarea_10: "Nu",
      intrebarea_14: "Da",
      intrebarea_15: 3,
      intrebarea_17: 4,
      intrebarea_18: 3,
      intrebarea_19: "Da",
      intrebarea_23: 4,
      intrebarea_24: "Da",
      intrebarea_25: "Bras",
      intrebarea_26: 4,
      intrebarea_29: "Nu",
      intrebarea_30: "Da",
    },
    {
      id: 12,
      intrebarea_1: 4,
      intrebarea_5: "Nu",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 5,
      intrebarea_17: 5,
      intrebarea_18: 5,
      intrebarea_19: "Da",
      intrebarea_23: 5,
      intrebarea_24: "Da",
      intrebarea_25: "Bras, craul spate",
      intrebarea_26: 5,
      intrebarea_29: "Da",
      intrebarea_30: "Da",
    },
    {
      id: 13,
      intrebarea_1: 3,
      intrebarea_5: "Da",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 4,
      intrebarea_17: 4,
      intrebarea_18: 4,
      intrebarea_19: "Nu",
      intrebarea_23: 4,
      intrebarea_24: "Nu",
      intrebarea_25: "Craul spate",
      intrebarea_26: 4,
      intrebarea_29: "Da",
      intrebarea_30: "Nu",
    },
    {
      id: 14,
      intrebarea_1: 2,
      intrebarea_5: "Nu",
      intrebarea_10: "Nu",
      intrebarea_14: "Da",
      intrebarea_15: 3,
      intrebarea_17: 3,
      intrebarea_18: 3,
      intrebarea_19: "Da",
      intrebarea_23: 3,
      intrebarea_24: "Da",
      intrebarea_25: "Exerciții bras",
      intrebarea_26: 3,
      intrebarea_29: "Nu",
      intrebarea_30: "Da",
    },
    {
      id: 15,
      intrebarea_1: 4,
      intrebarea_5: "Nu",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 5,
      intrebarea_17: 5,
      intrebarea_18: 5,
      intrebarea_19: "Da",
      intrebarea_23: 5,
      intrebarea_24: "Da",
      intrebarea_25: "Bras, craul spate",
      intrebarea_26: 5,
      intrebarea_29: "Da",
      intrebarea_30: "Da",
    },
    {
      id: 16,
      intrebarea_1: 3,
      intrebarea_5: "Nu",
      intrebarea_10: "Da",
      intrebarea_14: "Nu",
      intrebarea_15: 4,
      intrebarea_17: 4,
      intrebarea_18: 4,
      intrebarea_19: "Nu",
      intrebarea_23: 4,
      intrebarea_24: "Nu",
      intrebarea_25: "Craul spate",
      intrebarea_26: 4,
      intrebarea_29: "Nu",
      intrebarea_30: "Da",
    },
    {
      id: 17,
      intrebarea_1: 2,
      intrebarea_5: "Da",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 3,
      intrebarea_17: 3,
      intrebarea_18: 3,
      intrebarea_19: "Da",
      intrebarea_23: 3,
      intrebarea_24: "Da",
      intrebarea_25: "Bras",
      intrebarea_26: 3,
      intrebarea_29: "Da",
      intrebarea_30: "Nu",
    },
    {
      id: 18,
      intrebarea_1: 3,
      intrebarea_5: "Nu",
      intrebarea_10: "Nu",
      intrebarea_14: "Da",
      intrebarea_15: 4,
      intrebarea_17: 4,
      intrebarea_18: 4,
      intrebarea_19: "Nu",
      intrebarea_23: 4,
      intrebarea_24: "Da",
      intrebarea_25: "Exerciții complementare",
      intrebarea_26: 4,
      intrebarea_29: "Nu",
      intrebarea_30: "Da",
    },
    {
      id: 19,
      intrebarea_1: 4,
      intrebarea_5: "Nu",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 5,
      intrebarea_17: 5,
      intrebarea_18: 5,
      intrebarea_19: "Da",
      intrebarea_23: 5,
      intrebarea_24: "Da",
      intrebarea_25: "Bras, craul spate",
      intrebarea_26: 5,
      intrebarea_29: "Da",
      intrebarea_30: "Da",
    },
    {
      id: 20,
      intrebarea_1: 3,
      intrebarea_5: "Da",
      intrebarea_10: "Da",
      intrebarea_14: "Nu",
      intrebarea_15: 4,
      intrebarea_17: 4,
      intrebarea_18: 3,
      intrebarea_19: "Nu",
      intrebarea_23: 4,
      intrebarea_24: "Nu",
      intrebarea_25: "Craul spate",
      intrebarea_26: 4,
      intrebarea_29: "Da",
      intrebarea_30: "Nu",
    },
    {
      id: 21,
      intrebarea_1: 2,
      intrebarea_5: "Nu",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 3,
      intrebarea_17: 3,
      intrebarea_18: 3,
      intrebarea_19: "Da",
      intrebarea_23: 3,
      intrebarea_24: "Da",
      intrebarea_25: "Bras",
      intrebarea_26: 3,
      intrebarea_29: "Nu",
      intrebarea_30: "Da",
    },
    {
      id: 22,
      intrebarea_1: 3,
      intrebarea_5: "Nu",
      intrebarea_10: "Nu",
      intrebarea_14: "Da",
      intrebarea_15: 4,
      intrebarea_17: 4,
      intrebarea_18: 4,
      intrebarea_19: "Nu",
      intrebarea_23: 4,
      intrebarea_24: "Da",
      intrebarea_25: "Exerciții complementare",
      intrebarea_26: 4,
      intrebarea_29: "Da",
      intrebarea_30: "Da",
    },
    {
      id: 23,
      intrebarea_1: 4,
      intrebarea_5: "Da",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 5,
      intrebarea_17: 5,
      intrebarea_18: 5,
      intrebarea_19: "Da",
      intrebarea_23: 5,
      intrebarea_24: "Da",
      intrebarea_25: "Bras, craul spate",
      intrebarea_26: 5,
      intrebarea_29: "Da",
      intrebarea_30: "Da",
    },
    {
      id: 24,
      intrebarea_1: 3,
      intrebarea_5: "Nu",
      intrebarea_10: "Da",
      intrebarea_14: "Nu",
      intrebarea_15: 4,
      intrebarea_17: 4,
      intrebarea_18: 4,
      intrebarea_19: "Nu",
      intrebarea_23: 4,
      intrebarea_24: "Nu",
      intrebarea_25: "Craul spate",
      intrebarea_26: 4,
      intrebarea_29: "Nu",
      intrebarea_30: "Da",
    },
    {
      id: 25,
      intrebarea_1: 2,
      intrebarea_5: "Da",
      intrebarea_10: "Nu",
      intrebarea_14: "Da",
      intrebarea_15: 3,
      intrebarea_17: 3,
      intrebarea_18: 3,
      intrebarea_19: "Da",
      intrebarea_23: 3,
      intrebarea_24: "Da",
      intrebarea_25: "Bras",
      intrebarea_26: 3,
      intrebarea_29: "Da",
      intrebarea_30: "Nu",
    },
    {
      id: 26,
      intrebarea_1: 3,
      intrebarea_5: "Nu",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 4,
      intrebarea_17: 4,
      intrebarea_18: 4,
      intrebarea_19: "Da",
      intrebarea_23: 4,
      intrebarea_24: "Da",
      intrebarea_25: "Craul spate, exerciții complementare",
      intrebarea_26: 4,
      intrebarea_29: "Nu",
      intrebarea_30: "Da",
    },
    {
      id: 27,
      intrebarea_1: 4,
      intrebarea_5: "Nu",
      intrebarea_10: "Da",
      intrebarea_14: "Da",
      intrebarea_15: 5,
      intrebarea_17: 5,
      intrebarea_18: 5,
      intrebarea_19: "Da",
      intrebarea_23: 5,
      intrebarea_24: "Da",
      intrebarea_25: "Bras, craul spate",
      intrebarea_26: 5,
      intrebarea_29: "Da",
      intrebarea_30: "Da",
    },
    {
      id: 28,
      intrebarea_1: 3,
      intrebarea_5: "Nu",
      intrebarea_10: "Nu",
      intrebarea_14: "Da",
      intrebarea_15: 4,
      intrebarea_17: 4,
      intrebarea_18: 4,
      intrebarea_19: "Nu",
      intrebarea_23: 4,
      intrebarea_24: "Da",
      intrebarea_25: "Exerciții complementare",
      intrebarea_26: 4,
      intrebarea_29: "Nu",
      intrebarea_30: "Da",
    },
  ],
};

// Data processing functions - same as before, needed to calculate chart data
const processData = () => {
  const data = surveyData.respondenti;
  const total = data.length;

  // Process familiarity levels (intrebarea_1)
  const familiarityCounts = data.reduce((acc, item) => {
    acc[item.intrebarea_1] = (acc[item.intrebarea_1] || 0) + 1;
    return acc;
  }, {});

  // Process yes/no questions
  const processYesNo = (field) => {
    const yes = data.filter((item) => item[field] === "Da").length;
    return { yes: (yes / total) * 100, no: ((total - yes) / total) * 100 };
  };

  // Process numeric ratings (1-5 scale)
  const processRatings = (field) => {
    const counts = {};
    let sum = 0;
    let validCount = 0;

    data.forEach((item) => {
      const rating = parseInt(item[field]);
      if (!isNaN(rating) && rating >= 1 && rating <= 5) {
        counts[rating] = (counts[rating] || 0) + 1;
        sum += rating;
        validCount++;
      }
    });

    return {
      counts: counts,
      average: validCount > 0 ? sum / validCount : 0,
    };
  };

  return {
    totalRespondents: total,
    familiarity: {
      level2: (familiarityCounts[2] / total) * 100 || 0,
      level3: (familiarityCounts[3] / total) * 100 || 0,
      level4: (familiarityCounts[4] / total) * 100 || 0,
      counts: {
        2: familiarityCounts[2] || 0,
        3: familiarityCounts[3] || 0,
        4: familiarityCounts[4] || 0,
      },
    },
    diagnosis: processYesNo("intrebarea_5"),
    postureImprovement: processYesNo("intrebarea_10"),
    swimmingBenefits: processYesNo("intrebarea_14"),
    effectiveness: processRatings("intrebarea_15"),
    satisfaction: processRatings("intrebarea_17"),
    recommendation: processRatings("intrebarea_18"),
    continuation: processYesNo("intrebarea_19"),
    benefitRating: processRatings("intrebarea_23"),
    futureSwimming: processYesNo("intrebarea_24"),
    programRating: processRatings("intrebarea_26"),
    improvement: processYesNo("intrebarea_29"),
    recommend: processYesNo("intrebarea_30"),
  };
};

const chartData = processData();

// Common Tailwind colors for charts
const tailwindColors = {
  blue: [
    "#BFDBFE",
    "#93C5FD",
    "#60A5FA",
    "#3B82F6",
    "#2563EB",
    "#1D4ED8",
    "#1E40AF",
  ],
  green: [
    "#D1FAE5",
    "#A7F3D0",
    "#6EE7B7",
    "#34D399",
    "#10B981",
    "#059669",
    "#047857",
  ],
  red: [
    "#FEE2E2",
    "#FCA5A5",
    "#EF4444",
    "#DC2626",
    "#B91C1C",
    "#991B1B",
    "#7F1D1D",
  ],
  yellow: [
    "#FEF3C7",
    "#FDE68A",
    "#FCD34D",
    "#FBBF24",
    "#F59E0B",
    "#D97706",
    "#B45309",
  ],
  purple: [
    "#EDE9FE",
    "#DDD6FE",
    "#C4B5FD",
    "#A78BFA",
    "#8B5CF6",
    "#7C3AED",
    "#6D28D9",
  ],
  gray: [
    "#F9FAFB",
    "#F3F4F6",
    "#E5E7EB",
    "#D1D5DB",
    "#9CA3AF",
    "#6B7280",
    "#4B5563",
  ],
  orange: [
    "#FFEDD5",
    "#FED7AA",
    "#FDBA74",
    "#FB923C",
    "#F97316",
    "#EA580C",
    "#C2410C",
  ],
  teal: [
    "#CCFBF1",
    "#99F6E4",
    "#5EEAD4",
    "#2DD4BF",
    "#14B8A6",
    "#0D9488",
    "#0F766E",
  ], // Added teal
  indigo: [
    "#E0E7FF",
    "#C7D2FE",
    "#A5B4FC",
    "#818CF8",
    "#6366F1",
    "#4F46E5",
    "#4338CA",
  ], // Added indigo
};

// --- CHART COMPONENTS (Bar & Pie/Doughnut only) ---

// 1. Donut Chart: Diagnostic de deviație posturală (intrebarea_5)
export const DiagnosisDonutChart = () => {
  const data = {
    labels: ["Da", "Nu"],
    datasets: [
      {
        data: [chartData.diagnosis.yes, chartData.diagnosis.no],
        backgroundColor: [tailwindColors.green[4], tailwindColors.red[4]],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };
  const options = {
    cutout: "65%",
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: tailwindColors.gray[7], font: { size: 14 } },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed.toFixed(1)}%`,
        },
      },
    },
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-96 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          Diagnostic de deviație posturală
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Procentul respondenților care au primit un diagnostic formal.
        </p>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

// 2. Bar Chart: Nivelul de familiaritate cu deviațiile posturale (intrebarea_1) - Vertical Bar
export const FamiliarityBarChart = () => {
  const labels = ["Nivel 2 (Scăzut)", "Nivel 3 (Mediu)", "Nivel 4 (Ridicat)"];
  const data = {
    labels,
    datasets: [
      {
        label: "Număr de Respondenți",
        data: [
          chartData.familiarity.counts["2"],
          chartData.familiarity.counts["3"],
          chartData.familiarity.counts["4"],
        ],
        backgroundColor: [
          tailwindColors.red[4],
          tailwindColors.yellow[4],
          tailwindColors.green[4],
        ],
        borderColor: [
          tailwindColors.red[6],
          tailwindColors.yellow[6],
          tailwindColors.green[6],
        ],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: (context) => `Număr: ${context.parsed.y}` },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Nivel de Familiaritate",
          color: tailwindColors.gray[7],
        },
        ticks: { color: tailwindColors.gray[6] },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Număr Respondenți",
          color: tailwindColors.gray[7],
        },
        ticks: { precision: 0, color: tailwindColors.gray[6] },
        grid: { color: tailwindColors.gray[2] },
      },
    },
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-96 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          Nivelul de familiaritate cu deviațiile posturale
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Distribuția respondenților în funcție de nivelul de familiaritate.
        </p>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

// 3. Vertical Bar Chart: Eficacitatea exercițiilor fizice pentru postură (intrebarea_15)
export const EffectivenessBarChart = () => {
  const labels = ["1", "2", "3", "4", "5"];
  const data = {
    labels,
    datasets: [
      {
        label: "Număr de Respondenți",
        data: labels.map((label) => chartData.effectiveness.counts[label] || 0),
        backgroundColor: tailwindColors.blue[4],
        borderColor: tailwindColors.blue[6],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: (context) => `Număr: ${context.parsed.y}` },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Evaluare (1-5)",
          color: tailwindColors.gray[7],
        },
        ticks: { color: tailwindColors.gray[6] },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: "Număr", color: tailwindColors.gray[7] },
        ticks: { precision: 0, color: tailwindColors.gray[6] },
        grid: { color: tailwindColors.gray[2] },
      },
    },
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-96 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          Eficacitatea exercițiilor fizice pentru postură
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Evaluările respondenților privind eficacitatea exercițiilor fizice.
        </p>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

// 4. Stacked Bar Chart: Răspunsuri comparative Da/Nu (intrebarea_10, intrebarea_14, intrebarea_19, intrebarea_24)
export const YesNoStackedBarChart = () => {
  const labels = [
    "Îmbunătățire postură",
    "Beneficii înot",
    "Continuare program",
    "Înot în viitor",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Da",
        data: [
          chartData.postureImprovement.yes,
          chartData.swimmingBenefits.yes,
          chartData.continuation.yes,
          chartData.futureSwimming.yes,
        ],
        backgroundColor: tailwindColors.green[4],
        borderColor: tailwindColors.green[6],
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: "Nu",
        data: [
          chartData.postureImprovement.no,
          chartData.swimmingBenefits.no,
          chartData.continuation.no,
          chartData.futureSwimming.no,
        ],
        backgroundColor: tailwindColors.red[4],
        borderColor: tailwindColors.red[6],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top", labels: { color: tailwindColors.gray[7] } },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%`,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: { color: tailwindColors.gray[6] },
        grid: { display: false },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => value + "%",
          color: tailwindColors.gray[6],
        },
        grid: { color: tailwindColors.gray[2] },
        title: {
          display: true,
          text: "Procentaj",
          color: tailwindColors.gray[7],
        },
      },
    },
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-96 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          Răspunsuri comparative Da/Nu
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Comparația procentului de răspunsuri "Da" și "Nu" pentru diverse
          afirmații.
        </p>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

// 5. Pie Chart: Procentul de respondenți care ar recomanda (intrebarea_30)
export const RecommendPieChart = () => {
  const data = {
    labels: ["Da", "Nu"],
    datasets: [
      {
        data: [chartData.recommend.yes, chartData.recommend.no],
        backgroundColor: [tailwindColors.purple[4], tailwindColors.gray[4]],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };
  const options = {
    cutout: 0, // Makes it a Pie Chart
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: tailwindColors.gray[7], font: { size: 14 } },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed.toFixed(1)}%`,
        },
      },
    },
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-96 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          Procentul de respondenți care ar recomanda
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Distribuția respondenților care ar recomanda programul.
        </p>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

// 6. Vertical Bar Chart: Satisfacție (intrebarea_17)
export const SatisfactionBarChart = () => {
  const labels = ["1", "2", "3", "4", "5"];
  const data = {
    labels,
    datasets: [
      {
        label: "Număr de Respondenți",
        data: labels.map((label) => chartData.satisfaction.counts[label] || 0),
        backgroundColor: tailwindColors.green[4],
        borderColor: tailwindColors.green[6],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: (context) => `Număr: ${context.parsed.y}` },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Evaluare (1-5)",
          color: tailwindColors.gray[7],
        },
        ticks: { color: tailwindColors.gray[6] },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: "Număr", color: tailwindColors.gray[7] },
        ticks: { precision: 0, color: tailwindColors.gray[6] },
        grid: { color: tailwindColors.gray[2] },
      },
    },
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-96 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          Satisfacția generală a respondenților
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Evaluările respondenților privind nivelul de satisfacție.
        </p>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

// 7. Vertical Bar Chart: Recomandare (intrebarea_18)
export const RecommendationBarChart = () => {
  const labels = ["1", "2", "3", "4", "5"];
  const data = {
    labels,
    datasets: [
      {
        label: "Număr de Respondenți",
        data: labels.map(
          (label) => chartData.recommendation.counts[label] || 0
        ),
        backgroundColor: tailwindColors.orange[4],
        borderColor: tailwindColors.orange[6],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: (context) => `Număr: ${context.parsed.y}` },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Evaluare (1-5)",
          color: tailwindColors.gray[7],
        },
        ticks: { color: tailwindColors.gray[6] },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: "Număr", color: tailwindColors.gray[7] },
        ticks: { precision: 0, color: tailwindColors.gray[6] },
        grid: { color: tailwindColors.gray[2] },
      },
    },
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-96 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          Dispoziția de a recomanda programul
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Distribuția evaluărilor privind probabilitatea de a recomanda
          programul.
        </p>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

// 8. Vertical Bar Chart: Evaluarea beneficiilor (intrebarea_23)
export const BenefitRatingBarChart = () => {
  const labels = ["1", "2", "3", "4", "5"];
  const data = {
    labels,
    datasets: [
      {
        label: "Număr de Respondenți",
        data: labels.map((label) => chartData.benefitRating.counts[label] || 0),
        backgroundColor: tailwindColors.teal[4],
        borderColor: tailwindColors.teal[6],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: (context) => `Număr: ${context.parsed.y}` },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Evaluare (1-5)",
          color: tailwindColors.gray[7],
        },
        ticks: { color: tailwindColors.gray[6] },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: "Număr", color: tailwindColors.gray[7] },
        ticks: { precision: 0, color: tailwindColors.gray[6] },
        grid: { color: tailwindColors.gray[2] },
      },
    },
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-96 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          Evaluarea beneficiilor percepute
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Distribuția evaluărilor respondenților privind beneficiile generale
          ale programului.
        </p>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

// 9. Vertical Bar Chart: Evaluarea programului de înot (intrebarea_26)
export const ProgramRatingBarChart = () => {
  const labels = ["1", "2", "3", "4", "5"];
  const data = {
    labels,
    datasets: [
      {
        label: "Număr de Respondenți",
        data: labels.map((label) => chartData.programRating.counts[label] || 0),
        backgroundColor: tailwindColors.indigo[4],
        borderColor: tailwindColors.indigo[6],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: (context) => `Număr: ${context.parsed.y}` },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Evaluare (1-5)",
          color: tailwindColors.gray[7],
        },
        ticks: { color: tailwindColors.gray[6] },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: "Număr", color: tailwindColors.gray[7] },
        ticks: { precision: 0, color: tailwindColors.gray[6] },
        grid: { color: tailwindColors.gray[2] },
      },
    },
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-96 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          Evaluarea generală a programului de înot
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Distribuția evaluărilor respondenților pentru programul de înot.
        </p>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

// 10. Donut Chart: Îmbunătățire (intrebarea_29)
export const ImprovementDonutChart = () => {
  const data = {
    labels: ["Da", "Nu"],
    datasets: [
      {
        data: [chartData.improvement.yes, chartData.improvement.no],
        backgroundColor: [tailwindColors.blue[4], tailwindColors.gray[4]],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };
  const options = {
    cutout: "65%",
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: tailwindColors.gray[7], font: { size: 14 } },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed.toFixed(1)}%`,
        },
      },
    },
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-96 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          Percepția respondenților privind îmbunătățirile
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Procentul respondenților care au observat îmbunătățiri în urma
          programului.
        </p>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

// Component for the KMS Bar and Pie Charts
export default function BarAndPieChartsAppKMS() {
  return (
    <div className="container mx-auto p-4 space-y-8 bg-gray-50 font-inter">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 pt-4">
        Analiza Datelor Chestionarului KMS - Stan Cosmin
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DiagnosisDonutChart />
        <FamiliarityBarChart />
        <EffectivenessBarChart />
        <YesNoStackedBarChart />
        <RecommendPieChart />
        <SatisfactionBarChart />
        <RecommendationBarChart />
        <BenefitRatingBarChart />
        <ProgramRatingBarChart />
        <ImprovementDonutChart />
      </div>
    </div>
  );
}

// Placeholder component for Licente

// Placeholder component for BarAndPieChartsAppEFS
// function BarAndPieChartsAppEFS() {
//   return (
//     <div className="container mx-auto p-8 bg-gray-50 font-inter min-h-[500px] flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">
//           Secțiunea Grafice EFS
//         </h2>
//         <p className="text-lg text-gray-600">
//           Aceasta este o secțiune placeholder pentru graficele Eficacitate,
//           Familiaritate și Satisfacție.
//         </p>
//         <p className="text-md text-gray-500 mt-2">
//           Graficele specifice vor fi implementate aici.
//         </p>
//       </div>
//     </div>
//   );
// }

// Main App component to handle dynamic rendering

// export default function App() {
//   const [activeComponent, setActiveComponent] = useState("kms"); // Default to KMS charts

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case "licente":
//         return <Licente />;
//       case "kms":
//         return <BarAndPieChartsAppKMS />;
//       case "efs":
//         return <BarAndPieChartsAppEFS />;
//       default:
//         return <Licente />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow-md p-4">
//         <nav className="container mx-auto flex justify-center space-x-4">
//           <button
//             onClick={() => setActiveComponent("licente")}
//             className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
//               activeComponent === "licente"
//                 ? "bg-blue-600 text-white shadow-lg"
//                 : "bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
//             }`}
//           >
//             Licențe
//           </button>
//           <button
//             onClick={() => setActiveComponent("kms")}
//             className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
//               activeComponent === "kms"
//                 ? "bg-blue-600 text-white shadow-lg"
//                 : "bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
//             }`}
//           >
//             Grafice KMS
//           </button>
//           <button
//             onClick={() => setActiveComponent("efs")}
//             className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
//               activeComponent === "efs"
//                 ? "bg-blue-600 text-white shadow-lg"
//                 : "bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
//             }`}
//           >
//             Grafice EFS
//           </button>
//         </nav>
//       </header>
//       <main className="py-8">{renderComponent()}</main>
//     </div>
//   );
// }
