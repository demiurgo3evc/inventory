import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';

export default function ProtectedRoute() {
  const authenticated = isAuthenticated();

  if (!authenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
}