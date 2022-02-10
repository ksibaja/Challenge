import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  let loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  let user = null;
  try {
    user = { loggedIn: loggedIn.auth };
  } catch (error) {
    user = false;
  }
  return user && user.loggedIn;
};

const PublicRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Navigate to="/main" /> : <Outlet />;
};

export default PublicRoute;
