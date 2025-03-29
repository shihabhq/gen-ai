import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { TbTopologyComplex } from "react-icons/tb";
import Suggestions from "./Suggestions";
import { useDispatch } from "react-redux";
import { updateChat } from "../../store/slices/chatSlice";

const ChatInput = () => {
  const dispatch = useDispatch();
  const [deepthink, setDeepthink] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showResult, setShowResult] = useState("");

  const handleSubmit = () => {
    if (!chatInput) return;

    setChatInput("");
    setShowSuggestions(false);
    dispatch(updateChat({ question: chatInput, result: showResult }));
    setShowResult("");
    setDeepthink(false);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  return (
    <div className="w-full rounded-xl bg-deepBlue">
      <textarea
        value={chatInput}
        onFocus={() => setShowSuggestions(true)}
        onBlur={handleBlur} // Updated onBlur handler
        onChange={(e) => setChatInput(e.target.value)}
        className="p-5 h-18 w-full border-none resize-none outline-none overflow-y-auto"
        placeholder="Ask complex questions to get data"
      ></textarea>
      <div className="px-5 flex pb-4 items-center justify-between">
        <div
          onClick={() => setDeepthink(!deepthink)}
          className={`flex gap-1 px-3 py-1 transition-all cursor-pointer rounded-full items-center justify-start ${
            deepthink ? " bg-navyDark text-btn" : "bg-softBlue"
          }`}
        >
          <TbTopologyComplex size={20} />
          Complex Search
        </div>
        <button
          onClick={handleSubmit}
          disabled={!chatInput}
          className={`rounded-full transition-all p-2 ${
            chatInput
              ? " bg-smallBtn cursor-pointer hover:opacity-80 active:scale-95"
              : "bg-softBlue"
          }`}
        >
          <IoSend size={20} />
        </button>
      </div>
      {showSuggestions && !chatInput && (
        <Suggestions
          setChatInput={setChatInput}
          setShowResult={setShowResult}
        />
      )}
    </div>
  );
};

export default ChatInput;
