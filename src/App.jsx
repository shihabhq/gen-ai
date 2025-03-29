//app will work as routes of this SPA application

import { Route, Routes } from "react-router";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="chat/:id" element={<HistoryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
