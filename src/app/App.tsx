import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { getUserById, getUsers } from '../features/user/thunk';
import { useDispatch } from '../services/store';
import { ProfileFavoritesUI } from '../widgets/ProfileFavorites/ProfileFavorites';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
		dispatch(getUserById('686ac2ec267cc5ef811c8a23'));
	}, []);

	return (
		<>
			<ProfileFavoritesUI />
			<Routes>
				<Route path='/' element={<></>} />
				<Route path='/profile' element={<></>} />
				<Route path='/profile/requests' element={<></>} />
				<Route path='/profile/orders' element={<></>} />
				<Route path='/profile/favorites' element={<></>} />
				<Route path='/profile/skills' element={<></>} />
				<Route path='/register' element={<></>} />
				<Route path='/login' element={<></>} />
				<Route path='/:id' element={<></>} />
				<Route path='*' element={<></>} />
				<Route path='/500' element={<></>} />
			</Routes>
		</>
	);
};

export default App;
