import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { getUsers } from '../features/userSlice/thunk';
import { useDispatch } from '../services/store';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	return (
		<>
			<Routes>
				<Route path='/' element={<CatalogPage />} />
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
