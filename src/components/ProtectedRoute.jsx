import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthenticationContext } from "./AuthProvider";

export default function ProtectedRoute({ children }) {
  const {token} = useContext(AuthenticationContext);

  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}
