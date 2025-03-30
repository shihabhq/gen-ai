import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import { getAllHistory } from "../../store/slices/chatSlice";

const History = () => {
  const allHistory = useSelector(getAllHistory);

  const HistoryLink = ({ history }) => {
    return (
      <NavLink
        to={`/chat/${history.id}`}
        className={({ isActive }) =>
          `text-base py-2 w-full inline-block  px-2 ${
            isActive
              ? "bg-[#0A1B3A] text-white rounded-l-sm border-r-2 border-smallBtn"
              : "hover:bg-[#0A1B3A] rounded-sm"
          }`
        }
      >
        {history?.question.slice(0, 20)}...
      </NavLink>
    );
  };

  return (
    <div className="mt-5 h-full">
      <h1 className="font-semibold text-sm ml-2">History</h1>
      <div className=" flex flex-col gap-1 mt-2 mb-10 h-full overflow-auto">
        {allHistory.length > 0 &&
          allHistory.map((history) => {
            return <HistoryLink key={history.id} history={history} />;
          })}
      </div>
    </div>
  );
};

export default History;
