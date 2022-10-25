import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { PostersList } from './components/PostersList/PostersList';
import { Home } from './pages/Home/Home';
import { PosterDetail } from './pages/PosterDetail/PosterDetail';
import { NoMatch } from './pages/NoMatch/NoMatch';
import { Login } from './pages/Login/Login';
import { Register } from './pages/register/Register';
import { NavBar } from './components/NavBar/NavBar';

function App() {
	let user = '';
	user = 'pepe'; // para prueba
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={!user ? <Login /> : <Home />} />
				<Route path='/register' element={<Register />} />
				<Route path='/home' element={<Home />} />
				<Route path='/categoria/:categoryId' element={<PostersList />} />
				<Route path=':categoryId/detalle/:posterId' element={<PosterDetail />} />
				<Route path='*' element={<NoMatch />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
