import React, { useEffect } from "react";

import {
  BarChartComponent,
  HorizontalBarChartComponent,
  PieChartComponent,
  ScatterChartComponent,
  LineChartComponent,
  DynamicChart,
} from "./MockChart";
import {
  BarChartSkeleton,
  HorizontalBarSkeleton,
  LineChartSkeleton,
  Loading,
  PieChartSkeleton,
  ScatterChartSkeleton,
} from "../loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/slices/chatSlice";
import { InfinitySpin } from "react-loader-spinner";

const ChatBoard = () => {
  const dispatch = useDispatch();
  const { loading, question, result } = useSelector((state) => state.chat);


  useEffect(() => {
    let timeoutId;

    if (loading) {
      // Generate dummy result after delay
      timeoutId = setTimeout(() => {
 
        dispatch(setLoading(false));
      }, 2000);
    }

    return () => clearTimeout(timeoutId); // Cleanup
  }, [dispatch, loading, result]);
  return (
    <div className="min-h-[400px]">
      {question && (
        <div className="my-4 flex flex-col items-end gap-1">
          <h1 className="text-end text-sm font-bold">You</h1>
          <p
            className=" text-sm font-semibold bg-deepBlue max-w-[350px] rounded-lg w-[80%]
          p-4"
          >
            {question}
          </p>
        </div>
      )}
      {loading ? (
        // Show skeleton while loading
        <div className="flex flex-col mt-4 items-start justify-start">
          <div className="text-lg gap-1.5 font-bold flex items-center justify-start flex-wrap">
            {" "}
            <InfinitySpin
              visible={true}
              width="80"
              color="#4fa94d"
              ariaLabel="infinity-spin-loading"
            />{" "}
            GEN AI Thinking...
          </div>
          <Loading type={result} />
        </div>
      ) : result ? (
        // Show chart when result exists
        <>
          <div className=" text-sm font-bold">GEN AI</div>
          <DynamicChart type={result} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChatBoard;
