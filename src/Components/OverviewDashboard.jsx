import { useMemo } from "react"; // Import React and useMemo

// Placeholder Card components (already defined in previous conversions)
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

// Placeholder Badge component
const Badge = ({ variant, children }) => {
  let bgColor = "bg-gray-100";
  let textColor = "text-gray-800";
  if (variant === "default") {
    bgColor = "bg-blue-100";
    textColor = "text-blue-800";
  } else if (variant === "secondary") {
    bgColor = "bg-green-100";
    textColor = "text-green-800";
  } else if (variant === "destructive") {
    bgColor = "bg-red-100";
    textColor = "text-red-800";
  }
  return (
    <div
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}
    >
      {children}
    </div>
  );
};

// Placeholder Progress component
const Progress = ({ value, className }) => (
  <div
    className={`w-full bg-gray-200 rounded-full overflow-hidden ${
      className || ""
    }`}
  >
    <div
      className="bg-blue-500 h-full rounded-full"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

// Replaced Lucide icons with inline SVGs
const UsersIcon = (props) => (
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
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BrainIcon = (props) => (
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
    <path d="M12 5C6.5 5 2 8.5 2 13a6 6 0 0 0 6 6h1.5l.5 2.5 2-1 2 1 .5-2.5H16a6 6 0 0 0 6-6c0-4.5-4.5-8-10-8Z" />
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
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
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
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
    <polyline points="16 17 22 17 22 11" />
  </svg>
);

export default function OverviewDashboard({ data }) {
  const stats = useMemo(() => {
    // Handle empty data array to prevent division by zero or NaN
    const total = data.length || 0;

    const avgIMC =
      total > 0 ? data.reduce((sum, s) => sum + s.IMC, 0) / total : 0;
    const avgIntelligence =
      total > 0
        ? data.reduce((sum, s) => sum + s.rezultat_test_inteligenta, 0) / total
        : 0;

    const imcCategories = {
      subponderal: data.filter((s) => s.categorie_IMC === "subponderal").length,
      normal: data.filter((s) => s.categorie_IMC === "normal").length,
      supraponderal: data.filter((s) => s.categorie_IMC === "supraponderal")
        .length,
      obez: data.filter((s) => s.categorie_IMC === "obez").length,
    };

    const intelligenceLevels = {
      scazut: data.filter((s) => s.nivel_inteligenta === "scazut").length,
      mediu: data.filter((s) => s.nivel_inteligenta === "mediu").length,
      "peste medie": data.filter((s) => s.nivel_inteligenta === "peste medie")
        .length,
      "foarte bun": data.filter((s) => s.nivel_inteligenta === "foarte bun")
        .length,
    };

    const withSports = data.filter((s) => s.practica_sport_extrascolar).length;
    const sportsPercentage = total > 0 ? (withSports / total) * 100 : 0;

    // Calculate correlation coefficient
    let correlation = 0;
    if (total > 1) {
      // Need at least 2 data points for correlation
      const meanIMC = avgIMC;
      const meanIntel = avgIntelligence;

      let numerator = 0;
      let denomIMC = 0;
      let denomIntel = 0;

      data.forEach((student) => {
        const imcDiff = student.IMC - meanIMC;
        const intelDiff = student.rezultat_test_inteligenta - meanIntel;
        numerator += imcDiff * intelDiff;
        denomIMC += imcDiff * imcDiff;
        denomIntel += intelDiff * intelDiff;
      });

      // Avoid division by zero if denominators are zero
      if (denomIMC > 0 && denomIntel > 0) {
        correlation = numerator / Math.sqrt(denomIMC * denomIntel);
      }
    }

    return {
      total,
      avgIMC,
      avgIntelligence,
      imcCategories,
      intelligenceLevels,
      sportsPercentage,
      correlation,
    };
  }, [data]);

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          {" "}
          {/* Wrap the first div in Card to maintain consistent styling */}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Elevi</CardTitle>
            <UsersIcon className="h-4 w-4 text-gray-500" />{" "}
            {/* Replaced Users */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-gray-500">
              {" "}
              {/* Replaced text-muted-foreground */}
              Participanți în studiu
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">IMC Mediu</CardTitle>
            <ActivityIcon className="h-4 w-4 text-gray-500" />{" "}
            {/* Replaced Activity */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.avgIMC.toFixed(1)}</div>
            <p className="text-xs text-gray-500">kg/m²</p>{" "}
            {/* Replaced text-muted-foreground */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Scor Mediu Inteligență
            </CardTitle>
            <BrainIcon className="h-4 w-4 text-gray-500" />{" "}
            {/* Replaced Brain */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.avgIntelligence.toFixed(1)}
            </div>
            <p className="text-xs text-gray-500">din 60 puncte</p>{" "}
            {/* Replaced text-muted-foreground */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Corelația IMC-Inteligență
            </CardTitle>
            {stats.correlation < 0 ? (
              <TrendingDownIcon className="h-4 w-4 text-red-500" />
            ) : (
              <TrendingUpIcon className="h-4 w-4 text-green-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.correlation.toFixed(3)}
            </div>
            <p className="text-xs text-gray-500">
              {" "}
              {/* Replaced text-muted-foreground */}
              {Math.abs(stats.correlation) > 0.3
                ? "Corelație moderată"
                : "Corelație slabă"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Distribution Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Distribuția Categoriilor IMC</CardTitle>
            <CardDescription>
              Numărul de elevi pe fiecare categorie
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(stats.imcCategories).map(([category, count]) => (
              <div key={category} className="space-y-2">
                <div className="flex justify-between">
                  <span className="capitalize">{category}</span>
                  <span className="font-medium">{count} elevi</span>
                </div>
                <Progress value={(count / stats.total) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nivelurile de Inteligență</CardTitle>
            <CardDescription>
              Distribuția performanțelor cognitive
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(stats.intelligenceLevels).map(([level, count]) => (
              <div key={level} className="space-y-2">
                <div className="flex justify-between">
                  <span className="capitalize">{level}</span>
                  <span className="font-medium">{count} elevi</span>
                </div>
                <Progress value={(count / stats.total) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Sports Participation */}
      <Card>
        <CardHeader>
          <CardTitle>Participarea la Sport Extrașcolar</CardTitle>
          <CardDescription>
            Impactul activității fizice asupra performanțelor
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <span>Elevi care practică sport</span>
            <Badge variant="secondary">
              {stats.sportsPercentage.toFixed(1)}%
            </Badge>
          </div>
          <Progress value={stats.sportsPercentage} className="h-3" />
          <p className="text-sm text-gray-500 mt-2">
            {" "}
            {/* Replaced text-muted-foreground */}
            {data.filter((s) => s.practica_sport_extrascolar).length} din{" "}
            {stats.total} elevi practică sport extrașcolar
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
