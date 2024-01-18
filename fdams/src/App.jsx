import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./IndexPage";
import AdminPage from "./Pages/AdminPage";
import { UserContextProvider } from "./UserContext";
import axios from "axios";
import WebcamCapture from "./components/WebcamCapture";

function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<IndexPage />} />          
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
