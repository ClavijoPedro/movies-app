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
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { useEffect } from 'react';
import { Landing } from './pages/Landing/Landing';

function App() {
	// const { loggedIn } = useSelector((state) => state.auth);
	const navigate = useNavigate()

	//provisorio para saltear el login
	const loggedIn=true

	useEffect(() => {
		if(loggedIn){
			navigate('/home')
		}
	}, [])


	return (
		<>
			<NavBar user={loggedIn}/>
			<Routes>
				<Route index element={<Landing />}/>
				<Route path='/' element={<Landing />}/>
				<Route element={<ProtectedRoute user={loggedIn}/>}>
					<Route path='/home' element={<Home />} />
					<Route path='/categoria/:categoryId' element={<PostersList />} />
					<Route path=':categoryId/detalle/:posterId' element={<PosterDetail />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='*' element={<NoMatch />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
