import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DashBoard";
import LoginPage from "./pages/LoginPage";
import RegisterBatch from "./pages/RegisterBatch";
import ManageBatch from "./pages/ManageBatch";
import VerifyBatchTracking from "./pages/VerifyBatchTracking";
import Notifications from "./pages/Notifications";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<h1 className="text-black">Welcome to MedChain Dashboard</h1>} />
          <Route path="register-batch" element={<RegisterBatch />} />
          <Route path="manage-batch" element={<ManageBatch />} />
          <Route path="verify-batch" element={<VerifyBatchTracking />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </Router>
  );
}   
