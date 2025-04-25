import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = [
  "#00C49F", "#0088FE", "#FF6384", "#FFBB28", "#FF8042",
  "#4BC0C0", "#36A2EB", "#9966FF", "#C9CBCF", "#FF9F40",
  "#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#D4E157",
  "#8E24AA", "#D81B60", "#43A047", "#FFEB3B", "#795548"
];

const SubmissionVerdictPieChart = ({ pieChartData }) => {
  const [data, setData] = useState([]);

  // Update state whenever pieChartData prop changes
  useEffect(() => {
    if (Array.isArray(pieChartData)) {
      setData(pieChartData);
    }
  }, [pieChartData]);

  // Handle the case where data is empty or invalid
  if (!data || data.length === 0) {
    return <p>No data available to render the chart.</p>;
  }

  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default SubmissionVerdictPieChart;
