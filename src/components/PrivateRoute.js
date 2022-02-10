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

const PrivateRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
