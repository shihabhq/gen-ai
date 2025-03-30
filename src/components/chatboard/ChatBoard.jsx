
import React from "react";
import {BarChartComponent, HorizontalBarChartComponent, PieChartComponent, ScatterChartComponent,LineChartComponent} from "./MockChart";
import { BarChartSkeleton, HorizontalBarSkeleton, LineChartSkeleton, PieChartSkeleton, ScatterChartSkeleton } from "../loading/Loading";

const ChatBoard = () => {
  return (
    <>
    <HorizontalBarChartComponent />
    <HorizontalBarSkeleton />
    </>
  )
};

export default ChatBoard;
