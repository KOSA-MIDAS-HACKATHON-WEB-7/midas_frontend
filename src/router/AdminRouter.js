import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdminPage from "../components/adminpage";
import AdminApplication from "../components/adminpage/application";

const AdminRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/application" element={<AdminApplication />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AdminRouter;
