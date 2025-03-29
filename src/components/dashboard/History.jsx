import React from "react";
import { Link } from "react-router";

const History = () => {
  return (
    <div className="mt-2 h-full">
      <h1 className="font-semibold text-sm">History</h1>
      <div className=" flex flex-col gap-1 mt-2 mb-10 h-full overflow-auto">
        <Link className="text-base py-2 w-full border-r-2 border-btn
         inline-block rounded-l-sm bg-[#0A1B3A] px-2">
            We got the...
        </Link>
        <Link className="text-base py-2 w-full
         inline-block  rounded-sm hover:bg-[#0A1B3A] px-2">
            We got the...
        </Link>
      </div>
    </div>
  );
};

export default History;
