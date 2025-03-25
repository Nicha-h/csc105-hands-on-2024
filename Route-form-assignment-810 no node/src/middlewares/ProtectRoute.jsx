import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = true; // Replace with actual authentication logic
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to the home page if not authenticated
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Render the protected component if authenticated
  return children;
}

export default ProtectedRoute;  