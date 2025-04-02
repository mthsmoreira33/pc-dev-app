import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../containers/Home";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/vagas" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
