import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserById, getUsers } from '../entities/userSlice/thunk';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { useDispatch, useSelector, type RootState } from '../services/store';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';
import { Error500 } from '../pages/Error500/Error500';
import styles from './App.module.css';
import { NotFound404 } from '../pages/NotFound404/NotFound404';
import { Footer } from '../shared/ui/Footer';
import { AppHeaderUI } from '../shared/ui/Header';
import { getUserByIdSelector } from '../entities/userSlice/userSlice';
import { getSkills } from '../entities/skillsSlice/thunk';
import { Preloader } from '../shared/ui/Preloader';
import { ProfileFavoritesUI } from '../widgets/ProfileFavorites/ProfileFavorites';
import { Profile } from '../features/Profile/Profile';
import { ProfileLayout } from '../pages/ProfileLayout/ProfileLayout';

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
				handleRegisterButtonClick={() => console.log('Register')}
				handleLoginButtonClick={() => console.log('Login')}
				handleCloseButtonClick={() => console.log('Close')}
				handleSkillTitleClick={(skill) => console.log('Title', skill)}
				handleSkillTagClick={(skill) => console.log('Tag', skill)}
			/>

			<Routes>
				<Route path='/' element={<CatalogPage />} />

				{/* Профиль и вложенные маршруты */}
				<Route
					path='/profile'
					element={
						<ProtectedRoute>
							<ProfileLayout />
						</ProtectedRoute>
					}>
					<Route index element={<Profile />} />
					<Route path='requests' element={<div>Заявки</div>} />
					<Route path='orders' element={<div>Мои обмены</div>} />
					<Route path='favorites' element={<ProfileFavoritesUI />} />
					<Route path='skills' element={<div>Мои навыки</div>} />
				</Route>

				<Route
					path='/register'
					element={
						<ProtectedRoute onlyUnAuth>
							<div>Регистрация</div>
						</ProtectedRoute>
					}
				/>
				<Route
					path='/login'
					element={
						<ProtectedRoute onlyUnAuth>
							<div>Вход</div>
						</ProtectedRoute>
					}
				/>

				<Route path='/user/:id' element={<div>Профиль пользователя</div>} />
				<Route path='/500' element={<Error500 />} />
				<Route path='*' element={<NotFound404 />} />
			</Routes>

			<Footer />
		</div>
	);
};

export default App;
