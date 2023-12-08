import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "@/layouts";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/dashboard/executive-officers" replace />} />
    </Routes>
  );
}

export default App;
