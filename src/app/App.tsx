import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserById, getUsers } from '../entities/userSlice/thunk';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { useDispatch, useSelector, type RootState } from '../services/store';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';
import { Error500 } from '../pages/Error500/Error500';
import styles from './App.module.css';
import { NotFound404 } from '../pages/NotFound404/NotFound404';
import { ProfileFavoritesUI } from '../widgets/ProfileFavorites/ProfileFavorites';
import { Footer } from '../shared/ui/Footer';
import { AppHeaderUI } from '../shared/ui/Header';
import { getUserByIdSelector } from '../entities/userSlice/userSlice';
import { getSkills } from '../entities/skillsSlice/thunk';
import { Preloader } from '../shared/ui/Preloader';

const App = () => {
	const dispatch = useDispatch();

	const user = useSelector(getUserByIdSelector);
	const { categories, status: skillsStatus } = useSelector(
		(state: RootState) => state.skills
	);

	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		dispatch(getUsers());
		dispatch(getUserById('686ac2ec267cc5ef811c8a23'));
		dispatch(getSkills());
	}, [dispatch]);

	const allSkills = categories.flatMap((cat) => cat.skills || []);

	const handleRegisterButtonClick = () => console.log('Register');
	const handleLoginButtonClick = () => console.log('Login');
	const handleCloseButtonClick = () => console.log('Close');
	const handleSkillTitleClick = (skill) => console.log('Title', skill);
	const handleSkillTagClick = (skill) => console.log('Tag', skill);

	// Показываем прелоадер пока загружаются категории (или если user ещё не определён)
	if (skillsStatus === 'loading' || !user) {
		return (
			<div className={styles.app}>
				<Preloader isAbsolute />
			</div>
		);
	}

	return (
		<div className={styles.app}>
			<AppHeaderUI
				isModal={false}
				isAuth
				isNotification
				categories={categories}
				user={user}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				searchOptions={allSkills}
				handleRegisterButtonClick={handleRegisterButtonClick}
				handleLoginButtonClick={handleLoginButtonClick}
				handleCloseButtonClick={handleCloseButtonClick}
				handleSkillTitleClick={handleSkillTitleClick}
				handleSkillTagClick={handleSkillTagClick}
			/>

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
				<Route path='/500' element={<Error500 />} />
				<Route path='*' element={<NotFound404 />} />
			</Routes>

			<Footer />
		</div>
	);
};

export default App;
