import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./IndexPage";
import AdminPage from "./Pages/AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<IndexPage />} />
      </Routes>
    </Router>
  );
}

export default App;
