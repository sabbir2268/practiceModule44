import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const students = [
  { id: 1, name: "Alice", math: 85, english: 78, science: 92 },
  { id: 2, name: "Bob", math: 74, english: 81, science: 69 },
  { id: 3, name: "Charlie", math: 90, english: 88, science: 95 },
  { id: 4, name: "Diana", math: 66, english: 72, science: 70 },
  { id: 5, name: "Ethan", math: 80, english: 85, science: 78 },
];

const Charts = () => {
  return (
    <div className="px-10 mb-10">
      <LineChart width={800} height={300} data={students}>
        <CartesianGrid />
        <Line dataKey="math" stroke="red" />
        <Line dataKey="science" stroke="green" />
        <Line dataKey="english" stroke="blue" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Charts;
