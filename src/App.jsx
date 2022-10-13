import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { PostersList } from './components/PostersList/PostersList';
import { Home } from './pages/Home/Home';
import { PosterDetail } from './pages/PosterDetail/PosterDetail';
import { NoMatch } from './pages/NoMatch/NoMatch';
import { Login } from './pages/Login/Login';
import { Register } from './pages/register/Register';
import { Hero } from './components/Hero/Hero';

function App() {
	let user = '';
	user = 'pepe'; // para prueba
	return (
		<>
			<Header />
			<Hero />
			<Routes>
				<Route path='/' element={!user ? <Login /> : <Home />} />
				<Route path='/register' element={<Register />} />
				<Route path='/home' element={<Home />} />
				<Route path='categoria/:categoryId' element={<PostersList />} />
				<Route path='/detalle/:movieId' element={<PosterDetail />} />
				<Route path='*' element={<NoMatch />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
