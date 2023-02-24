import React from "react";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import customData from "../data/Wine-Data.json";
const BarChart = () => {
  const chartRef = useRef(null);

  //  here is the approach to find Average of MAlic Acid 
  let MalicDataAverage = [];
  let AlcoholData = [1];
  let temp = 0;
  let alcohol = 1;

  for (let i = 0; i < customData.length; i++) {
    if (customData[i].Alcohol === alcohol) {
      temp = temp + customData[i]["Malic Acid"]
    } else {
      AlcoholData.push(customData[i].Alcohol)
      MalicDataAverage.push(temp)
      console.log(alcohol)
      temp = customData[i]["Malic Acid"];
      alcohol = customData[i].Alcohol
    }
  }

  MalicDataAverage.push(temp)
console.log(MalicDataAverage);


  useEffect(() => {
    if (chartRef.current) {
      initChart(chartRef.current);
    }
  });

  function initChart(dom) {
    let chart = echarts.init(dom);
    const option = {
      xAxis: {
        name: "Alcohol",
        type: "category",
        data: AlcoholData,
        color: "red",
      },
      yAxis: {
        name: "Malic Acid",
        type: "value",
      },
      series: [
        {
          name: "Alcohol",
          data: MalicDataAverage,
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "black",
          },
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

export default BarChart;