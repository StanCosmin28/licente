"use client";

import React from "react"; // Import React
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = {
  subponderal: "#fbbf24",
  normal: "#10b981",
  supraponderal: "#f97316",
  obez: "#ef4444",
};

export default function PieChartDistribution({ data }) {
  const pieData = ["subponderal", "normal", "supraponderal", "obez"]
    .map((category) => {
      const count = data.filter((s) => s.categorie_IMC === category).length;
      // Ensure data.length is not zero to prevent division by zero errors
      const percentage =
        data.length > 0 ? ((count / data.length) * 100).toFixed(1) : "0.0";

      return {
        name: category.charAt(0).toUpperCase() + category.slice(1),
        value: count,
        percentage,
        color: COLORS[category],
      };
    })
    .filter((item) => item.value > 0); // Filter out categories with 0 value

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{`Categorie IMC: ${data.name}`}</p>
          <p className="text-blue-600">{`Numărul de elevi: ${data.value}`}</p>
          <p className="text-green-600">{`Procentaj: ${data.percentage}%`}</p>
        </div>
      );
    }
    return null;
  };

  // Removed type annotations for renderCustomizedLabel params
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {/* Render Cell components for each pie slice with its specific color */}
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
