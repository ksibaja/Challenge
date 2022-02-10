import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => (
  <Router>
    <Routes>
      <Route element={<PublicRoute />}>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/main" element={<Main />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
