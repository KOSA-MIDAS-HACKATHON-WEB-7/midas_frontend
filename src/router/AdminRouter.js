import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdminPage from "../components/adminpage";

const AdminRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AdminRouter;
