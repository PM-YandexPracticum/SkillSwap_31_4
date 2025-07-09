import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { ProtectedRoute } from '../presenters/ProtectedRoute/ProtectedRoute';
import { getUsers } from '../features/user/thunk';
import { useDispatch } from '../services/store';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<>
			<Routes>
				<Route path='/' element={<></>} />
				<Route
					path='/profile'
					element={
						<ProtectedRoute>
							<></>
						</ProtectedRoute>
					}
				/>
				<Route
					path='/profile/requests'
					element={
						<ProtectedRoute>
							<></>
						</ProtectedRoute>
					}
				/>
				<Route
					path='/profile/orders'
					element={
						<ProtectedRoute>
							<></>
						</ProtectedRoute>
					}
				/>
				<Route
					path='/profile/favorites'
					element={
						<ProtectedRoute>
							<></>
						</ProtectedRoute>
					}
				/>
				<Route
					path='/profile/skills'
					element={
						<ProtectedRoute>
							<></>
						</ProtectedRoute>
					}
				/>
				<Route
					path='/register'
					element={
						<ProtectedRoute onlyUnAuth>
							<></>
						</ProtectedRoute>
					}
				/>
				<Route
					path='/login'
					element={
						<ProtectedRoute onlyUnAuth>
							<></>
						</ProtectedRoute>
					}
				/>
				<Route path='/:id' element={<></>} />
				<Route path='*' element={<></>} />
				<Route path='/500' element={<></>} />
			</Routes>
		</>
	);
};

export default App;
