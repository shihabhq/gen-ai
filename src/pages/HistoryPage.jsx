import React from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { DynamicChart } from "../components/chatboard/MockChart";

const HistoryPage = () => {
  const { id } = useParams();
  const historyData = useSelector((state) =>
    state.chat.history.find((item) => item.id === id)
  );

  if (!historyData) {
    return (
      <div className="p-4 text-center">
        <h2>Chat not found</h2>
      </div>
    );
  }

  return (
    <div className="p-4 my-16 max-w-[800px] mx-auto w-[80%]">
      <h1 className="text-xl font-semibold mb-8">{historyData.question}</h1>
      {/* Render your chart or other history data here */}
      <DynamicChart type={historyData?.result} />
    </div>
  );
};

export default HistoryPage;
