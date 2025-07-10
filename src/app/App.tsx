import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserById, getUsers } from '../entities/userSlice/thunk';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { useDispatch } from '../services/store';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';
import { Error500 } from '../pages/Error500/Error500';
import styles from './App.module.css';
import { NotFound404 } from '../pages/NotFound404/NotFound404';
import { ProfileFavoritesUI } from '../widgets/ProfileFavorites/ProfileFavorites';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
		dispatch(getUserById('686ac2ec267cc5ef811c8a23'));
	}, [dispatch]);

	return (
		<div className={styles.app}>
			<Routes>
				<Route path='/' element={<CatalogPage />} />
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
							<ProfileFavoritesUI />
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
				<Route path='/user/:id' element={<></>} />
				<Route path='*' element={<NotFound404 />} />
				<Route path='/500' element={<Error500 />} />
			</Routes>
		</div>
	);
};

export default App;
