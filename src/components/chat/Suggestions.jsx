import React from "react";
import { RiAiGenerate2 } from "react-icons/ri";

const allSuggestions = [
  { type: "BAR", text: "Show monthly sales performance for 2023" },
  { type: "LINE", text: "Display user growth trend over the last 6 months" },
  { type: "PIE", text: "Compare market share by product category" },
  {
    type: "SCATTER",
    text: "Analyze correlation between ad spend and conversions",
  },
  {
    type: "HORIZONTAL",
    text: "Show current inventory levels by product",
  },
];

const SuggestionList = ({ type, text, setChatInput, setShowResult }) => {
  return (
    <li
      onClick={(e) => {
        e.stopPropagation();
        setChatInput(text);
        setShowResult(type);
      }}
      className="cursor-pointer transition-all hover:bg-navyDark py-2 flex 
px-2 rounded-lg items-center gap-2 justify-start"
    >
      <RiAiGenerate2 size={20} />
      <p className="text-sm font-semibold">{text}</p>
    </li>
  );
};

const Suggestions = ({ setChatInput, setShowResult }) => {
  return (
    <ul className="px-5 pb-4 absolute z-40 bg-deepBlue rounded-b-lg flex flex-col gap-1">
      {allSuggestions.map((suggestion) => {
        return (
          <SuggestionList
            setChatInput={setChatInput}
            setShowResult={setShowResult}
            key={suggestion.type}
            type={suggestion.type}
            text={suggestion.text}
          />
        );
      })}
    </ul>
  );
};

export default Suggestions;
