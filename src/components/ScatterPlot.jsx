import React from "react";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import customData from "../data/Wine-Data.json";

const ScatterPlot = () => {
  const hueData = customData.map((el) => el.Hue);
  const IntensityData = customData.map((el) => el["Color intensity"]);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      initChart(chartRef.current);
    }
  });
  function initChart(dom) {
    let chart = echarts.init(dom);
    const option = {
      xAxis: {
        name: "Color",
        type: "category",
        data: IntensityData,
      },
      yAxis: {
        name: "Hue",
        type: "value",
      },
      series: [
        {
          name: "Hue",
          data: hueData,
          type: "scatter",
          symbolSize: "8",
        },
      ],
    };
    chart.setOption(option);
  }
  return (
    <>
      <div className="chartRef" ref={chartRef}></div>
    </>
  );
};

export default ScatterPlot;
