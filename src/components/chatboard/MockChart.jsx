// BarChart.js

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from '@mui/x-charts';

const BarChartComponent = () => {
  // Data for the Bar Chart
  const data = [
    { name: "January", sales: 4000 },
    { name: "February", sales: 3000 },
    { name: "March", sales: 2000 },
    { name: "April", sales: 2780 },
    { name: "May", sales: 1890 },
    { name: "June", sales: 2390 },
  ];

  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2>Monthly Sales Data</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
