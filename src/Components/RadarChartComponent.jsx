"use client";

import React, { useMemo } from "react"; // Import React and useMemo explicitly
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

export default function RadarChartComponent({ data }) {
  const radarData = useMemo(() => {
    // Wrap radarData calculation in useMemo for performance
    return ["subponderal", "normal", "supraponderal", "obez"]
      .map((category) => {
        const categoryStudents = data.filter(
          (s) => s.categorie_IMC === category
        );

        if (categoryStudents.length === 0) return null;

        const avgScore =
          categoryStudents.reduce(
            (sum, s) => sum + s.rezultat_test_inteligenta,
            0
          ) / categoryStudents.length;
        const avgIMC =
          categoryStudents.reduce((sum, s) => sum + s.IMC, 0) /
          categoryStudents.length;
        const avgAge =
          categoryStudents.reduce((sum, s) => sum + s.varsta, 0) /
          categoryStudents.length;
        const sportsPercentage =
          (categoryStudents.filter((s) => s.practica_sport_extrascolar).length /
            categoryStudents.length) *
          100;

        return {
          category: category.charAt(0).toUpperCase() + category.slice(1),
          "Scor Inteligență": Number(((avgScore / 50) * 100).toFixed(1)), // Normalized to 100
          "IMC Normalizat": Number(
            (((avgIMC - 15) / (35 - 15)) * 100).toFixed(1)
          ), // Normalized IMC for 15-35 range
          "Vârsta Normalizată": Number(
            (((avgAge - 11) / (15 - 11)) * 100).toFixed(1)
          ), // Normalized Age for 11-15 range
          "Sport (%)": Number(sportsPercentage.toFixed(1)),
          count: categoryStudents.length,
        };
      })
      .filter(Boolean); // Remove null entries
  }, [data]); // Depend on data prop

  const metrics = [
    { subject: "Scor Inteligență", fullMark: 100 },
    { subject: "IMC Normalizat", fullMark: 100 },
    { subject: "Vârsta Normalizată", fullMark: 100 },
    { subject: "Sport (%)", fullMark: 100 },
  ];

  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];

  // Removed type annotations for CustomTooltip params
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{`Metrica: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.payload.category}: ${entry.value}%`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={metrics}
          margin={{ top: 20, right: 80, bottom: 20, left: 80 }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={90} domain={[0, 100]} />{" "}
          {/* Domain 0-100 for normalized data */}
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {radarData.map((categoryData, index) => (
            <Radar
              key={categoryData?.category}
              name={categoryData?.category}
              dataKey={categoryData?.category} // Use category name as dataKey
              stroke={colors[index % colors.length]} // Ensure color wraps if more categories than colors
              fill={colors[index % colors.length]}
              fillOpacity={0.1}
              strokeWidth={2}
              data={metrics.map((metric) => ({
                // Map the metric subjects to their values for the current category
                subject: metric.subject,
                [categoryData?.category]: categoryData?.[metric.subject] || 0,
              }))}
            />
          ))}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
