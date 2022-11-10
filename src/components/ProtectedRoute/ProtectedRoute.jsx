import { Outlet, Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, user, redirectTo = '/login' }) => {
	if (!user) {
		return <Navigate to={redirectTo} />;
	}

	return <Outlet />;
};


