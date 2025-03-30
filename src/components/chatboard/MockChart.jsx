import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { ScatterChart } from "@mui/x-charts/ScatterChart";

export function BarChartComponent() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          labelStyle: { fill: "#ffffff" },
          tickLabelStyle: { fill: "#ffffff" },
        },
      ]}
      series={[
        {
          data: [12500, 19000, 14200, 20500, 17800, 23100],
          color: "#0066fe", // --color-btn
        },
      ]}
      height={400}
      sx={{
        "& .MuiChartsAxis-tickLabel": { fill: "#ffffff" },
        "& .MuiChartsAxis-line": { stroke: "#ffffff" },
        "& .MuiChartsLegend-mark": { fill: "#0066fe" },
        "& .MuiChartsLegend-label": { fill: "#ffffff" },
      }}
    />
  );
}

export function LineChartComponent() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const users = [1200, 1850, 2100, 2540, 2875, 3200];

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <LineChart
        xAxis={[
          {
            data: months,
            label: "Timeline",
            scaleType: "band",
            labelStyle: { fill: "#ffffff" },
            tickLabelStyle: { fill: "#ffffff" },
          },
        ]}
        yAxis={[
          {
            label: "Users",
            labelStyle: { fill: "#ffffff" },
            tickLabelStyle: { fill: "#ffffff" },
          },
        ]}
        series={[
          {
            data: users,
            label: "Active Users",
            color: "#0066fe",
            area: true,
            showMark: true,
          },
        ]}
        sx={{
          // Legend text color
          "& .MuiChartsLegend-series text": {
            fill: "#ffffff !important",
          },
          // Legend marker color
          "& .MuiChartsLegend-mark": {
            fill: "#0066fe !important",
          },
          // Area styling
          "& .MuiAreaElement-root": {
            fill: "rgba(0, 102, 254, 0.2)",
            stroke: "none",
          },
          // Line styling
          "& .MuiLineElement-root": {
            stroke: "#0066fe",
            strokeWidth: 3,
          },
          // Markers styling
          "& .MuiMarkElement-root": {
            stroke: "#0066fe",
            fill: "#ffffff",
          },
          // Axis styling
          "& .MuiChartsAxis-tickLabel": {
            fill: "#ffffff",
          },
          "& .MuiChartsAxis-label": {
            fill: "#ffffff",
          },
        }}
        slotProps={{
          legend: {
            labelStyle: {
              fill: "#ffffff", // Alternative way to set legend text color
            },
          },
        }}
        grid={{
          horizontal: true,
          stroke: "rgba(255, 255, 255, 0.1)",
        }}
        margin={{ top: 20, bottom: 60, left: 70, right: 30 }}
      />
    </div>
  );
}
export function PieChartComponent() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 35, label: "Electronics" },
            { id: 1, value: 25, label: "Clothing" },
            { id: 2, value: 20, label: "Home Goods" },
            { id: 3, value: 12, label: "Books" },
            { id: 4, value: 8, label: "Other" },
          ],
          colors: ["#0066fe", "#4caeff", "#0f172a", "#3b82f6", "#1e40af"],
        },
      ]}
      height={400}
      slotProps={{
        legend: {
          labelStyle: { fill: "#ffffff" },
          markStyle: { fill: "#0066fe" },
        },
      }}
    />
  );
}

export function ScatterChartComponent() {
  return (
    <ScatterChart
      series={[
        {
          data: [
            { x: 1200, y: 45, id: 1 },
            { x: 1800, y: 62, id: 2 },
            { x: 2500, y: 78, id: 3 },
            { x: 3500, y: 81, id: 4 },
            { x: 4200, y: 92, id: 5 },
          ],
          color: "#0066fe",
        },
      ]}
      xAxis={[
        {
          label: "Ad Spend ($)",
          labelStyle: { fill: "#ffffff" },
          tickLabelStyle: { fill: "#ffffff" },
        },
      ]}
      yAxis={[
        {
          label: "Conversions",
          labelStyle: { fill: "#ffffff" },
          tickLabelStyle: { fill: "#ffffff" },
        },
      ]}
      height={400}
      sx={{
        // Axis styles
        "& .MuiChartsAxis-tickLabel": {
          fill: "#ffffff !important",
          fontSize: "0.875rem",
        },
        "& .MuiChartsAxis-label": {
          fill: "#ffffff !important",
          fontSize: "1rem",
          fontWeight: 500,
        },
        // Tooltip styles
        "& .MuiChartsTooltip-root": {
          color: "#ffffff",
          backgroundColor: "#0f172a",
          border: "1px solid #0066fe",
        },
        // Legend styles
        "& .MuiChartsLegend-series": {
          fill: "#ffffff !important",
        },
        "& .MuiChartsLegend-mark": {
          fill: "#0066fe !important",
        },
        // Grid lines
        "& .MuiChartsAxis-line": {
          stroke: "#4caeff",
          opacity: 0.3,
        },
      }}
    />
  );
}

export function HorizontalBarChartComponent() {
  return (
    <BarChart
      layout="horizontal"
      series={[
        {
          data: [142, 87, 53, 76, 210],
          color: "#0066fe",
        },
      ]}
      yAxis={[
        {
          data: ["Laptops", "Phones", "Tablets", "Monitors", "Accessories"],
          scaleType: "band",
          labelStyle: { fill: "#ffffff" },
          tickLabelStyle: { fill: "#ffffff" },
        },
      ]}
      xAxis={[
        {
          scaleType: "linear",
          labelStyle: { fill: "#ffffff" },
        },
      ]}
      height={400}
      sx={{
        "& .MuiChartsAxis-tickLabel": { fill: "#ffffff" },
        "& .MuiChartsAxis-line": { stroke: "#ffffff" },
      }}
    />
  );
}


