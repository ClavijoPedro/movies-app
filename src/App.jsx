import { Route, Routes, useNavigate } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { PostersList } from './components/PostersList/PostersList';
import { Home } from './pages/Home/Home';
import { PosterDetail } from './pages/PosterDetail/PosterDetail';
import { NoMatch } from './pages/NoMatch/NoMatch';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { NavBar } from './components/NavBar/NavBar';
import { useSelector } from 'react-redux';

function App() {

	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/categoria/:categoryId' element={<PostersList />} />
				<Route path=':categoryId/detalle/:posterId' element={<PosterDetail />} />
				<Route path='*' element={<NoMatch />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
