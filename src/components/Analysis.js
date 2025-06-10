import React from "react";
import SubmissionVerdictPieChart from "../charts/SubmissionVerdictPieChart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

function Analysis({ questionData }) {
  const submissions = Array.isArray(questionData.result) ? questionData.result : [];

  const aggregatedData = submissions.reduce((acc, submission) => {
    acc[submission.verdict] = (acc[submission.verdict] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = Object.entries(aggregatedData).map(([name, value]) => ({
    name,
    value,
  }));

  const tagCounts = submissions.reduce((acc, submission) => {
    submission.problem.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  const pieChartDataByTags = Object.entries(tagCounts).map(([name, value]) => ({
    name,
    value,
  }));

  const ratingCounts = submissions.reduce((acc, submission) => {
    const rating = submission.problem.rating || "Unrated";
    acc[rating] = (acc[rating] || 0) + 1;
    return acc;
  }, {});

  const barChartDataByRating = Object.entries(ratingCounts).map(([rating, count]) => ({
    rating,
    count,
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition-transform">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Verdict Pie Chart</h3>
        <SubmissionVerdictPieChart pieChartData={pieChartData} />
      </div>

      <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition-transform">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Problem Tags Pie Chart</h3>
        <SubmissionVerdictPieChart pieChartData={pieChartDataByTags} />
      </div>

      <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition-transform col-span-full lg:col-span-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Questions Solved by Rating</h3>
        <BarChart width={500} height={300} data={barChartDataByRating}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="rating" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#7c3aed" />
        </BarChart>
      </div>
    </div>
  );
}

export default Analysis;
