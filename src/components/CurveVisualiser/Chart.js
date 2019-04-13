import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ReferenceLine
} from "recharts";

function Chart({ from, to, steps, f, refs = [], label }) {
  const data = [];
  const step = Math.floor(to / steps);
  for (let x = from; x < to; x += step) {
    data.push({
      x: (x * 1e-6).toFixed(2),
      y: f(x)
    });
  }

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x">
        <Label value={label} position="insideBottom" offset={-5} />
      </XAxis>
      <YAxis
        dataKey="y"
        label={{
          value: "Price",
          angle: -90,
          position: "insideLeft"
        }}
      />
      <Tooltip />
      {refs.map(ref => (
        <ReferenceLine key={ref.label} {...ref} stroke="red" />
      ))}
      <Line dataKey="y" />
    </LineChart>
  );
}

export default Chart;
