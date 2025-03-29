/**
 * initialState object type = {
 *  question:string,
 *  result: 'BAR' | 'LINE' | 'GRAPH | 'PIE'
 *  loading: boolean,
 *  history: {id:'',question:'',reply:''}[]
 * }
 */

import { createSlice, nanoid } from "@reduxjs/toolkit";

//initial position of the state.
const initialState = {
  question: "",
  result: "",
  loading: false,
  error: "",
  history: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    //this one updates the chat state
    updateChat: (state, action) => {
      const historyObj = {
        id: nanoid(),
        question: action.payload.question,
        result: action.payload.result,
      };
      state.history.unshift(historyObj);
      state.question = action.payload.question;
      state.result = action.payload.result;
    },
    //this reducer updates the loading state
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },

    //to get single history

    //clears the whole history
    clearHistory: (state) => {
      state.history = [];
    },

    //resets everything
    resetChat: (state) => {
      state.question = "";
      state.result = "";
      state.loading = false;
    },
  },
});

//selectors
export const getHistoryById = (state) => (id) =>
  state.chat.history.find((historyItem) => historyItem.id === id);

export const getAllHistory = (state) => state.chat.history;

export const getTheCurrentChat = (state) => ({
  question: state.chat.question,
  result: state.chat.result,
  loading: state.chat.loading,
});

export const { clearHistory, resetChat, setLoading, updateChat } =
  chatSlice.actions;

export default chatSlice.reducer;
