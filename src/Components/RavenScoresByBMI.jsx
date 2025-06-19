"use client";

import React, { useMemo } from "react"; // Added React import
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ErrorBar,
  ScatterChart,
  Scatter,
} from "recharts";

// Define placeholder Card, Badge components
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
  <p className={`text-sm text-gray-500 ${className || ""}`}>{children}</p>
);

const CardContent = ({ children, className }) => (
  <div className={`text-gray-700 ${className || ""}`}>{children}</div>
);

const Badge = ({ variant, children }) => {
  let bgColor = "bg-gray-100";
  let textColor = "text-gray-800";
  if (variant === "default") {
    bgColor = "bg-blue-100";
    textColor = "text-blue-800";
  } else if (variant === "secondary") {
    bgColor = "bg-green-100";
    textColor = "text-green-800";
  }
  // Add more variants as needed
  return (
    <div
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}
    >
      {children}
    </div>
  );
};

// Removed Student type interface as per request to remove TypeScript
// interface RavenScoresByBMIProps {
//   data: Student[]
// }

export default function RavenScoresByBMI({ data }) {
  // Removed type annotation for data
  const { boxPlotData, scatterData, stats } = useMemo(() => {
    const categories = ["subponderal", "normal", "supraponderal", "obez"];

    const boxPlotData = categories
      .map((category) => {
        const categoryStudents = data.filter(
          (s) => s.categorie_IMC === category
        );
        const scores = categoryStudents
          .map((s) => s.rezultat_test_inteligenta)
          .sort((a, b) => a - b); // Corrected property name

        if (scores.length === 0) {
          return null;
        }

        const q1Index = Math.floor(scores.length * 0.25);
        const medianIndex = Math.floor(scores.length * 0.5);
        const q3Index = Math.floor(scores.length * 0.75);

        const q1 = scores[q1Index] || 0;
        const median = scores[medianIndex] || 0;
        const q3 = scores[q3Index] || 0;
        const min = scores[0] || 0;
        const max = scores[scores.length - 1] || 0;
        const mean =
          scores.reduce((sum, score) => sum + score, 0) / scores.length;

        return {
          category: category.charAt(0).toUpperCase() + category.slice(1),
          median: Number(median.toFixed(1)),
          q1: Number(q1.toFixed(1)),
          q3: Number(q3.toFixed(1)),
          min: Number(min.toFixed(1)),
          max: Number(max.toFixed(1)),
          mean: Number(mean.toFixed(1)),
          count: scores.length,
          lowerError: median - q1,
          upperError: q3 - median,
        };
      })
      .filter(Boolean);

    const scatterData = data.map((student) => ({
      x: student.IMC,
      y: student.rezultat_test_inteligenta, // Corrected property name
      name: student.id,
      category: student.categorie_IMC,
      sex: student.sex,
    }));

    const stats = {
      totalStudents: data.length,
      avgScore:
        data.length > 0
          ? (
              data.reduce((sum, s) => sum + s.rezultat_test_inteligenta, 0) /
              data.length
            ).toFixed(1)
          : "0.0", // Corrected property name and added check for empty data
      minScore:
        data.length > 0
          ? Math.min(...data.map((s) => s.rezultat_test_inteligenta))
          : 0, // Corrected property name and added check for empty data
      maxScore:
        data.length > 0
          ? Math.max(...data.map((s) => s.rezultat_test_inteligenta))
          : 0, // Corrected property name and added check for empty data
    };

    return { boxPlotData, scatterData, stats };
  }, [data]);

  // Removed type annotations for BoxPlotTooltip params
  const BoxPlotTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const dataPoint = boxPlotData.find((d) => d?.category === label);
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{`Categorie: ${label}`}</p>
          <p className="text-gray-600">{`Numărul de elevi: ${
            dataPoint?.count || 0
          }`}</p>
          <p className="text-blue-600">{`Mediana: ${
            dataPoint?.median || 0
          } puncte`}</p>
          <p className="text-green-600">{`Media: ${
            dataPoint?.mean || 0
          } puncte`}</p>
          <p className="text-orange-600">{`Q1: ${
            dataPoint?.q1 || 0
          } puncte`}</p>
          <p className="text-orange-600">{`Q3: ${
            dataPoint?.q3 || 0
          } puncte`}</p>
          <p className="text-red-600">{`Min: ${dataPoint?.min || 0} puncte`}</p>
          <p className="text-red-600">{`Max: ${dataPoint?.max || 0} puncte`}</p>
        </div>
      );
    }
    return null;
  };

  // Removed type annotations for ScatterTooltip params
  const ScatterTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{`Elev: ${dataPoint.name}`}</p>
          <p className="text-blue-600">{`IMC: ${dataPoint.x} kg/m²`}</p>
          <p className="text-green-600">{`Scor Raven: ${dataPoint.y} puncte`}</p>
          <p className="text-gray-600">{`Categorie: ${dataPoint.category}`}</p>
          <p className="text-gray-600">{`Gen: ${dataPoint.sex}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Elevi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalStudents}</div>
            <p className="text-sm text-gray-500">participanți</p>{" "}
            {/* Replaced text-muted-foreground with text-gray-500 */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Scor Mediu</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.avgScore}</div>
            <p className="text-sm text-gray-500">puncte</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Scor Minim</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.minScore}</div>
            <p className="text-sm text-gray-500">puncte</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Scor Maxim</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.maxScore}</div>
            <p className="text-sm text-gray-500">puncte</p>
          </CardContent>
        </Card>
      </div>

      {/* Box Plot Style Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Distribuția Scorurilor Raven pe Categorii IMC</CardTitle>
          <CardDescription>
            Mediana, cuartile și valorile extreme pentru fiecare categorie IMC
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={boxPlotData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis
                  domain={[0, 60]}
                  label={{
                    value: "Scor Test Raven",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip content={<BoxPlotTooltip />} />
                <Bar dataKey="median" fill="#8884d8" radius={[4, 4, 0, 0]}>
                  {/* ErrorBar components should use actual data for error values */}
                  <ErrorBar dataKey="lowerError" width={4} stroke="#666" />
                  <ErrorBar dataKey="upperError" width={4} stroke="#666" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Scatter Plot */}
      <Card>
        <CardHeader>
          <CardTitle>Distribuția Individuală - IMC vs Scor Raven</CardTitle>
          <CardDescription>
            Valorile individuale pentru fiecare elev
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
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
                  name="Scor Raven"
                  domain={[0, 60]}
                  label={{
                    value: "Scor Test Raven",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip content={<ScatterTooltip />} />
                <Scatter
                  name="Băieți"
                  data={scatterData.filter((d) => d.sex === "baiat")} // Changed "băiat" to "baiat" for consistency with original data
                  fill="#3b82f6"
                  fillOpacity={0.7}
                />
                <Scatter
                  name="Fete"
                  data={scatterData.filter((d) => d.sex === "fata")} // Changed "fată" to "fata" for consistency with original data
                  fill="#ec4899"
                  fillOpacity={0.7}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Statistics by Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {boxPlotData.map((item) => (
          <Card key={item?.category}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{item?.category}</CardTitle>
              <CardDescription>{item?.count} elevi</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Media:</span>
                  <Badge variant="default">{item?.mean} puncte</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Mediana:</span>
                  <Badge variant="secondary">{item?.median} puncte</Badge>
                </div>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Q1:</span>
                    <span className="font-medium">{item?.q1}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Q3:</span>
                    <span className="font-medium">{item?.q3}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Min-Max:</span>
                    <span className="font-medium">
                      {item?.min}-{item?.max}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Performance Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Analiza Performanțelor pe Categorii</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">
                  Categoria cu cea mai bună performanță:
                </h4>
                <div className="text-xl font-bold text-green-600">
                  {boxPlotData.length > 0
                    ? boxPlotData.reduce((max, item) =>
                        (item?.mean || 0) > (max?.mean || 0) ? item : max
                      )?.category
                    : "N/A"}
                </div>
                <p className="text-sm text-gray-500">
                  {" "}
                  {/* Replaced text-muted-foreground */}
                  Media:{" "}
                  {boxPlotData.length > 0
                    ? boxPlotData.reduce((max, item) =>
                        (item?.mean || 0) > (max?.mean || 0) ? item : max
                      )?.mean
                    : "N/A"}{" "}
                  puncte
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">
                  Categoria cu cea mai slabă performanță:
                </h4>
                <div className="text-xl font-bold text-red-600">
                  {boxPlotData.length > 0
                    ? boxPlotData.reduce((min, item) =>
                        (item?.mean || Number.POSITIVE_INFINITY) <
                        (min?.mean || Number.POSITIVE_INFINITY)
                          ? item
                          : min
                      )?.category
                    : "N/A"}
                </div>
                <p className="text-sm text-gray-500">
                  {" "}
                  {/* Replaced text-muted-foreground */}
                  Media:{" "}
                  {boxPlotData.length > 0
                    ? boxPlotData.reduce((min, item) =>
                        (item?.mean || Number.POSITIVE_INFINITY) <
                        (min?.mean || Number.POSITIVE_INFINITY)
                          ? item
                          : min
                      )?.mean
                    : "N/A"}{" "}
                  puncte
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              {" "}
              {/* Added border color */}
              <h4 className="font-medium mb-2">Observații:</h4>
              <div className="space-y-1 text-sm text-gray-500">
                {" "}
                {/* Replaced text-muted-foreground */}
                <p>
                  • Diferența maximă între categorii:{" "}
                  {boxPlotData.length > 0
                    ? (
                        Math.max(
                          ...boxPlotData.map((item) => item?.mean || 0)
                        ) -
                        Math.min(
                          ...boxPlotData.map(
                            (item) => item?.mean || Number.POSITIVE_INFINITY
                          )
                        )
                      ).toFixed(1)
                    : "0"}{" "}
                  puncte
                </p>
                <p>
                  • Variabilitatea cea mai mare în categoria:{" "}
                  {boxPlotData.length > 0
                    ? boxPlotData.reduce((max, item) =>
                        (item?.max || 0) - (item?.min || 0) >
                        (max?.max || 0) - (max?.min || 0)
                          ? item
                          : max
                      )?.category
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
