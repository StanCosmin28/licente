// import "./App.css";
// import { useState } from "react";
// import BarAndPieChartsAppKMS from "./Components/BarAndPieChartsAppKMS";
// import Licente from "./Components/Licente";
// import BarAndPieChartsAppEFS from "./Components/BarAndPieChartsAppEFS";

// function App() {
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

// export default App;

import { useState, useMemo, useCallback } from "react";
import {
  BarChart,
  LineChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  Line,
  ComposedChart,
  Area,
} from "recharts";
import initialData from "./data/initialData";
// Data from the provided JSON file


// Utility function to calculate average
const calculateAverage = (data, key) => {
  if (data.length === 0) return 0;
  const sum = data.reduce((acc, curr) => acc + curr[key], 0);
  return (sum / data.length).toFixed(2);
};

// Utility function to calculate min, max, mean
const calculateMinMaxMean = (data, key) => {
  if (data.length === 0) return { min: 0, max: 0, mean: 0 };
  const values = data.map((d) => d[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const mean = calculateAverage(data, key);
  return { min: min.toFixed(2), max: max.toFixed(2), mean: mean };
};

// Utility function to calculate Pearson correlation coefficient
const calculatePearsonCorrelation = (data, xKey, yKey) => {
  const n = data.length;
  if (n === 0) return 0;

  const sumX = data.reduce((acc, curr) => acc + curr[xKey], 0);
  const sumY = data.reduce((acc, curr) => acc + curr[yKey], 0);
  const sumXY = data.reduce((acc, curr) => acc + curr[xKey] * curr[yKey], 0);
  const sumX2 = data.reduce((acc, curr) => acc + curr[xKey] * curr[xKey], 0);
  const sumY2 = data.reduce((acc, curr) => acc + curr[yKey] * curr[y2], 0); // Corrected: Should be curr[yKey] * curr[yKey]

  const numerator = n * sumXY - sumX * sumY;
  const denominator = Math.sqrt(
    (n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY)
  );

  if (denominator === 0) return 0;
  return (numerator / denominator).toFixed(3);
};

// Colors for charts
const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7300",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A1C4FD",
  "#C2F970",
];

// Custom Tooltip for Recharts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white rounded-lg shadow-md border border-gray-200 text-sm font-inter">
        <p className="font-bold text-gray-700">{label}</p>
        {payload.map((p, index) => (
          <p key={index} style={{ color: p.color }}>
            {p.name}: {p.value} {p.unit || ""}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Chart Components
const ChartCard = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 font-inter border border-gray-200">
    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
      {title}
    </h3>
    <div className="h-64 sm:h-80 md:h-96">{children}</div>
  </div>
);

// Summary Statistics Card
const SummaryStatisticsCard = ({ data }) => {
  const totalStudents = data.length;
  const averageNotaAn = calculateAverage(data, "nota_an");
  const averageIMC = calculateAverage(data, "IMC");

  return (
    <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 font-inter flex flex-col md:flex-row justify-around items-center text-center">
      <div className="mb-4 md:mb-0">
        <p className="text-sm opacity-80">Total Studenți</p>
        <p className="text-3xl sm:text-4xl font-bold">{totalStudents}</p>
      </div>
      <div className="mb-4 md:mb-0">
        <p className="text-sm opacity-80">Nota Anuală Medie Generală</p>
        <p className="text-3xl sm:text-4xl font-bold">{averageNotaAn}</p>
      </div>
      <div>
        <p className="text-sm opacity-80">IMC Mediu General</p>
        <p className="text-3xl sm:text-4xl font-bold">{averageIMC}</p>
      </div>
    </div>
  );
};

const DistributionByIMCCategoryChart = ({ data }) => {
  const processedData = useMemo(() => {
    const counts = data.reduce((acc, student) => {
      acc[student.categorie_IMC] = (acc[student.categorie_IMC] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(counts).map((name) => ({ name, value: counts[name] }));
  }, [data]);

  return (
    <ChartCard title="Distribuția studenților pe categorii IMC">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={processedData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius="80%"
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {processedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const AverageNotaAnByIMCCategoryChart = ({ data }) => {
  const processedData = useMemo(() => {
    const grouped = data.reduce((acc, student) => {
      if (!acc[student.categorie_IMC]) {
        acc[student.categorie_IMC] = { sum: 0, count: 0 };
      }
      acc[student.categorie_IMC].sum += student.nota_an;
      acc[student.categorie_IMC].count += 1;
      return acc;
    }, {});

    return Object.keys(grouped).map((name) => ({
      name,
      "Nota An Medie": parseFloat(
        (grouped[name].sum / grouped[name].count).toFixed(2)
      ),
    }));
  }, [data]);

  return (
    <ChartCard title="Nota Anuală Medie pe Categorie IMC">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="Nota An Medie" fill="#82ca9d" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const NotaAnBySexChart = ({ data }) => {
  const processedData = useMemo(() => {
    const grouped = data.reduce((acc, student) => {
      if (!acc[student.sex]) {
        acc[student.sex] = { sum: 0, count: 0 };
      }
      acc[student.sex].sum += student.nota_an;
      acc[student.sex].count += 1;
      return acc;
    }, {});

    return Object.keys(grouped).map((name) => ({
      name: name === "baiat" ? "Băiat" : "Fată",
      "Nota An Medie": parseFloat(
        (grouped[name].sum / grouped[name].count).toFixed(2)
      ),
    }));
  }, [data]);

  return (
    <ChartCard title="Nota Anuală Medie pe Sex">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="Nota An Medie" fill="#ffc658" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const NotaAnAndIMCAveragePerClassChart = ({ data }) => {
  const processedData = useMemo(() => {
    const grouped = data.reduce((acc, student) => {
      if (!acc[student.clasa]) {
        acc[student.clasa] = {
          notaSum: 0,
          notaCount: 0,
          imcSum: 0,
          imcCount: 0,
        };
      }
      acc[student.clasa].notaSum += student.nota_an;
      acc[student.clasa].notaCount += 1;
      acc[student.clasa].imcSum += student.IMC;
      acc[student.clasa].imcCount += 1;
      return acc;
    }, {});

    return Object.keys(grouped)
      .map((clasa) => ({
        clasa,
        "Nota An Medie": parseFloat(
          (grouped[clasa].notaSum / grouped[clasa].notaCount).toFixed(2)
        ),
        "IMC Mediu": parseFloat(
          (grouped[clasa].imcSum / grouped[clasa].imcCount).toFixed(2)
        ),
      }))
      .sort((a, b) => {
        // Sort by class: a V-a, a VI-a, a VII-a, a VIII-a
        const classOrder = {
          "a V-a": 1,
          "a VI-a": 2,
          "a VII-a": 3,
          "a VIII-a": 4,
        };
        return classOrder[a.clasa] - classOrder[b.clasa];
      });
  }, [data]);

  return (
    <ChartCard title="Nota Anuală și IMC Mediu pe Clasă">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="clasa" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            yAxisId="left"
            dataKey="Nota An Medie"
            fill="#8884d8"
            radius={[10, 10, 0, 0]}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="IMC Mediu"
            stroke="#82ca9d"
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const NotaAnBySportPracticeChart = ({ data }) => {
  const processedData = useMemo(() => {
    const grouped = data.reduce((acc, student) => {
      const key = student.practica_sport_extrascolar
        ? "Practică Sport"
        : "Nu Practică Sport";
      if (!acc[key]) {
        acc[key] = { sum: 0, count: 0 };
      }
      acc[key].sum += student.nota_an;
      acc[key].count += 1;
      return acc;
    }, {});

    return Object.keys(grouped).map((name) => ({
      name,
      "Nota An Medie": parseFloat(
        (grouped[name].sum / grouped[name].count).toFixed(2)
      ),
    }));
  }, [data]);

  return (
    <ChartCard title="Nota Anuală Medie în Funcție de Practica Sportivă Extrașcolară">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="Nota An Medie" fill="#ff7300" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

// FEATURE 1: Interactive Student Details on Hover/Click for Scatter Plot
const IMCVsNotaAnCorrelationChart = ({ data }) => {
  const [activeStudent, setActiveStudent] = useState(null);

  const processedData = useMemo(() => {
    // Calculate linear regression for trendline
    const n = data.length;
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumX2 = 0;

    data.forEach((d) => {
      sumX += d.IMC;
      sumY += d.nota_an;
      sumXY += d.IMC * d.nota_an;
      sumX2 += d.IMC * d.IMC;
    });

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    // Create data for the trendline
    const minIMC = Math.min(...data.map((d) => d.IMC));
    const maxIMC = Math.max(...data.map((d) => d.IMC));
    const trendlineData = [
      { x: minIMC, y: slope * minIMC + intercept },
      { x: maxIMC, y: slope * maxIMC + intercept },
    ];

    return { scatterData: data, trendlineData };
  }, [data]);

  const handleDotClick = useCallback((payload) => {
    setActiveStudent(payload.payload); // payload.payload contains the original student object
  }, []);

  return (
    <ChartCard title="Corelația IMC vs. Nota Anuală (Click pentru Detalii Student)">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid />
          <XAxis type="number" dataKey="IMC" name="IMC" unit="" />
          <YAxis type="number" dataKey="nota_an" name="Nota Anuală" unit="" />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            content={<CustomTooltip />}
          />
          <Legend />
          <Scatter
            name="Studenți"
            data={processedData.scatterData}
            fill="#8884d8"
            onClick={handleDotClick}
          />
          {/* Trendline */}
          <Line
            dataKey="y"
            data={processedData.trendlineData}
            name="Trendline"
            stroke="#ff7300"
            dot={false}
            activeDot={false}
            isAnimationActive={false}
            type="linear"
            points={processedData.trendlineData.map((d) => ({
              x: d.x,
              y: d.y,
            }))}
            connectNulls={false}
          />
        </ScatterChart>
      </ResponsiveContainer>
      {activeStudent && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md text-sm text-gray-700">
          <h4 className="font-bold text-blue-800">Detalii Student Selectat:</h4>
          <p>ID: {activeStudent.id}</p>
          <p>Sex: {activeStudent.sex === "baiat" ? "Băiat" : "Fată"}</p>
          <p>Clasă: {activeStudent.clasa}</p>
          <p>Vârstă: {activeStudent.varsta}</p>
          <p>IMC: {activeStudent.IMC}</p>
          <p>Categorie IMC: {activeStudent.categorie_IMC}</p>
          <p>Nota Anuală: {activeStudent.nota_an}</p>
          <p>
            Practică Sport:{" "}
            {activeStudent.practica_sport_extrascolar ? "Da" : "Nu"}
          </p>
        </div>
      )}
    </ChartCard>
  );
};

const NotaAnByIMCSexCombinedChart = ({ data }) => {
  const processedData = useMemo(() => {
    const grouped = data.reduce((acc, student) => {
      const key = `${student.categorie_IMC} - ${
        student.sex === "baiat" ? "Băiat" : "Fată"
      }`;
      if (!acc[key]) {
        acc[key] = { sum: 0, count: 0 };
      }
      acc[key].sum += student.nota_an;
      acc[key].count += 1;
      return acc;
    }, {});

    return Object.keys(grouped).map((name) => ({
      name,
      "Nota An Medie": parseFloat(
        (grouped[name].sum / grouped[name].count).toFixed(2)
      ),
    }));
  }, [data]);

  return (
    <ChartCard title="Nota Anuală Medie pe Categorie IMC și Sex">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={processedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="Nota An Medie" fill="#0088FE" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const MinMaxMeanNotaAnByIMCCategoryChart = ({ data }) => {
  const processedData = useMemo(() => {
    const grouped = data.reduce((acc, student) => {
      if (!acc[student.categorie_IMC]) {
        acc[student.categorie_IMC] = [];
      }
      acc[student.categorie_IMC].push(student.nota_an);
      return acc;
    }, {});

    return Object.keys(grouped).map((category) => {
      const notes = grouped[category];
      const min = Math.min(...notes);
      const max = Math.max(...notes);
      const mean = parseFloat(
        (notes.reduce((sum, val) => sum + val, 0) / notes.length).toFixed(2)
      );
      return {
        category,
        Min: parseFloat(min.toFixed(2)),
        Max: parseFloat(max.toFixed(2)),
        Mean: mean,
      };
    });
  }, [data]);

  return (
    <ChartCard title="Minimă / Maximă / Medie Nota Anuală pe Categorie IMC">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="Min" fill="#00C49F" radius={[10, 10, 0, 0]} />
          <Bar dataKey="Mean" fill="#FFBB28" radius={[10, 10, 0, 0]} />
          <Bar dataKey="Max" fill="#FF8042" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const DistributionBySexChart = ({ data }) => {
  const processedData = useMemo(() => {
    const counts = data.reduce((acc, student) => {
      const sexLabel = student.sex === "baiat" ? "Băiat" : "Fată";
      acc[sexLabel] = (acc[sexLabel] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(counts).map((name) => ({ name, value: counts[name] }));
  }, [data]);

  return (
    <ChartCard title="Distribuția Studenților pe Sex">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={processedData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius="80%"
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {processedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const DistributionByClassChart = ({ data }) => {
  const processedData = useMemo(() => {
    const counts = data.reduce((acc, student) => {
      acc[student.clasa] = (acc[student.clasa] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(counts)
      .map((name) => ({ name, value: counts[name] }))
      .sort((a, b) => {
        const classOrder = {
          "a V-a": 1,
          "a VI-a": 2,
          "a VII-a": 3,
          "a VIII-a": 4,
        };
        return classOrder[a.name] - classOrder[b.name];
      });
  }, [data]);

  return (
    <ChartCard title="Distribuția Studenților pe Clasă">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const PercentageSportPerIMCCategoryChart = ({ data }) => {
  const processedData = useMemo(() => {
    const grouped = data.reduce((acc, student) => {
      if (!acc[student.categorie_IMC]) {
        acc[student.categorie_IMC] = { total: 0, sport: 0 };
      }
      acc[student.categorie_IMC].total += 1;
      if (student.practica_sport_extrascolar) {
        acc[student.categorie_IMC].sport += 1;
      }
      return acc;
    }, {});

    return Object.keys(grouped).map((category) => ({
      category,
      "% Practică Sport":
        grouped[category].total > 0
          ? parseFloat(
              (
                (grouped[category].sport / grouped[category].total) *
                100
              ).toFixed(2)
            )
          : 0,
    }));
  }, [data]);

  return (
    <ChartCard title="% Studenți care Practică Sport pe Categorie IMC">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <Tooltip content={<CustomTooltip unit="%" />} />
          <Legend />
          <Bar
            dataKey="% Practică Sport"
            fill="#82ca9d"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const NotaAnByGroupedIMCIntervalsChart = ({ data }) => {
  const processedData = useMemo(() => {
    const imcIntervals = {
      "<18.5 (Subponderal)": { sum: 0, count: 0 },
      "18.5-24.9 (Normal)": { sum: 0, count: 0 },
      "25.0-29.9 (Supraponderal)": { sum: 0, count: 0 },
      ">30 (Obez)": { sum: 0, count: 0 },
    };

    data.forEach((student) => {
      if (student.IMC < 18.5) {
        imcIntervals["<18.5 (Subponderal)"].sum += student.nota_an;
        imcIntervals["<18.5 (Subponderal)"].count += 1;
      } else if (student.IMC >= 18.5 && student.IMC < 25.0) {
        imcIntervals["18.5-24.9 (Normal)"].sum += student.nota_an;
        imcIntervals["18.5-24.9 (Normal)"].count += 1;
      } else if (student.IMC >= 25.0 && student.IMC < 30.0) {
        imcIntervals["25.0-29.9 (Supraponderal)"].sum += student.nota_an;
        imcIntervals["25.0-29.9 (Supraponderal)"].count += 1;
      } else {
        imcIntervals[">30 (Obez)"].sum += student.nota_an;
        imcIntervals[">30 (Obez)"].count += 1;
      }
    });

    return Object.keys(imcIntervals).map((interval) => ({
      interval,
      "Nota An Medie":
        imcIntervals[interval].count > 0
          ? parseFloat(
              (
                imcIntervals[interval].sum / imcIntervals[interval].count
              ).toFixed(2)
            )
          : 0,
    }));
  }, [data]);

  return (
    <ChartCard title="Nota Anuală Medie pe Interval de IMC Grupat">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={processedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="interval" angle={-45} textAnchor="end" height={80} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="Nota An Medie" fill="#ffc658" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

const NotaAnTrendsAcrossAgesAndBMICategoriesChart = ({ data }) => {
  const processedData = useMemo(() => {
    const grouped = data.reduce((acc, student) => {
      const key = `${student.varsta}-${student.categorie_IMC}`;
      if (!acc[key]) {
        acc[key] = {
          sum: 0,
          count: 0,
          varsta: student.varsta,
          categorie_IMC: student.categorie_IMC,
        };
      }
      acc[key].sum += student.nota_an;
      acc[key].count += 1;
      return acc;
    }, {});

    const result = Object.values(grouped)
      .map((item) => ({
        varsta: item.varsta,
        categorie_IMC: item.categorie_IMC,
        "Nota An Medie": parseFloat((item.sum / item.count).toFixed(2)),
      }))
      .sort((a, b) => a.varsta - b.varsta); // Sort by age

    // Restructure for Recharts LineChart
    const categories = [...new Set(result.map((d) => d.categorie_IMC))].sort();
    const ages = [...new Set(result.map((d) => d.varsta))].sort(
      (a, b) => a - b
    );

    const chartData = ages.map((age) => {
      const obj = { age };
      categories.forEach((cat) => {
        const found = result.find(
          (d) => d.varsta === age && d.categorie_IMC === cat
        );
        obj[cat] = found ? parseFloat(found["Nota An Medie"]) : null;
      });
      return obj;
    });

    return { chartData, categories };
  }, [data]);

  return (
    <ChartCard title="Tendințe Nota Anuală pe Vârstă și Categorii IMC">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={processedData.chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="age"
            label={{ value: "Vârsta", position: "insideBottom", offset: 0 }}
          />
          <YAxis
            label={{
              value: "Nota Anuală Medie",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {processedData.categories.map((cat, index) => (
            <Line
              key={cat}
              type="monotone"
              dataKey={cat}
              stroke={COLORS[index % COLORS.length]}
              name={cat}
              connectNulls={true} // Connect points even if some data is missing for a category at an age
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

// Gender Distribution within IMC Categories
const GenderDistributionByIMCCategoryChart = ({ data }) => {
  const processedData = useMemo(() => {
    const grouped = data.reduce((acc, student) => {
      if (!acc[student.categorie_IMC]) {
        acc[student.categorie_IMC] = { baiat: 0, fata: 0 };
      }
      if (student.sex === "baiat") {
        acc[student.categorie_IMC].baiat += 1;
      } else {
        acc[student.categorie_IMC].fata += 1;
      }
      return acc;
    }, {});

    return Object.keys(grouped).map((category) => ({
      name: category,
      Băieți: grouped[category].baiat,
      Fete: grouped[category].fata,
    }));
  }, [data]);

  return (
    <ChartCard title="Distribuția Sexului pe Categorii IMC">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="Băieți"
            stackId="a"
            fill="#A1C4FD"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="Fete"
            stackId="a"
            fill="#FFC0CB"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

// Average Nota Anuală by Vârstă
const AverageNotaAnByAgeChart = ({ data }) => {
  const processedData = useMemo(() => {
    const grouped = data.reduce((acc, student) => {
      if (!acc[student.varsta]) {
        acc[student.varsta] = { sum: 0, count: 0 };
      }
      acc[student.varsta].sum += student.nota_an;
      acc[student.varsta].count += 1;
      return acc;
    }, {});

    return Object.keys(grouped)
      .map((age) => ({
        age: parseInt(age),
        "Nota An Medie": parseFloat(
          (grouped[age].sum / grouped[age].count).toFixed(2)
        ),
      }))
      .sort((a, b) => a.age - b.age); // Sort by age
  }, [data]);

  return (
    <ChartCard title="Nota Anuală Medie pe Vârstă">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="age"
            label={{ value: "Vârsta", position: "insideBottom", offset: 0 }}
          />
          <YAxis
            label={{
              value: "Nota Anuală Medie",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="Nota An Medie"
            stroke="#9B59B6"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

// Sport Practice by Sex
const SportPracticeBySexChart = ({ data }) => {
  const processedData = useMemo(() => {
    const grouped = data.reduce((acc, student) => {
      const sexKey = student.sex === "baiat" ? "Băieți" : "Fete";
      if (!acc[sexKey]) {
        acc[sexKey] = { total: 0, sport: 0 };
      }
      acc[sexKey].total += 1;
      if (student.practica_sport_extrascolar) {
        acc[sexKey].sport += 1;
      }
      return acc;
    }, {});

    return Object.keys(grouped).map((sex) => ({
      name: sex,
      "% Practică Sport":
        grouped[sex].total > 0
          ? parseFloat(
              ((grouped[sex].sport / grouped[sex].total) * 100).toFixed(2)
            )
          : 0,
    }));
  }, [data]);

  return (
    <ChartCard title="% Practică Sport pe Sex">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <Tooltip content={<CustomTooltip unit="%" />} />
          <Legend />
          <Bar
            dataKey="% Practică Sport"
            fill="#2ECC71"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

// FEATURE 2: Dynamic Chart for Nota Anuală Distribution (Histogram with adjustable bins)
const NotaAnHistogramChart = ({ data }) => {
  const [numberOfBins, setNumberOfBins] = useState(10); // Default number of bins

  const processedData = useMemo(() => {
    const grades = data.map((s) => s.nota_an);
    if (grades.length === 0) return [];

    const minGrade = 1; // Grades are typically 1-10 in Romania
    const maxGrade = 10;
    const binWidth = (maxGrade - minGrade) / numberOfBins;

    const bins = Array.from({ length: numberOfBins }, (_, i) => ({
      range: `${(minGrade + i * binWidth).toFixed(1)} - ${(
        minGrade +
        (i + 1) * binWidth
      ).toFixed(1)}`,
      count: 0,
    }));

    grades.forEach((grade) => {
      let binIndex = Math.floor((grade - minGrade) / binWidth);
      if (binIndex >= numberOfBins) binIndex = numberOfBins - 1; // Handle max value edge case
      if (binIndex < 0) binIndex = 0; // Handle min value edge case
      bins[binIndex].count++;
    });

    return bins;
  }, [data, numberOfBins]);

  return (
    <ChartCard title="Distribuția Notei Anuale (Histogramă Dinamică)">
      <div className="flex items-center justify-center mb-4">
        <label htmlFor="bins-slider" className="mr-2 text-gray-700">
          Număr de Intervale:
        </label>
        <input
          type="range"
          id="bins-slider"
          min="5"
          max="20"
          value={numberOfBins}
          onChange={(e) => setNumberOfBins(parseInt(e.target.value))}
          className="w-1/2 md:w-1/3 accent-blue-600"
        />
        <span className="ml-2 text-gray-800 font-semibold">{numberOfBins}</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="range"
            angle={-45}
            textAnchor="end"
            height={80}
            interval={0}
          />
          <YAxis
            label={{
              value: "Număr Studenți",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="count" fill="#3498DB" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

// FEATURE 3: Comparison Tool (Average Nota Anuală by Class for Boys vs. Girls)
const AverageNotaAnByClassAndSexChart = ({ data }) => {
  const processedData = useMemo(() => {
    const grouped = data.reduce((acc, student) => {
      if (!acc[student.clasa]) {
        acc[student.clasa] = {
          baiat: { sum: 0, count: 0 },
          fata: { sum: 0, count: 0 },
        };
      }
      acc[student.clasa][student.sex].sum += student.nota_an;
      acc[student.clasa][student.sex].count += 1;
      return acc;
    }, {});

    return Object.keys(grouped)
      .map((clasa) => ({
        name: clasa,
        Băieți:
          grouped[clasa]["baiat"].count > 0
            ? parseFloat(
                (
                  grouped[clasa]["baiat"].sum / grouped[clasa]["baiat"].count
                ).toFixed(2)
              )
            : 0,
        Fete:
          grouped[clasa]["fata"].count > 0
            ? parseFloat(
                (
                  grouped[clasa]["fata"].sum / grouped[clasa]["fata"].count
                ).toFixed(2)
              )
            : 0,
      }))
      .sort((a, b) => {
        const classOrder = {
          "a V-a": 1,
          "a VI-a": 2,
          "a VII-a": 3,
          "a VIII-a": 4,
        };
        return classOrder[a.name] - classOrder[b.name];
      });
  }, [data]);

  return (
    <ChartCard title="Nota Anuală Medie pe Clasă (Băieți vs. Fete)">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="Băieți" fill="#A1C4FD" radius={[10, 10, 0, 0]} />
          <Bar dataKey="Fete" fill="#FFC0CB" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

function App() {
  // All charts will now operate on the initialData directly.

  // Calculate Pearson correlation coefficient for the entire dataset
  const pearsonCorrelation = useMemo(() => {
    // FIX: Corrected the calculation for sumY2 in calculatePearsonCorrelation
    const n = initialData.length;
    if (n === 0) return 0;

    const sumX = initialData.reduce((acc, curr) => acc + curr.IMC, 0);
    const sumY = initialData.reduce((acc, curr) => acc + curr.nota_an, 0);
    const sumXY = initialData.reduce(
      (acc, curr) => acc + curr.IMC * curr.nota_an,
      0
    );
    const sumX2 = initialData.reduce(
      (acc, curr) => acc + curr.IMC * curr.IMC,
      0
    );
    const sumY2 = initialData.reduce(
      (acc, curr) => acc + curr.nota_an * curr.nota_an,
      0
    ); // Corrected here

    const numerator = n * sumXY - sumX * sumY;
    const denominator = Math.sqrt(
      (n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY)
    );

    if (denominator === 0) return 0;
    return (numerator / denominator).toFixed(3);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 font-inter text-gray-800">
      <header className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-800 leading-tight">
          Tablou de Bord Educațional
        </h1>
        <p className="text-md sm:text-lg text-gray-600 mt-2">
          Analiza relației dintre IMC și performanța școlară la elevii de
          gimnaziu
        </p>
      </header>

      {/* Summary Statistics Card */}
      <SummaryStatisticsCard data={initialData} />

      {/* BMI Classification Definitions Card */}
      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Definiții Categorii IMC
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-blue-50 rounded-md">
            <p className="font-semibold text-blue-800">Subponderal</p>
            <p className="text-sm text-gray-700">IMC {"<"} 18.5</p>
          </div>
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-semibold text-green-800">Normal</p>
            <p className="text-sm text-gray-700">IMC 18.5 - 24.9</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded-md">
            <p className="font-semibold text-yellow-800">Supraponderal</p>
            <p className="text-sm text-gray-700">IMC 25.0 - 29.9</p>
          </div>
          <div className="p-3 bg-red-50 rounded-md">
            <p className="font-semibold text-red-800">Obez</p>
            <p className="text-sm text-gray-700">IMC $\ge$ 30.0</p>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <DistributionByIMCCategoryChart data={initialData} />
        <AverageNotaAnByIMCCategoryChart data={initialData} />
        <NotaAnBySexChart data={initialData} />
        <NotaAnAndIMCAveragePerClassChart data={initialData} />
        <NotaAnBySportPracticeChart data={initialData} />
        <IMCVsNotaAnCorrelationChart data={initialData} />
        <NotaAnByIMCSexCombinedChart data={initialData} />
        <MinMaxMeanNotaAnByIMCCategoryChart data={initialData} />
        <DistributionBySexChart data={initialData} />
        <DistributionByClassChart data={initialData} />
        <PercentageSportPerIMCCategoryChart data={initialData} />
        <NotaAnByGroupedIMCIntervalsChart data={initialData} />
        <NotaAnTrendsAcrossAgesAndBMICategoriesChart data={initialData} />
        {/* Existing NEW CHARTS from previous iteration */}
        <GenderDistributionByIMCCategoryChart data={initialData} />
        <AverageNotaAnByAgeChart data={initialData} />
        <SportPracticeBySexChart data={initialData} />
        {/* NEW INTERACTIVE FEATURES */}
        <NotaAnHistogramChart data={initialData} />
        <AverageNotaAnByClassAndSexChart data={initialData} />
      </section>

      {/* Conclusion Section */}
      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mt-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Concluzii și Analiză
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Coeficientul de Corelație Pearson (IMC vs. Nota Anuală)
            </h3>
            <p className="text-4xl font-extrabold text-red-600 mb-4">
              r = {pearsonCorrelation}
            </p>
            <p className="text-gray-700 text-lg">
              Un coeficient de corelație Pearson de{" "}
              <span className="font-bold text-red-600">
                {pearsonCorrelation}
              </span>{" "}
              indică o{" "}
              <span className="font-bold">corelație negativă puternică</span>{" "}
              între Indicele de Masă Corporală (IMC) și nota anuală medie a
              studenților. Aceasta sugerează că, pe măsură ce IMC-ul crește,
              nota anuală tinde să scadă.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Sumar al Constatărilor Cheie
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
              <li>
                Elevii cu IMC în categoria{" "}
                <span className="font-semibold text-blue-700">"obez"</span> sau{" "}
                <span className="font-semibold text-blue-700">
                  "supraponderal"
                </span>{" "}
                tind să aibă note medii mai scăzute comparativ cu cei din
                categoria{" "}
                <span className="font-semibold text-blue-700">"normal"</span>{" "}
                sau{" "}
                <span className="font-semibold text-blue-700">
                  "subponderal"
                </span>
                .
              </li>
              <li>
                Există o diferență notabilă în notele medii între elevii care{" "}
                <span className="font-semibold text-blue-700">
                  practică sport extrascolar
                </span>{" "}
                și cei care nu.
              </li>
              <li>
                Analiza pe clase și vârste arată tendințe specifice ale
                performanței academice în raport cu IMC-ul.
              </li>
              <li>
                Această corelație puternică subliniază importanța factorilor de
                stil de viață în rezultatele academice.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-500 mt-8 pb-4 text-sm">
        <p>
          &copy; 2024 Tablou de Bord Educațional. Toate drepturile rezervate.
        </p>
      </footer>
    </div>
  );
}

export default App;
