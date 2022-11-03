import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdminPage from "../components/adminpage";
import AdminApplication from "../components/adminpage/application";
import CheckSignup from "../components/adminpage/checkSignup";

const AdminRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/application" element={<AdminApplication />} />
        <Route path="/admin/signup" element={<CheckSignup/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AdminRouter;
