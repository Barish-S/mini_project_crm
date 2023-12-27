// import "./styles.css";
import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { useSelector } from "react-redux";



export default function Example() {
    let globeData = useSelector((state) => state.user.loggedStatus.data)


  return (
    <BarChart
      width={500}
      height={300}
      data={globeData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3 " />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="phone" fill="#FFFFFF" background={{ fill: "#82ca9d" }} />
      <Bar dataKey="address" fill="#B8B8B8 " />
      
    </BarChart>
  );
}
