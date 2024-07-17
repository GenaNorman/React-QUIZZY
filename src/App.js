import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminPage from "./pages/Dashboard/AdminPage";
import CreatorPage from "./pages/Dashboard/CreatorPage";
import StudentPage from "./pages/Dashboard/StudentPage";
import HndPage from "./pages/Courses/HND/HndPage";
import HndPapersPage from "./pages/Courses/HND/HndPapersPage";
import { HandlerContext } from "./context/HandlerContext";

function App() {
  return (
    <HandlerContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="creator" element={<CreatorPage />} />
          <Route path="student" element={<StudentPage />} />

          <Route path="/exams/hndexams" element={<HndPage />} />
          <Route path="/HndPapersPage" element={<HndPapersPage />} />
        </Routes>
      </BrowserRouter>
    </HandlerContext>
  );
}

export default App;
