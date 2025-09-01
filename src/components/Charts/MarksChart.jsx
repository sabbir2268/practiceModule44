import React, { use } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  // console.log(marksDataRes);
  const marksData = marksDataRes.data;

  // data processing for making the nested data to normal data
  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      math: studentData.subjects.math,
      english: studentData.subjects.english,
      science: studentData.subjects.science,
    };
    const avg = (student.math + student.english + student.science) / 3;
    student.avg = avg;

    return student;
  });

  // console.log(marksChartData);

  return (
    <div className="flex justify-center items-center py-10">
      <BarChart width={500} height={300} data={marksChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="avg"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="math"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
        <Bar
          dataKey="english"
          fill="blue"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
        <Bar
          dataKey="science"
          fill="purple"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </div>
  );
};

export default MarksChart;
