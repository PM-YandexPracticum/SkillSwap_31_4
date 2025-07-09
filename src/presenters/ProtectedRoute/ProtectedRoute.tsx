import { Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from '../../services/store';

type ProtectedRouteProps = {
	onlyUnAuth?: boolean;
	children: React.ReactElement;
};

export const ProtectedRoute = ({
	onlyUnAuth,
	children,
}: ProtectedRouteProps) => {
	const user = true; // TODO: взять из useSelector
	// const isAuthChecked = true; // TODO: взять из useSelector
	const location = useLocation();

	// if (!isAuthChecked) {
	// 	return <></>;
	// }

	if (!onlyUnAuth && !user) {
		return <Navigate replace to='/login' state={{ from: location }} />;
	}

	if (onlyUnAuth && user) {
		const from = location.state?.from || { pathname: '/' };

		return <Navigate replace to={from} />;
	}

	return children;
};
