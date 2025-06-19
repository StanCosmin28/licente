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

// Removed Student type interface
// interface SportsByIntelligenceProps {
//   data: Student[]
// }

const COLORS = ["#10b981", "#ef4444"]; // Green for "Cu Sport", Red for "Fără Sport"

export default function SportsByIntelligence({ data }) {
  // Removed type annotation for data
  const chartData = useMemo(() => {
    // Corrected property names to match chestionar_kms.json
    const levels = ["scazut", "mediu", "peste medie", "foarte bun"];

    return levels
      .map((level) => {
        const levelStudents = data.filter((s) => s.nivel_inteligenta === level); // Corrected property name
        const withSports = levelStudents.filter(
          (s) => s.practica_sport_extrascolar
        ).length; // Corrected property name
        const withoutSports = levelStudents.length - withSports;
        const total = levelStudents.length;

        const sportsPercentage =
          total > 0 ? ((withSports / total) * 100).toFixed(1) : "0";

        return {
          level: level.charAt(0).toUpperCase() + level.slice(1),
          "Cu Sport": withSports,
          "Fără Sport": withoutSports,
          total,
          sportsPercentage: Number(sportsPercentage),
        };
      })
      .filter((item) => item.total > 0);
  }, [data]);

  const correlationData = useMemo(() => {
    const withSports = data.filter((s) => s.practica_sport_extrascolar); // Corrected property name
    const withoutSports = data.filter((s) => !s.practica_sport_extrascolar); // Corrected property name

    const avgScoreWithSports =
      withSports.length > 0
        ? withSports.reduce((sum, s) => sum + s.rezultat_test_inteligenta, 0) /
          withSports.length // Corrected property name
        : 0;

    const avgScoreWithoutSports =
      withoutSports.length > 0
        ? withoutSports.reduce(
            (sum, s) => sum + s.rezultat_test_inteligenta,
            0
          ) / withoutSports.length // Corrected property name
        : 0;

    return {
      withSports: {
        count: withSports.length,
        avgScore: avgScoreWithSports.toFixed(1),
        percentage: ((withSports.length / data.length) * 100).toFixed(1),
      },
      withoutSports: {
        count: withoutSports.length,
        avgScore: avgScoreWithoutSports.toFixed(1),
        percentage: ((withoutSports.length / data.length) * 100).toFixed(1),
      },
      difference: (avgScoreWithSports - avgScoreWithoutSports).toFixed(1),
    };
  }, [data]);

  // Removed type annotations for CustomTooltip params
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const dataPoint = chartData.find((d) => d.level === label);
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{`Nivel inteligență: ${label}`}</p>
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

  return (
    <div className="space-y-6">
      {/* Sports Impact Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Cu Sport Extrașcolar
            </CardTitle>
            <CardDescription>
              {correlationData.withSports.count} elevi (
              {correlationData.withSports.percentage}%)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {correlationData.withSports.avgScore}
            </div>
            <p className="text-sm text-gray-500">puncte (scor mediu)</p>{" "}
            {/* Replaced text-muted-foreground */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              Fără Sport Extrașcolar
            </CardTitle>
            <CardDescription>
              {correlationData.withoutSports.count} elevi (
              {correlationData.withoutSports.percentage}%)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {correlationData.withoutSports.avgScore}
            </div>
            <p className="text-sm text-gray-500">puncte (scor mediu)</p>{" "}
            {/* Replaced text-muted-foreground */}
          </CardContent>
        </Card>
      </div>

      {/* Bar Chart by Intelligence Level */}
      <Card>
        <CardHeader>
          <CardTitle>
            Participarea la Sport pe Niveluri de Inteligență
          </CardTitle>
          <CardDescription>
            Distribuția elevilor care practică sport extrașcolar pe niveluri de
            inteligență
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
                <XAxis dataKey="level" />
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

      {/* Detailed Statistics by Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {chartData.map((item) => (
          <Card key={item.level}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{item.level}</CardTitle>
              <CardDescription>{item.total} elevi total</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {item.sportsPercentage}%
                  </div>
                  <p className="text-sm text-gray-500">practică sport</p>{" "}
                  {/* Replaced text-muted-foreground */}
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-green-600">Cu sport:</span>
                    <span className="font-medium">
                      {item["Cu Sport"]} elevi
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-600">Fără sport:</span>
                    <span className="font-medium">
                      {item["Fără Sport"]} elevi
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Impact Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>
            Analiza Impactului Sportului asupra Inteligentei
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Diferența de Performanță
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {Number(correlationData.difference) > 0 ? "+" : ""}
                    {correlationData.difference}
                  </div>
                  <p className="text-sm text-gray-500">puncte diferență</p>{" "}
                  {/* Replaced text-muted-foreground */}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Nivelul cu Cel Mai Mult Sport
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold">
                    {chartData.length > 0
                      ? chartData.reduce((max, item) =>
                          item.sportsPercentage > max.sportsPercentage
                            ? item
                            : max
                        ).level
                      : "N/A"}
                  </div>
                  <p className="text-sm text-gray-500">
                    {" "}
                    {/* Replaced text-muted-foreground */}
                    {chartData.length > 0
                      ? chartData.reduce((max, item) =>
                          item.sportsPercentage > max.sportsPercentage
                            ? item
                            : max
                        ).sportsPercentage
                      : "N/A"}
                    % practică sport
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Nivelul cu Cel Mai Puțin Sport
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold">
                    {chartData.length > 0
                      ? chartData.reduce((min, item) =>
                          item.sportsPercentage < min.sportsPercentage
                            ? item
                            : min
                        ).level
                      : "N/A"}
                  </div>
                  <p className="text-sm text-gray-500">
                    {" "}
                    {/* Replaced text-muted-foreground */}
                    {chartData.length > 0
                      ? chartData.reduce((min, item) =>
                          item.sportsPercentage < min.sportsPercentage
                            ? item
                            : min
                        ).sportsPercentage
                      : "N/A"}
                    % practică sport
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4 border-t border-gray-200">
              {" "}
              {/* Added border color */}
              <h4 className="font-medium mb-2">Concluzii:</h4>
              <div className="space-y-1 text-sm text-gray-500">
                {" "}
                {/* Replaced text-muted-foreground */}
                <p>
                  • Elevii care practică sport au un scor mediu cu{" "}
                  {Math.abs(Number(correlationData.difference))} puncte
                  {Number(correlationData.difference) > 0
                    ? " mai mare"
                    : " mai mic"}{" "}
                  decât cei care nu practică sport
                </p>
                <p>
                  • Impactul sportului este{" "}
                  {Math.abs(Number(correlationData.difference)) > 5
                    ? "semnificativ"
                    : "moderat"}
                  asupra performanțelor cognitive
                </p>
                <p>
                  • Există o{" "}
                  {chartData.some((item) => item.sportsPercentage > 70)
                    ? "corelație pozitivă puternică"
                    : "corelație moderată"}
                  între nivelurile înalte de inteligență și practicarea
                  sportului
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
