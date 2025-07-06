import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => (
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
);

export default App;
