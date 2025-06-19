"use client";

import React, { useMemo } from "react"; // Import React and useMemo
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Placeholder Card components (already defined in previous conversions, but included here for self-containment)
const Card = ({ children, className }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md ${className || ""}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className }) => (
  <div className={`mb-4 ${className || ""}`}>{children}</div>
);

const CardTitle = ({ children, className }) => (
  <h3 className={`text-xl font-semibold text-gray-800 ${className || ""}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className }) => (
  <p className={`text-sm text-gray-500 ${className || ""}`}>
    {" "}
    {/* Replaced text-muted-foreground with text-gray-500 */}
    {children}
  </p>
);

const CardContent = ({ children, className }) => (
  <div className={`text-gray-700 ${className || ""}`}>{children}</div>
);

const COLORS = ["#10b981", "#ef4444"]; // Green for "Cu Sport", Red for "Fără Sport"

export default function SportsByBMICategory({ data }) {
  const chartData = useMemo(() => {
    const categories = ["subponderal", "normal", "supraponderal", "obez"];

    return categories
      .map((category) => {
        const categoryStudents = data.filter(
          (s) => s.categorie_IMC === category
        );
        const withSports = categoryStudents.filter(
          (s) => s.practica_sport_extrascolar
        ).length;
        const withoutSports = categoryStudents.length - withSports;
        const total = categoryStudents.length;

        // Ensure total is not zero before division
        const sportsPercentage =
          total > 0 ? ((withSports / total) * 100).toFixed(1) : "0";

        return {
          category: category.charAt(0).toUpperCase() + category.slice(1),
          "Cu Sport": withSports,
          "Fără Sport": withoutSports,
          total,
          sportsPercentage: Number(sportsPercentage),
        };
      })
      .filter((item) => item.total > 0); // Filter out categories with no students
  }, [data]);

  const pieData = useMemo(() => {
    const totalWithSports = data.filter(
      (s) => s.practica_sport_extrascolar
    ).length;
    const totalWithoutSports = data.length - totalWithSports;

    return [
      {
        name: "Cu Sport",
        value: totalWithSports,
        color: COLORS[0],
        percentage:
          totalWithSports > 0
            ? ((totalWithSports / data.length) * 100).toFixed(1)
            : "0.0",
      },
      {
        name: "Fără Sport",
        value: totalWithoutSports,
        color: COLORS[1],
        percentage:
          totalWithoutSports > 0
            ? ((totalWithoutSports / data.length) * 100).toFixed(1)
            : "0.0",
      },
    ];
  }, [data]);

  // Removed type annotations for CustomTooltip params
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const dataPoint = chartData.find((d) => d.category === label);
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{`Categorie IMC: ${label}`}</p>
          <p className="text-gray-600">{`Total elevi: ${
            dataPoint?.total || 0
          }`}</p>
          <p className="text-green-600">{`Procent cu sport: ${
            dataPoint?.sportsPercentage || 0
          }%`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value} elevi`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Removed type annotations for PieTooltip params
  const PieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      const total = pieData.reduce((sum, item) => sum + item.value, 0);
      // Ensure total is not zero before division
      const percentage =
        total > 0 ? ((dataPoint.value / total) * 100).toFixed(1) : "0.0";
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{dataPoint.name}</p>
          <p className="text-blue-600">{`Numărul: ${dataPoint.value} elevi`}</p>
          <p className="text-green-600">{`Procentaj: ${percentage}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Bar Chart by BMI Category */}
      <Card>
        <CardHeader>
          <CardTitle>Participarea la Sport pe Categorii IMC</CardTitle>
          <CardDescription>
            Distribuția elevilor care practică sport extrașcolar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="Cu Sport" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar
                  dataKey="Fără Sport"
                  fill="#ef4444"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Overall Distribution Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Distribuția Generală Sport</CardTitle>
            <CardDescription>
              Proporția totală de elevi care practică sport
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    // Fix: Changed label prop to correctly access percentage from the entry object
                    // The previous code had a syntax error by destructuring inside the arrow function directly without curly braces for the function body.
                    // Recharts label function receives the data entry object directly as its argument.
                    label={(entry) => `${Number(entry.percentage).toFixed(1)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Statistici pe Categorii</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {chartData.map((item) => (
                  <div
                    key={item.category}
                    className="flex justify-between items-center"
                  >
                    <span className="font-medium">{item.category}:</span>
                    <div className="text-right">
                      <div className="font-bold">{item.sportsPercentage}%</div>
                      <div className="text-sm text-gray-500">
                        {" "}
                        {/* Replaced text-muted-foreground */}
                        {item["Cu Sport"]}/{item.total} elevi
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Observații</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                {chartData.length > 0 && (
                  <>
                    <p>
                      <strong>Cea mai activă categorie:</strong>{" "}
                      {
                        chartData.reduce((max, item) =>
                          item.sportsPercentage > max.sportsPercentage
                            ? item
                            : max
                        ).category
                      }{" "}
                      (
                      {
                        chartData.reduce((max, item) =>
                          item.sportsPercentage > max.sportsPercentage
                            ? item
                            : max
                        ).sportsPercentage
                      }
                      %)
                    </p>
                    <p>
                      <strong>Cea mai puțin activă categorie:</strong>{" "}
                      {
                        chartData.reduce((min, item) =>
                          item.sportsPercentage < min.sportsPercentage
                            ? item
                            : min
                        ).category
                      }{" "}
                      (
                      {
                        chartData.reduce((min, item) =>
                          item.sportsPercentage < min.sportsPercentage
                            ? item
                            : min
                        ).sportsPercentage
                      }
                      %)
                    </p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
