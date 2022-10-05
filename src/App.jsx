import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';
import { Home } from './pages/Home';
import { MovieDetail } from './pages/MovieDetail';
import { NoMatch } from './pages/NoMatch';

function App() {
	return (
		<>
		<Header />
		<Routes>
			<Route path='/' element={<Home />}/>
			{/* <Route path='/peliculas' element={<MoviesList />}/> */}
			<Route path='categoria/:categoryId' element={<MoviesList />}/>
			{/* <Route path='/series' element={<MoviesList />}/> */}
			<Route path='/detalle/:movieId' element={<MovieDetail />}/>
			<Route path='*' element={<NoMatch/>}/>
		</Routes>
		<Footer />
		</>
	);
}

export default App;
