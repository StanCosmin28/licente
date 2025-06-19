// import { useMemo } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
// import studentsData from "../data/studentsData";

// // Define the expected structure for a Student object.
// // In a real application, this 'Student' type would typically be defined
// // in a separate types file or passed down as props from a parent component.
// /**
//  * @typedef {Object} Student
//  * @property {string} categorie_IMC - The BMI category (e.g., "subponderal", "normal", "supraponderal", "obez").
//  * @property {string} sex - The gender of the student ("băiat" for boy, "fată" for girl).
//  * @property {number} IMC - The Body Mass Index value.
//  */

// // Colors for BMI categories (if used, currently only fill for bars)
// const BMI_COLORS = {
//   subponderal: "#fbbf24", // amber-400
//   normal: "#10b981", // emerald-500
//   supraponderal: "#f97316", // orange-500
//   obez: "#ef4444", // red-500
// };

// // Main component accepting student data
// const BMIBySex = (studentsData) => {
//   // Memoize the chart data calculation for performance
//   const chartData = useMemo(() => {
//     const categories = ["subponderal", "normal", "supraponderal", "obez"];

//     return categories
//       .map((category) => {
//         const categoryStudents = studentsData.filter((s) => s.categorie_IMC === category);

//         const boys = categoryStudents.filter((s) => s.sex === "băiat").length;
//         const girls = categoryStudents.filter((s) => s.sex === "fată").length;
//         const total = categoryStudents.length;

//         // Calculate percentages, ensuring division by zero is handled
//         const boysPercentage =
//           total > 0 ? ((boys / total) * 100).toFixed(1) : "0";
//         const girlsPercentage =
//           total > 0 ? ((girls / total) * 100).toFixed(1) : "0";

//         return {
//           category: category.charAt(0).toUpperCase() + category.slice(1), // Capitalize first letter
//           Băieți: boys, // Romanian for Boys
//           Fete: girls, // Romanian for Girls
//           total,
//           boysPercentage: Number(boysPercentage),
//           girlsPercentage: Number(girlsPercentage),
//         };
//       })
//       .filter((item) => item.total > 0); // Only include categories with students
//   }, [studentsData]);

//   // Memoize gender statistics calculation
//   const genderStats = useMemo(() => {
//     const boys = studentsData.filter((s) => s.sex === "băiat");
//     const girls = studentsData.filter((s) => s.sex === "fată");

//     const boysIMC = boys.map((s) => s.IMC);
//     const girlsIMC = girls.map((s) => s.IMC);

//     // Calculate average, min, and max IMC, handling empty arrays
//     const avgIMCBoys =
//       boys.length > 0
//         ? boys.reduce((sum, s) => sum + s.IMC, 0) / boys.length
//         : 0;
//     const avgIMCGirls =
//       girls.length > 0
//         ? girls.reduce((sum, s) => sum + s.IMC, 0) / girls.length
//         : 0;

//     return {
//       boys: {
//         count: boys.length,
//         avgIMC: avgIMCBoys.toFixed(1),
//         minIMC: boys.length > 0 ? Math.min(...boysIMC).toFixed(1) : "0",
//         maxIMC: boys.length > 0 ? Math.max(...boysIMC).toFixed(1) : "0",
//       },
//       girls: {
//         count: girls.length,
//         avgIMC: avgIMCGirls.toFixed(1),
//         minIMC: girls.length > 0 ? Math.min(...girlsIMC).toFixed(1) : "0",
//         maxIMC: girls.length > 0 ? Math.max(...girlsIMC).toFixed(1) : "0",
//       },
//       // Calculate difference and format to 1 decimal place
//       difference: (avgIMCBoys - avgIMCGirls).toFixed(1),
//     };
//   }, [data]);

//   // Custom tooltip component for the Recharts BarChart
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       const currentData = chartData.find((d) => d.category === label);
//       return (
//         <div className="bg-gray-800 p-3 border border-gray-700 rounded-lg shadow-lg text-gray-100">
//           <p className="font-medium text-white">{`Categorie IMC: ${label}`}</p>
//           <p className="text-gray-400">{`Total elevi: ${currentData?.total}`}</p>
//           {payload.map((entry, index) => (
//             <p key={index} style={{ color: entry.color }}>
//               {`${entry.dataKey}: ${entry.value} elevi`}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     // Main container for the dark theme layout
//     <div className="min-h-screen bg-gray-950 text-gray-100 p-6 space-y-6 font-sans">
//       {/* Gender Statistics Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Card for Boys Statistics */}
//         <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
//           <div className="pb-4">
//             <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
//               <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
//               Băieți
//             </h3>
//             <p className="text-gray-400 text-sm">
//               {genderStats.boys.count} elevi
//             </p>
//           </div>
//           <div className="space-y-2">
//             <div className="text-3xl font-bold text-blue-400">
//               {genderStats.boys.avgIMC} kg/m²
//             </div>
//             <p className="text-sm text-gray-400">IMC mediu</p>
//             <div className="text-sm pt-2">
//               <div className="flex justify-between items-center text-gray-300">
//                 <span>Minim:</span>
//                 <span className="font-medium text-white">
//                   {genderStats.boys.minIMC} kg/m²
//                 </span>
//               </div>
//               <div className="flex justify-between items-center text-gray-300">
//                 <span>Maxim:</span>
//                 <span className="font-medium text-white">
//                   {genderStats.boys.maxIMC} kg/m²
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Card for Girls Statistics */}
//         <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
//           <div className="pb-4">
//             <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
//               <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
//               Fete
//             </h3>
//             <p className="text-gray-400 text-sm">
//               {genderStats.girls.count} elevi
//             </p>
//           </div>
//           <div className="space-y-2">
//             <div className="text-3xl font-bold text-pink-400">
//               {genderStats.girls.avgIMC} kg/m²
//             </div>
//             <p className="text-sm text-gray-400">IMC mediu</p>
//             <div className="text-sm pt-2">
//               <div className="flex justify-between items-center text-gray-300">
//                 <span>Minim:</span>
//                 <span className="font-medium text-white">
//                   {genderStats.girls.minIMC} kg/m²
//                 </span>
//               </div>
//               <div className="flex justify-between items-center text-gray-300">
//                 <span>Maxim:</span>
//                 <span className="font-medium text-white">
//                   {genderStats.girls.maxIMC} kg/m²
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bar Chart - Distribution by Gender and BMI Category */}
//       <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
//         <div className="pb-4">
//           <h3 className="text-xl font-semibold text-white">
//             Distribuția Categoriilor IMC pe Gen
//           </h3>
//           <p className="text-gray-400 text-sm">
//             Numărul de elevi pe fiecare categorie IMC, împărțit pe gen
//           </p>
//         </div>
//         <div className="w-full h-80">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               data={chartData}
//               margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />{" "}
//               {/* Darker grid lines */}
//               <XAxis
//                 dataKey="category"
//                 stroke="#cbd5e0"
//                 tick={{ fill: "#cbd5e0" }}
//               />{" "}
//               {/* Light gray for text */}
//               <YAxis stroke="#cbd5e0" tick={{ fill: "#cbd5e0" }} />
//               <Tooltip content={<CustomTooltip />} />
//               <Legend wrapperStyle={{ color: "#cbd5e0" }} />{" "}
//               {/* Light gray for legend text */}
//               <Bar dataKey="Băieți" fill="#3b82f6" radius={[4, 4, 0, 0]} />{" "}
//               {/* blue-500 */}
//               <Bar dataKey="Fete" fill="#ec4899" radius={[4, 4, 0, 0]} />{" "}
//               {/* pink-500 */}
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Percentage Distribution Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {chartData.map((item) => (
//           <div
//             key={item.category}
//             className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700"
//           >
//             <div className="pb-2">
//               <h3 className="text-lg font-semibold text-white">
//                 {item.category}
//               </h3>
//               <p className="text-gray-400 text-sm">{item.total} elevi total</p>
//             </div>
//             <div className="space-y-3 pt-2">
//               <div className="flex justify-between items-center">
//                 <span className="text-blue-400">Băieți:</span>
//                 <div className="text-right">
//                   <div className="font-bold text-white">{item.Băieți}</div>
//                   <div className="text-sm text-gray-400">
//                     {item.boysPercentage}%
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-pink-400">Fete:</span>
//                 <div className="text-right">
//                   <div className="font-bold text-white">{item.Fete}</div>
//                   <div className="text-sm text-gray-400">
//                     {item.girlsPercentage}%
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Analysis Card */}
//       <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
//         <div className="pb-4">
//           <h3 className="text-xl font-semibold text-white">
//             Analiza Diferențelor de Gen
//           </h3>
//         </div>
//         <div className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <h4 className="font-medium mb-2 text-white">
//                 Diferența IMC mediu:
//               </h4>
//               <div className="text-3xl font-bold text-blue-300">
//                 {Math.abs(Number(genderStats.difference))} kg/m²
//               </div>
//               <p className="text-sm text-gray-400">
//                 {Number(genderStats.difference) > 0
//                   ? "Băieții au IMC mai mare"
//                   : Number(genderStats.difference) < 0
//                   ? "Fetele au IMC mai mare"
//                   : "IMC similar între genuri"}
//               </p>
//             </div>

//             <div>
//               <h4 className="font-medium mb-2 text-white">
//                 Categorii predominante:
//               </h4>
//               <div className="space-y-1 text-sm text-gray-300">
//                 {chartData.map((item) => {
//                   const predominantGender =
//                     item.Băieți > item.Fete
//                       ? "Băieți"
//                       : item.Fete > item.Băieți
//                       ? "Fete"
//                       : "Echilibrat";
//                   return (
//                     <div key={item.category} className="flex justify-between">
//                       <span>{item.category}:</span>
//                       <span className="font-medium text-white">
//                         {predominantGender}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           <div className="pt-4 border-t border-gray-700">
//             <h4 className="font-medium mb-2 text-white">Observații:</h4>
//             <div className="space-y-1 text-sm text-gray-400">
//               <p>
//                 • Diferența de IMC între genuri este{" "}
//                 {Math.abs(Number(genderStats.difference)) < 1
//                   ? "mică"
//                   : "semnificativă"}{" "}
//                 ({Math.abs(Number(genderStats.difference))} kg/m²)
//               </p>
//               <p>
//                 • Distribuția pe categorii IMC{" "}
//                 {chartData.every(
//                   (item) => Math.abs(item.Băieți - item.Fete) <= 1
//                 )
//                   ? "este echilibrată"
//                   : "variază"}{" "}
//                 între genuri
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BMIBySex;
