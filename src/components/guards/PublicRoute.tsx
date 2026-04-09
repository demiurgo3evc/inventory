import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';

export default function PublicRoute() {
    const authenticated = isAuthenticated();

    if (authenticated) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}