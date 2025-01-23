import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384"];

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
    <PieChart width={400} height={400}>
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
