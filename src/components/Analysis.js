import React from "react";
import './Analysis.css';
import SubmissionVerdictPieChart from "../charts/SubmissionVerdictPieChart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

function Analysis({ questionData }) {
  const submissions = Array.isArray(questionData.result) ? questionData.result : [];

  console.log("Submissions:", submissions);

  const aggregatedData = submissions.reduce((acc, submission) => {
    acc[submission.verdict] = (acc[submission.verdict] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = Object.entries(aggregatedData).map(([name, value]) => ({
    name,
    value,
  }));

  
  // Aggregate data by tags
  const tagCounts = submissions.reduce((acc, submission) => {
    submission.problem.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});
  
  // Format the data for the pie chart
  const pieChartDataByTags = Object.entries(tagCounts).map(([name, value]) => ({
    name,
    value,
  }));

  console.log("Pie Chart Data by Tags:", pieChartDataByTags);

  const ratingCounts = submissions.reduce((acc, submission) => {
    const rating = submission.problem.rating || "Unrated"; // Handle unrated problems
    acc[rating] = (acc[rating] || 0) + 1;
    return acc;
  }, {});

  // Format the data for the bar chart
  const barChartDataByRating = Object.entries(ratingCounts).map(([rating, count]) => ({
    rating,
    count,
  }));

  console.log("Bar Chart Data by Rating:", barChartDataByRating);

  return (
    <div>

      <div className="verdictPieChart box glass">
        <h3>Verdict Pie Chart</h3>
        <SubmissionVerdictPieChart pieChartData={pieChartData} />
      </div>

      <div className="tagPieChart box">
        <h3>Problem Tags Pie Chart</h3>
        <SubmissionVerdictPieChart pieChartData={pieChartDataByTags} />
      </div>

      <div className="ratingBarChart box">
        <h3>Questions Solved by Rating</h3>
        <BarChart width={600} height={400} data={barChartDataByRating}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="rating" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}

export default Analysis;