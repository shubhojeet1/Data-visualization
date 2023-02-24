import BarChart from "./BarChart";
import ScatterPlot from "./ScatterPlot";

export const DisplayData = () => {
  return (
    <div className="cont">
      <ScatterPlot />
      <BarChart />
    </div>
  );
};
