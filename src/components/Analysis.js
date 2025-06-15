import React from "react";
import SubmissionVerdictPieChart from "../charts/SubmissionVerdictPieChart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

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
    <div className="min-h-screen bg-gradient-to-b from-sky-900 to-sky-600 py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">

        {/* Verdict Pie Chart */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Verdict Pie Chart</h3>
          <SubmissionVerdictPieChart pieChartData={pieChartData} />
        </div>

        {/* Problem Tags Pie Chart */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Problem Tags Pie Chart</h3>
          <SubmissionVerdictPieChart pieChartData={pieChartDataByTags} />
        </div>

        {/* Rating Bar Chart */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Questions Solved by Rating</h3>
          <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartDataByRating}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rating" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#7c3aed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Analysis;
