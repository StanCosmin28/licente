"use client";

import React from "react"; // Import React
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
} from "recharts";

export default function ScatterPlotChart({ data }) {
  const scatterData = data.map((student) => ({
    x: student.IMC,
    y: student.rezultat_test_inteligenta,
    name: student.id,
    sex: student.sex,
    categorie: student.categorie_IMC,
    sport: student.practica_sport_extrascolar,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{`Elev: ${dataPoint.name}`}</p>
          <p className="text-blue-600">{`IMC: ${dataPoint.x} kg/m²`}</p>
          <p className="text-green-600">{`Scor Inteligență: ${dataPoint.y} puncte`}</p>
          <p className="text-gray-600">{`Gen: ${
            dataPoint.sex === "baiat" ? "Băiat" : "Fată"
          }`}</p>
          <p className="text-gray-600">{`Categorie IMC: ${dataPoint.categorie}`}</p>
          <p className="text-gray-600">{`Sport: ${
            dataPoint.sport ? "Da" : "Nu"
          }`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="x"
            name="IMC"
            domain={["dataMin - 2", "dataMax + 2"]}
            label={{
              value: "IMC (kg/m²)",
              position: "insideBottom",
              offset: -10,
            }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Inteligență"
            domain={[25, 50]}
            label={{
              value: "Scor Inteligență (puncte)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />

          {/* Reference lines for normal BMI range */}
          <ReferenceLine
            x={18.5}
            stroke="#fbbf24"
            strokeDasharray="5 5"
            label="IMC Normal Min"
          />
          <ReferenceLine
            x={25}
            stroke="#fbbf24"
            strokeDasharray="5 5"
            label="IMC Normal Max"
          />

          <Scatter
            name="Băieți cu sport"
            data={scatterData.filter((d) => d.sex === "baiat" && d.sport)}
            fill="#3b82f6"
            fillOpacity={0.8}
          />
          <Scatter
            name="Băieți fără sport"
            data={scatterData.filter((d) => d.sex === "baiat" && !d.sport)}
            fill="#3b82f6"
            fillOpacity={0.4}
          />
          <Scatter
            name="Fete cu sport"
            data={scatterData.filter((d) => d.sex === "fata" && d.sport)}
            fill="#ec4899"
            fillOpacity={0.8}
          />
          <Scatter
            name="Fete fără sport"
            data={scatterData.filter((d) => d.sex === "fata" && !d.sport)}
            fill="#ec4899"
            fillOpacity={0.4}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
