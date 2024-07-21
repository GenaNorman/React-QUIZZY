import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminPage from "./pages/Dashboard/AdminPage";
import CreatorPage from "./pages/Dashboard/CreatorPage";
import StudentPage from "./pages/Dashboard/StudentPage";
import HndPage from "./pages/Courses/HND/HndPage";
import HndPapersPage from "./pages/Courses/HND/HndPapersPage";
import { HandlerContext } from "./context/HandlerContext";
import Home from "./components/Access/Home";

import Signup from "../src/components/Access/Signup";
import Signin from "../src/components/Access/signin";

function App() {
  return (
    <HandlerContext>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<StudentPage />}     /> */}
          <Route path="/" element={<Home />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="creator" element={<CreatorPage />} />
          <Route path="student" element={<StudentPage />} />

          <Route path="/exams/hndexams" element={<HndPage />} />
          <Route path="/HndPapersPage" element={<HndPapersPage />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </HandlerContext>
  );
}

export default App;
